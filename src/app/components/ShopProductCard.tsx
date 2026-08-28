'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Product } from '@/types/product'
import PriceDisplay from './PriceDisplay'
import { useCartDrawer } from '@/store/cartDrawer'
import { useCart } from '@/store/cart'

interface ShopProductCardProps {
  product: Product
}

export default function ShopProductCard({ product }: ShopProductCardProps) {
  const router = useRouter()
  const { addItem } = useCart()
  const { open } = useCartDrawer()

  const primaryImage = product.images?.find((i) => i.is_primary)?.url
    ?? product.images?.[0]?.url
    ?? '/dalt-logo.png'

  const outOfStock = product.stock <= 0
  const hasVariants = (product.variants?.length ?? 0) > 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    if (hasVariants) {
      router.push(`/tienda/${product.slug}`)
      return
    }
    addItem({
      id: product.id,
      product_id: product.id,
      variant_id: null,
      name: product.name,
      variant_label: null,
      price_ars: product.price_ars,
      image_url: primaryImage,
      slug: product.slug,
      weight_grams: product.weight_grams,
    })
    open()
  }

  return (
    <Link href={`/tienda/${product.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-200 flex flex-col h-full">

        {/* Imagen — altura fija para consistencia */}
        <div className="relative w-full bg-gray-50 overflow-hidden" style={{ paddingBottom: '100%' }}>
          <Image
            src={primaryImage}
            alt={`${product.name} - mayorista mascotas Argentina`}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {outOfStock && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Sin stock
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3 flex flex-col flex-1">
          <p className="text-[11px] text-primary-500 font-semibold uppercase tracking-widest mb-1">
            {product.brand?.name ?? product.category}
          </p>
          <h3 className="text-gray-800 font-semibold text-sm leading-snug line-clamp-2 flex-1 mb-2">
            {product.name}
          </h3>

          <div className="mt-auto">
            <PriceDisplay centavos={product.price_ars} className="text-lg font-bold text-gray-900 block mb-2" />
            {hasVariants && (
              <p className="text-[11px] text-gray-400 mb-2">Varios talles disponibles</p>
            )}
            <button
              onClick={handleAddToCart}
              disabled={outOfStock}
              className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                outOfStock
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : hasVariants
                  ? 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                  : 'bg-primary-600 text-white hover:bg-primary-700 active:scale-95'
              }`}
            >
              {outOfStock ? 'Sin stock' : hasVariants ? 'Ver talles' : 'Agregar'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
