const BUSINESS_ID = 'https://www.daltimportaciones.com.ar/#business'

// Misma dirección postal para Organization y LocalBusiness — ambos nodos describen
// la misma entidad real (compartida vía "@id") y no deben divergir en sus datos NAP.
const businessAddress = {
  '@type': 'PostalAddress',
  addressLocality: 'Bahía Blanca',
  addressRegion: 'Buenos Aires',
  addressCountry: 'AR',
}

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': BUSINESS_ID,
  name: 'DALT Importaciones',
  url: 'https://www.daltimportaciones.com.ar',
  logo: 'https://www.daltimportaciones.com.ar/dalt-logo.png',
  description:
    'Proveedor mayorista de accesorios premium para mascotas y contenedores de reciclaje. Importación directa, stock permanente en Argentina.',
  address: businessAddress,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5492914263063',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
    email: 'dalt.importaciones@gmail.com',
  },
  sameAs: ['https://wa.me/5492914263063'],
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: 'DALT Importaciones',
  description:
    'Importador y mayorista de accesorios para mascotas en Argentina. Pretales, mochilas transportadoras, comederos automáticos, árboles rascadores y más.',
  url: 'https://www.daltimportaciones.com.ar',
  telephone: '+5492914263063',
  email: 'dalt.importaciones@gmail.com',
  address: businessAddress,
  areaServed: 'Argentina',
  priceRange: '$$',
  openingHours: 'Mo-Fr 09:00-18:00',
  sameAs: ['https://wa.me/5492914263063'],
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'DALT Importaciones',
  url: 'https://www.daltimportaciones.com.ar',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.daltimportaciones.com.ar/tienda?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

export default function SchemaOrg() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
    </>
  )
}
