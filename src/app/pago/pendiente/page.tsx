import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Pago pendiente | DALT Importaciones' }

export default function PagoPendientePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-10 max-w-md w-full text-center">
        <div className="text-6xl mb-4">⏳</div>
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-2">
          Pago en proceso
        </h1>
        <p className="text-gray-600 mb-6">
          Tu pago está siendo procesado por MercadoPago. Si elegiste pago en efectivo (Rapipago, PagoFácil),
          completá el pago con el cupón que te enviaron. Te confirmaremos por email cuando lo recibamos.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
