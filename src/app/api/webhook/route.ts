import { NextRequest, NextResponse } from 'next/server'
import { mpPayment } from '@/lib/mercadopago'
import { createServiceClient } from '@/lib/supabase/server'
import { getResend, FROM_EMAIL, OWNER_EMAIL } from '@/lib/resend'
import { sendOrderWhatsApp } from '@/lib/whatsapp'
import { formatARS } from '@/lib/formatters'
import type { Order } from '@/types/order'

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const topicParam = searchParams.get('topic')
    const idParam = searchParams.get('id')

    const body = await req.json().catch(() => ({}))

    // MP puede mandar el topic en query params (IPN) o en el body (Webhooks)
    const topic = topicParam ?? body.type

    // merchant_order: buscar el payment aprobado dentro de la orden
    if (topic === 'merchant_order' && idParam) {
      const { MercadoPagoConfig, MerchantOrder } = await import('mercadopago')
      const mpClient = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! })
      const merchantOrderApi = new MerchantOrder(mpClient)
      const merchantOrder = await merchantOrderApi.get({ merchantOrderId: Number(idParam) })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const approvedPayment = (merchantOrder as any).payments?.find((p: any) => p.status === 'approved')
      if (!approvedPayment) return NextResponse.json({ ok: true })
      return processPayment(String(approvedPayment.id))
    }

    // Webhook estándar con body.type === 'payment'
    const paymentId = body.data?.id ?? (topic === 'payment' ? idParam : null)
    if (topic !== 'payment' || !paymentId) {
      return NextResponse.json({ ok: true })
    }

    return processPayment(String(paymentId))
  } catch (err) {
    console.error('[Webhook] Error:', err)
    return NextResponse.json({ ok: true })
  }
}

async function processPayment(paymentId: string): Promise<NextResponse> {
  try {
    const payment = await mpPayment.get({ id: paymentId })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paymentData = payment as any
    const status = paymentData.status as string
    const preferenceId = paymentData.preference_id as string | undefined

    if (!preferenceId) {
      return NextResponse.json({ ok: true })
    }

    const supabase = createServiceClient()

    const { data: order } = await supabase
      .from('orders')
      .select('*')
      .eq('mp_preference_id', preferenceId)
      .single()

    if (!order) {
      console.warn('[Webhook] Orden no encontrada para preference_id:', preferenceId)
      return NextResponse.json({ ok: true })
    }

    const orderStatus =
      status === 'approved' ? 'approved' :
      status === 'rejected' ? 'rejected' :
      status === 'cancelled' ? 'cancelled' :
      'pending'

    await supabase
      .from('orders')
      .update({
        status: orderStatus,
        mp_payment_id: String(paymentId),
        updated_at: new Date().toISOString(),
      })
      .eq('id', order.id)

    if (orderStatus === 'approved') {
      for (const item of order.items) {
        if (item.variant_id) {
          await supabase.rpc('decrement_variant_stock', { variant_id: item.variant_id, qty: item.quantity })
        } else {
          await supabase.rpc('decrement_product_stock', { product_id: item.product_id, qty: item.quantity })
        }
      }

      const typedOrder = order as Order

      await getResend().emails.send({
        from: FROM_EMAIL,
        to: typedOrder.customer_email,
        subject: `¡Tu compra en DALT está confirmada! (#${order.id.slice(0, 8)})`,
        html: buildBuyerEmail(typedOrder),
      }).catch((err) => console.error('[Webhook] Error email comprador:', err))

      await getResend().emails.send({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        subject: `🛒 Nueva venta #${order.id.slice(0, 8)} - ${typedOrder.customer_name}`,
        html: buildOwnerEmail(typedOrder),
      }).catch((err) => console.error('[Webhook] Error email dueño:', err))

      await sendOrderWhatsApp(typedOrder)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Webhook] processPayment error:', err)
    return NextResponse.json({ ok: true })
  }
}

function buildBuyerEmail(order: Order): string {
  const addr = order.shipping_address
  const items = order.items
    .map((i) => `<li>${i.name}${i.variant_label ? ` (${i.variant_label})` : ''} ×${i.quantity} — ${formatARS(i.price_ars * i.quantity)}</li>`)
    .join('')

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1 style="color: #2563eb;">¡Gracias por tu compra!</h1>
      <p>Hola <strong>${order.customer_name}</strong>, recibimos tu pago correctamente.</p>
      <h2>Resumen de tu pedido</h2>
      <ul>${items}</ul>
      <p><strong>Total:</strong> ${formatARS(order.total_ars)}</p>
      <h2>Dirección de entrega</h2>
      <p>
        ${addr.calle} ${addr.numero}${addr.piso_dpto ? `, ${addr.piso_dpto}` : ''}<br>
        ${addr.ciudad}, ${addr.provincia} (${addr.codigo_postal})
      </p>
      <p>Te vamos a contactar por WhatsApp para coordinar el envío.</p>
      <p style="color: #888; font-size: 12px;">DALT Importaciones | Bahía Blanca, Buenos Aires</p>
    </div>
  `
}

function buildOwnerEmail(order: Order): string {
  const addr = order.shipping_address
  const items = order.items
    .map((i) => `<li>${i.name}${i.variant_label ? ` (${i.variant_label})` : ''} ×${i.quantity} — ${formatARS(i.price_ars * i.quantity)}</li>`)
    .join('')

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h1>Nueva venta #${order.id.slice(0, 8)}</h1>
      <p><strong>Cliente:</strong> ${order.customer_name}</p>
      <p><strong>Email:</strong> ${order.customer_email}</p>
      <p><strong>Teléfono:</strong> ${order.customer_phone || 'No informado'}</p>
      <h2>Productos</h2>
      <ul>${items}</ul>
      <p><strong>Total cobrado:</strong> ${formatARS(order.total_ars)}</p>
      <h2>Dirección de envío</h2>
      <p>
        ${addr.calle} ${addr.numero}${addr.piso_dpto ? `, ${addr.piso_dpto}` : ''}<br>
        ${addr.ciudad}, ${addr.provincia} (${addr.codigo_postal})
      </p>
      <p>ID completo: ${order.id}</p>
    </div>
  `
}
