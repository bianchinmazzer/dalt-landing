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
    // Si tiene variantes, ir al detalle para elegir
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
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 h-full flex flex-col">
        {/* Imagen */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          {outOfStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                Sin stock
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-3 flex flex-col flex-1 gap-1">
          <p className="text-xs text-primary-600 font-medium uppercase tracking-wide">
            {product.brand?.name ?? product.category}
          </p>
          <h3 className="text-gray-900 font-semibold text-sm leading-tight line-clamp-2 flex-1">
            {product.name}
          </h3>
          <PriceDisplay centavos={product.price_ars} className="text-base font-bold text-gray-900 mt-1" />
          {hasVariants && (
            <p className="text-xs text-gray-400">Varios talles</p>
          )}

          {/* Botón */}
          <button
            onClick={handleAddToCart}
            disabled={outOfStock}
            className={`mt-2 w-full py-2 rounded-lg text-sm font-semibold transition-colors ${
              outOfStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : hasVariants
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {outOfStock ? 'Sin stock' : hasVariants ? 'Elegir talle' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </Link>
  )
}
