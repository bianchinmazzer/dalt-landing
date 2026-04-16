import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
import CartDrawer from "./components/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DALT Importaciones | Soluciones de Importación desde China",
  description:
    "Importamos productos de China con transparencia y eficiencia. Servicio personalizado para negocios y consumidores finales en Argentina. Venta mayorista y minorista.",
  keywords: [
    "importaciones",
    "China",
    "productos importados",
    "Argentina",
    "mayorista",
    "minorista",
    "mascotas",
    "importador",
    "compras internacionales",
  ],
  authors: [{ name: "DALT Importaciones" }],
  creator: "DALT Importaciones",
  metadataBase: new URL("https://www.daltimportaciones.com.ar"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/dalt-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.daltimportaciones.com.ar",
    siteName: "DALT Importaciones",
    title: "DALT Importaciones | Soluciones de Importación desde China",
    description:
      "Importamos productos de China con transparencia y eficiencia. Venta mayorista y minorista en Argentina.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DALT Importaciones - Soluciones de Importación Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DALT Importaciones | Importación desde China",
    description:
      "Importamos productos de China con transparencia y eficiencia. Servicio personalizado.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#1e3a8a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DALT Importaciones",
              url: "https://www.daltimportaciones.com.ar",
              logo: "https://www.daltimportaciones.com.ar/dalt-logo.png",
              description:
                "Soluciones profesionales de importación desde China. Transparencia y eficiencia en cada proyecto.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+54-9-291-572-6423",
                contactType: "customer service",
                availableLanguage: "Spanish",
                email: "dalt.importaciones@gmail.com",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsappIcon />
        <CartDrawer />
        <Analytics />
      </body>
    </html>
  );
}
