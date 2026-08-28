// Script para actualizar precios y stock en Supabase
// Ejecutar desde VS Code terminal: node scripts/actualizar-precios.mjs

import { createClient } from '@supabase/supabase-js'
import { readFileSync } from 'fs'

// Leer variables de entorno desde .env.local
const env = readFileSync('.env.local', 'utf8')
const get = (key) => env.match(new RegExp(`^${key}=(.+)$`, 'm'))?.[1]?.trim()

const supabase = createClient(
  get('NEXT_PUBLIC_SUPABASE_URL'),
  get('SUPABASE_SERVICE_ROLE_KEY')
)

const cambios = [
  // Sin stock
  { slug: 'cama-ortopedica-baylor',           stock: 0 },
  { slug: 'escalera-rampa-ortopedica-baylor', stock: 0 },

  // Sillón premium → $200.000, últimos 2
  { slug: 'sofa-premium-baylor',              price_ars: 20000000, stock: 2 },

  // Actualizaciones de precio
  { slug: 'sillon-redondo-ortopedico-baylor', price_ars: 5500000  },
  { slug: 'arnes-paseo-senye',                price_ars: 1200000  },
  { slug: 'bebedero-comedero-automatico-senye', price_ars: 2800000 },
  { slug: 'bolso-mascota-senye',              price_ars: 6000000  },
  { slug: 'mochila-mascota-senye',            price_ars: 6300000  },
  { slug: 'bolso-extensible-senye',           price_ars: 5000000  },
  { slug: 'caja-piedritas-gato-senye',        price_ars: 4500000  },
  { slug: 'tacho-pedal-240lts-lvxing',        price_ars: 18000000 },
]

console.log('Actualizando precios y stock en DALT...\n')

let ok = 0
let errores = 0

for (const { slug, ...datos } of cambios) {
  const { error } = await supabase
    .from('products')
    .update(datos)
    .eq('slug', slug)

  if (error) {
    console.error(`❌ Error en ${slug}:`, error.message)
    errores++
  } else {
    const precio = datos.price_ars ? `$${(datos.price_ars / 100).toLocaleString('es-AR')}` : '—'
    const stock  = datos.stock !== undefined ? `stock: ${datos.stock}` : ''
    console.log(`✅ ${slug.padEnd(40)} precio: ${precio.padEnd(12)} ${stock}`)
    ok++
  }
}

console.log(`\n${ok} actualizados, ${errores} errores.`)
