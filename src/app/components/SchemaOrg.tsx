const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DALT Importaciones',
  url: 'https://www.daltimportaciones.com.ar',
  logo: 'https://www.daltimportaciones.com.ar/dalt-logo.png',
  description:
    'Proveedor mayorista de accesorios premium para mascotas y contenedores de reciclaje. Importación directa, stock permanente en Argentina.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+54-9-291-572-6423',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
    email: 'dalt.importaciones@gmail.com',
  },
  sameAs: [],
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
    </>
  )
}
