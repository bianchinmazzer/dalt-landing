import { Resend } from 'resend'

// Lazy init para evitar error en build cuando RESEND_API_KEY no está configurada
let _resend: Resend | null = null

export function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
  }
  return _resend
}

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'ventas@daltimportaciones.com.ar'
export const OWNER_EMAIL = process.env.OWNER_NOTIFICATION_EMAIL ?? 'dalt.importaciones@gmail.com'
