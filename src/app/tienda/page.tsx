import { createServerClient } from '@/lib/supabase/server'
import type { Product } from '@/types/product'
import ShopProductCard from '@/app/components/ShopProductCard'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Tienda Online — Accesorios para Mascotas y Reciclaje',
  description: 'Comprá accesorios premium para mascotas y contenedores de reciclaje importados. Camas, transportadoras, bebederos automáticos, cestos de reciclado y más. Envíos a todo el país.',
  keywords: [
    'tienda accesorios mascotas argentina',
    'comprar accesorios mascotas online',
    'camas mascotas online',
    'transportadoras mascotas',
    'bebederos automáticos mascotas',
    'cestos reciclado hogar',
    'contenedores reciclaje comprar',
  ],
  alternates: {
    canonical: '/tienda',
  },
  openGraph: {
    title: 'Tienda Online — Accesorios para Mascotas y Reciclaje | DALT Importaciones',
    description: 'Accesorios premium para mascotas y contenedores de reciclaje importados. Envíos a todo el país.',
    url: 'https://www.daltimportaciones.com.ar/tienda',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tienda DALT Importaciones',
      },
    ],
  },
}

const PET_KEYWORDS = ['perro', 'gato', 'mascota', 'pet', 'baylor', 'canino', 'felino', 'cama', 'sillon', 'sillón', 'escalera', 'rampa', 'bebedero', 'transportadora']
const RECYCLING_KEYWORDS = ['tacho', 'reciclaje', 'contenedor', 'basura', 'residuo', 'papelero', 'ecobox']

function productPriority(product: Product): number {
  const text = `${product.name} ${product.category} ${product.brand?.name ?? ''}`.toLowerCase()
  if (RECYCLING_KEYWORDS.some((k) => text.includes(k))) return 1
  if (PET_KEYWORDS.some((k) => text.includes(k))) return 0
  return 0
}

async function getProducts(): Promise<Product[]> {
  const supabase = createServerClient()

  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      brand:brands(*),
      images:product_images(*),
      variants:product_variants(*)
    `)
    .eq('active', true)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('[Tienda] Error fetching products:', error)
    return []
  }

  const products = data as Product[]
  return products.sort((a, b) => productPriority(a) - productPriority(b))
}

export default async function TiendaPage() {
  const products = await getProducts()

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-display font-bold text-gray-900">Tienda</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Productos importados con envío a todo el país
          </p>
          {products.length > 0 && (
            <p className="text-xs text-gray-400 mt-3">
              {products.length} producto{products.length !== 1 ? 's' : ''} disponibles
            </p>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {products.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">Estamos cargando los productos. ¡Volvé pronto!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
