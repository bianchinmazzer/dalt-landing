'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { Product, ProductVariant } from '@/types/product'
import PriceDisplay from '@/app/components/PriceDisplay'
import VariantSelector from '@/app/components/VariantSelector'
import { ChevronLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/store/cart'
import { useCartDrawer } from '@/store/cartDrawer'
import { useRouter } from 'next/navigation'

export default function ProductDetail({ product }: { product: Product }) {
  const images = product.images?.sort((a, b) => a.position - b.position) ?? []
  const [selectedImage, setSelectedImage] = useState(images[0]?.url ?? '/dalt-logo.png')
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [added, setAdded] = useState(false)

  const { addItem } = useCart()
  const { open } = useCartDrawer()
  const router = useRouter()

  const hasVariants = (product.variants?.length ?? 0) > 0
  const hasMultipleImages = images.length > 1
  const displayPrice = product.price_ars + (selectedVariant?.price_modifier_ars ?? 0)
  const stock = selectedVariant ? selectedVariant.stock : product.stock
  const outOfStock = stock <= 0

  const primaryImage = product.images?.find((i) => i.is_primary)?.url
    ?? product.images?.[0]?.url
    ?? '/dalt-logo.png'

  const handleAddToCart = () => {
    const id = selectedVariant ? `${product.id}-${selectedVariant.id}` : product.id
    const price = product.price_ars + (selectedVariant?.price_modifier_ars ?? 0)

    addItem({
      id,
      product_id: product.id,
      variant_id: selectedVariant?.id ?? null,
      name: product.name,
      variant_label: selectedVariant?.label ?? null,
      price_ars: price,
      image_url: primaryImage,
      slug: product.slug,
      weight_grams: product.weight_grams,
    })

    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
    open()
  }

  const handleBuyNow = () => {
    const id = selectedVariant ? `${product.id}-${selectedVariant.id}` : product.id
    const price = product.price_ars + (selectedVariant?.price_modifier_ars ?? 0)

    addItem({
      id,
      product_id: product.id,
      variant_id: selectedVariant?.id ?? null,
      name: product.name,
      variant_label: selectedVariant?.label ?? null,
      price_ars: price,
      image_url: primaryImage,
      slug: product.slug,
      weight_grams: product.weight_grams,
    })

    router.push('/checkout')
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-8">
        {/* Breadcrumb */}
        <Link
          href="/tienda"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 mb-6 transition-colors"
        >
          <ChevronLeftIcon className="w-4 h-4" />
          Volver a la tienda
        </Link>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Galería */}
            <div className="p-6">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={selectedImage}
                  alt={`${product.name} - mayorista mascotas Argentina`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Thumbnails solo si hay más de una foto */}
              {hasMultipleImages && (
                <div className="flex gap-2 flex-wrap mt-3">
                  {images.map((img) => (
                    <button
                      key={img.id}
                      onClick={() => setSelectedImage(img.url)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === img.url
                          ? 'border-primary-600'
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <Image
                        src={img.url}
                        alt=""
                        fill
                        className="object-contain p-1"
                        sizes="64px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6 md:p-8 flex flex-col gap-4">
              {product.brand && (
                <p className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                  {product.brand.name}
                </p>
              )}

              <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              <PriceDisplay
                centavos={displayPrice}
                className="text-3xl font-bold text-gray-900"
              />

              {product.description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              )}

              {hasVariants && product.variants && (
                <VariantSelector
                  variants={product.variants}
                  basePrice={product.price_ars}
                  selected={selectedVariant}
                  onChange={setSelectedVariant}
                />
              )}

              {/* Botones */}
              <div className="flex flex-col gap-2 mt-2">
                {hasVariants && !selectedVariant ? (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gray-100 text-gray-400 cursor-not-allowed text-sm"
                  >
                    Seleccioná un talle para continuar
                  </button>
                ) : outOfStock ? (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gray-100 text-gray-400 cursor-not-allowed text-sm"
                  >
                    Sin stock
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleBuyNow}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
                    >
                      Comprar ahora
                    </button>
                    <button
                      onClick={handleAddToCart}
                      disabled={added}
                      className={`w-full border py-3 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                        added
                          ? 'border-green-500 text-green-600 bg-green-50'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      <ShoppingCartIcon className="w-4 h-4" />
                      {added ? '¡Agregado al carrito!' : 'Agregar al carrito'}
                    </button>
                  </>
                )}
              </div>

              <div className="border-t pt-4 mt-auto">
                <p className="text-xs text-gray-400">
                  🚚 Envío por Andreani a todo el país desde Bahía Blanca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
