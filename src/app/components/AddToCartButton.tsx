'use client'

import { useCart } from '@/store/cart'
import type { Product, ProductVariant } from '@/types/product'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface AddToCartButtonProps {
  product: Product
  selectedVariant?: ProductVariant | null
  className?: string
}

export default function AddToCartButton({ product, selectedVariant, className = '' }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const primaryImage = product.images?.find((i) => i.is_primary)?.url
    ?? product.images?.[0]?.url
    ?? '/dalt-logo.png'

  const handleAdd = () => {
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
  }

  const stock = selectedVariant ? selectedVariant.stock : product.stock
  const outOfStock = stock <= 0

  return (
    <button
      onClick={handleAdd}
      disabled={outOfStock || added}
      className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
        outOfStock
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : added
          ? 'bg-green-500 text-white'
          : 'bg-primary-600 hover:bg-primary-700 text-white'
      } ${className}`}
    >
      <ShoppingCartIcon className="w-5 h-5" />
      {outOfStock ? 'Sin stock' : added ? '¡Agregado!' : 'Agregar al carrito'}
    </button>
  )
}
