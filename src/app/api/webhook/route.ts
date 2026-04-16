import { NextRequest, NextResponse } from 'next/server'
import { mpPayment } from '@/lib/mercadopago'
import { createServiceClient } from '@/lib/supabase/server'
import { getResend, FROM_EMAIL, OWNER_EMAIL } from '@/lib/resend'
import { sendOrderWhatsApp } from '@/lib/whatsapp'
import { formatARS } from '@/lib/formatters'
import type { Order } from '@/types/order'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // MercadoPago envía topic=payment y data.id con el ID del pago
    if (body.type !== 'payment') {
      return NextResponse.json({ ok: true })
    }

    const paymentId = body.data?.id
    if (!paymentId) {
      return NextResponse.json({ ok: true })
    }

    // Obtener detalles del pago desde MP
    const payment = await mpPayment.get({ id: paymentId })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paymentData = payment as any
    const status = paymentData.status as string
    const preferenceId = paymentData.preference_id as string | undefined

    if (!preferenceId) {
      return NextResponse.json({ ok: true })
    }

    const supabase = createServiceClient()

    // Buscar la orden por preference_id
    const { data: order } = await supabase
      .from('orders')
      .select('*')
      .eq('mp_preference_id', preferenceId)
      .single()

    if (!order) {
      console.warn('[Webhook] Orden no encontrada para preference_id:', preferenceId)
      return NextResponse.json({ ok: true })
    }

    // Mapear status de MP a nuestro modelo
    const orderStatus =
      status === 'approved' ? 'approved' :
      status === 'rejected' ? 'rejected' :
      status === 'cancelled' ? 'cancelled' :
      'pending'

    // Actualizar orden
    await supabase
      .from('orders')
      .update({
        status: orderStatus,
        mp_payment_id: String(paymentId),
        updated_at: new Date().toISOString(),
      })
      .eq('id', order.id)

    // Si se aprobó el pago
    if (orderStatus === 'approved') {
      // Decrementar stock de cada producto
      for (const item of order.items) {
        if (item.variant_id) {
          await supabase.rpc('decrement_variant_stock', {
            variant_id: item.variant_id,
            qty: item.quantity,
          })
        } else {
          await supabase.rpc('decrement_product_stock', {
            product_id: item.product_id,
            qty: item.quantity,
          })
        }
      }

      const typedOrder = order as Order

      // Email de confirmación al comprador
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: typedOrder.customer_email,
        subject: `¡Tu compra en DALT está confirmada! (#${order.id.slice(0, 8)})`,
        html: buildBuyerEmail(typedOrder),
      }).catch((err) => console.error('[Webhook] Error enviando email comprador:', err))

      // Email de notificación al dueño
      await getResend().emails.send({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        subject: `🛒 Nueva venta #${order.id.slice(0, 8)} - ${typedOrder.customer_name}`,
        html: buildOwnerEmail(typedOrder),
      }).catch((err) => console.error('[Webhook] Error enviando email dueño:', err))

      // WhatsApp al dueño
      await sendOrderWhatsApp(typedOrder)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[Webhook] Error:', err)
    // Devolver 200 igual para que MP no reintente infinitamente
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
      <p><strong>Envío:</strong> ${formatARS(order.shipping_cost_ars)}</p>
      <p><strong>Total:</strong> ${formatARS(order.total_ars)}</p>
      <h2>Dirección de entrega</h2>
      <p>
        ${addr.calle} ${addr.numero}${addr.piso_dpto ? `, ${addr.piso_dpto}` : ''}<br>
        ${addr.ciudad}, ${addr.provincia} (${addr.codigo_postal})
      </p>
      <p>Tu pedido será despachado por <strong>Andreani</strong> en los próximos días hábiles.</p>
      <p>Ante cualquier consulta respondé este email o escribinos por WhatsApp.</p>
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
      <p><strong>Envío Andreani:</strong> ${formatARS(order.shipping_cost_ars)}</p>
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
