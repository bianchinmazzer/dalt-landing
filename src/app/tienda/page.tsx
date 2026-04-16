import { createServerClient } from '@/lib/supabase/server'
import type { Product } from '@/types/product'
import ShopProductCard from '@/app/components/ShopProductCard'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Tienda | DALT Importaciones',
  description: 'Comprá productos importados de calidad: accesorios para mascotas, cestos de reciclado y muebles. Envíos a todo el país.',
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

  return data as Product[]
}

export default async function TiendaPage() {
  const products = await getProducts()

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
        <div className="mb-8">
          <h1 className="text-2xl font-display font-bold text-gray-900">Tienda</h1>
          <p className="text-sm text-gray-500 mt-1">
            {products.length > 0 ? `${products.length} producto${products.length !== 1 ? 's' : ''}` : ''}
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Estamos cargando los productos. ¡Volvé pronto!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
