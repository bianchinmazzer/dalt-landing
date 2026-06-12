import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/carrito', '/checkout', '/pago/', '/api/', '/_next/'],
    },
    sitemap: 'https://www.daltimportaciones.com.ar/sitemap.xml',
  }
}
