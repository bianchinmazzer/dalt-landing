export interface Brand {
  id: number
  name: string
  slug: string
  description: string
  logo_url: string | null
}

export interface ProductImage {
  id: string
  product_id: string
  url: string
  position: number
  is_primary: boolean
}

export interface ProductVariant {
  id: string
  product_id: string
  label: string
  sku_suffix: string
  stock: number
  price_modifier_ars: number
}

export interface Product {
  id: string
  sku: string
  name: string
  slug: string
  description: string
  brand_id: number
  category: string
  price_ars: number
  stock: number
  active: boolean
  weight_grams: number
  dimensions_cm: { largo: number; ancho: number; alto: number } | null
  brand?: Brand
  images?: ProductImage[]
  variants?: ProductVariant[]
}
