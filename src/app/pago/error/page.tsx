import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Error en el pago | DALT Importaciones' }

export default function PagoErrorPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-2">
          No pudimos procesar el pago
        </h1>
        <p className="text-gray-600 mb-6">
          El pago fue rechazado o cancelado. Podés intentar de nuevo con otra tarjeta
          o contactarnos si necesitás ayuda.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/checkout"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Intentar de nuevo
          </Link>
          <Link
            href="/#contacto"
            className="inline-block border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Contactarnos
          </Link>
        </div>
      </div>
    </main>
  )
}
