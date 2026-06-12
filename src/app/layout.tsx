import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
import BackToTop from "./components/BackToTop";
import CartDrawer from "./components/CartDrawer";
import SchemaOrg from "./components/SchemaOrg";

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
  title: {
    default:
      "DALT Importaciones | Mayorista de Accesorios para Mascotas y Reciclaje en Argentina",
    template: "%s | DALT Importaciones",
  },
  description:
    "Importaciones profesionales para tu negocio. Gestionamos todo el proceso para distribuidoras, locales y empresas de cualquier rubro en Argentina. Envíos a todo el país.",
  keywords: [
    "accesorios mascotas mayorista argentina",
    "proveedor pet shop argentina",
    "contenedores reciclaje argentina",
    "mayorista mascotas argentina",
    "accesorios mascotas por mayor",
    "camas mascotas mayorista",
    "bebederos automáticos mascotas",
    "transportadoras mascotas mayorista",
    "cestos reciclaje municipio",
    "importaciones argentina mayorista",
    "DALT importaciones",
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
    title:
      "DALT Importaciones | Mayorista de Accesorios para Mascotas y Reciclaje en Argentina",
    description:
      "Proveedor mayorista de accesorios para mascotas y contenedores de reciclaje. Importación directa y stock permanente en Argentina.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DALT Importaciones - Mayorista de Accesorios para Mascotas y Reciclaje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "DALT Importaciones | Mayorista de Accesorios para Mascotas y Reciclaje",
    description:
      "Proveedor mayorista de accesorios para mascotas y contenedores de reciclaje. Stock permanente en Argentina.",
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
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <SchemaOrg />
        <Navbar />
        {children}
        <Footer />
        <WhatsappIcon />
        <BackToTop />
        <CartDrawer />
        <Analytics />
      </body>
    </html>
  );
}
