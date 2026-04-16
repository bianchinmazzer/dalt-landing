'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/store/cart'
import PriceDisplay from '@/app/components/PriceDisplay'
import { TrashIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

export default function CarritoPage() {
  const { items, removeItem, updateQuantity } = useCart()
  const subtotal = items.reduce((sum, i) => sum + i.price_ars * i.quantity, 0)

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 pt-20">
        <div className="text-center">
          <p className="text-6xl mb-4">🛒</p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h1>
          <p className="text-gray-500 mb-6">¡Explorá nuestra tienda y encontrá lo que necesitás!</p>
          <Link
            href="/tienda"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Ir a la tienda
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Tu carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/tienda/${item.slug}`} className="font-semibold text-gray-900 hover:text-primary-600 text-sm leading-tight block">
                    {item.name}
                  </Link>
                  {item.variant_label && (
                    <p className="text-xs text-gray-400 mt-0.5">{item.variant_label}</p>
                  )}
                  <PriceDisplay centavos={item.price_ars} className="text-sm font-medium text-gray-700 mt-1 block" />

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-gray-50 transition-colors"
                      >
                        <MinusIcon className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="px-3 py-1 text-sm font-medium text-gray-900 border-x border-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-gray-50 transition-colors"
                      >
                        <PlusIcon className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <PriceDisplay
                    centavos={item.price_ars * item.quantity}
                    className="font-bold text-gray-900"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="font-semibold text-gray-900 text-lg mb-4">Resumen</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <PriceDisplay centavos={subtotal} />
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Envío</span>
                  <span>Se calcula al avanzar</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-bold text-gray-900">
                  <span>Total (sin envío)</span>
                  <PriceDisplay centavos={subtotal} />
                </div>
              </div>

              <Link
                href="/checkout"
                className="block w-full text-center bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Finalizar compra
              </Link>
              <Link
                href="/tienda"
                className="block w-full text-center text-primary-600 py-2 text-sm mt-2 hover:underline"
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
