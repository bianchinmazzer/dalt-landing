import type { Order } from '@/types/order'
import { formatARS, formatDate } from './formatters'

// CallMeBot - API gratuita para enviar WhatsApp
// Instrucciones de activación: https://www.callmebot.com/blog/free-api-whatsapp-messages/
export async function sendOrderWhatsApp(order: Order): Promise<void> {
  const apiKey = process.env.CALLMEBOT_API_KEY
  const phone = process.env.OWNER_WHATSAPP_NUMBER

  if (!apiKey || !phone) {
    console.warn('[WhatsApp] CALLMEBOT_API_KEY o OWNER_WHATSAPP_NUMBER no configurados')
    return
  }

  const items = order.items
    .map((i) => `• ${i.name}${i.variant_label ? ` (${i.variant_label})` : ''} x${i.quantity} - ${formatARS(i.price_ars * i.quantity)}`)
    .join('\n')

  const addr = order.shipping_address
  const direccion = `${addr.calle} ${addr.numero}${addr.piso_dpto ? `, ${addr.piso_dpto}` : ''}, ${addr.ciudad}, ${addr.provincia} (${addr.codigo_postal})`

  const mensaje = [
    '🛒 *Nueva venta DALT*',
    `📅 ${formatDate(order.created_at)}`,
    '',
    `👤 *Cliente:* ${order.customer_name}`,
    `📧 ${order.customer_email}`,
    `📱 ${order.customer_phone || 'No informado'}`,
    '',
    `📦 *Productos:*`,
    items,
    '',
    `🚚 *Envío Andreani:* ${formatARS(order.shipping_cost_ars)}`,
    `📍 *Dirección:* ${direccion}`,
    '',
    `💰 *Total: ${formatARS(order.total_ars)}*`,
    `🆔 Orden: ${order.id.slice(0, 8)}`,
  ].join('\n')

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(mensaje)}&apikey=${apiKey}`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.error('[WhatsApp] Error al enviar:', await res.text())
    }
  } catch (err) {
    console.error('[WhatsApp] Error de red:', err)
  }
}
