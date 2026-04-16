'use client'

import type { ProductVariant } from '@/types/product'
import { formatARS } from '@/lib/formatters'

interface VariantSelectorProps {
  variants: ProductVariant[]
  basePrice: number
  selected: ProductVariant | null
  onChange: (variant: ProductVariant) => void
}

export default function VariantSelector({ variants, basePrice, selected, onChange }: VariantSelectorProps) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">
        {selected ? `Seleccionado: ${selected.label}` : 'Seleccioná un talle'}
      </p>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const price = basePrice + variant.price_modifier_ars
          const outOfStock = variant.stock <= 0
          const isSelected = selected?.id === variant.id

          return (
            <button
              key={variant.id}
              onClick={() => !outOfStock && onChange(variant)}
              disabled={outOfStock}
              title={outOfStock ? 'Sin stock' : formatARS(price)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                outOfStock
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed line-through'
                  : isSelected
                  ? 'border-primary-600 bg-primary-600 text-white'
                  : 'border-gray-300 text-gray-700 hover:border-primary-400'
              }`}
            >
              {variant.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
