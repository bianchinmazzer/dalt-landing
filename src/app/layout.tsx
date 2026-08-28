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
      "DALT Importaciones | Mayorista de Accesorios para Mascotas Argentina",
    template: "%s | DALT Importaciones",
  },
  description:
    "Comprá accesorios para mascotas directo al importador. Pretales, mochilas transportadoras, comederos automáticos y más. Venta mayorista desde Bahía Blanca. Envíos a todo el país.",
  keywords: [
    "mayorista mascotas argentina",
    "importador directo mascotas",
    "pretal perro por mayor",
    "mochila transportadora mascota mayorista",
    "petshop por mayor bahia blanca",
    "accesorios mascotas importados argentina",
    "comedero automatico mascota por mayor",
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
    title: "DALT Importaciones | Mayorista de Accesorios para Mascotas",
    description:
      "Stock disponible en Bahía Blanca. Sin intermediarios. Pretales, mochilas, comederos y más para tu petshop.",
    images: [
      {
        url: "/og-image-dalt.png",
        width: 1200,
        height: 630,
        alt: "DALT Importaciones - Mayorista de Accesorios para Mascotas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DALT Importaciones | Mayorista de Accesorios para Mascotas",
    description:
      "Stock disponible en Bahía Blanca. Sin intermediarios. Pretales, mochilas, comederos y más para tu petshop.",
    images: ["/og-image-dalt.png"],
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
