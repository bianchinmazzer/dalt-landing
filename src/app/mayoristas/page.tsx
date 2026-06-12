import MayoristaSection from "../components/MayoristaSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venta Mayorista | DALT Importaciones",
  description:
    "¿Buscás un socio para importar a gran escala? Gestionamos importaciones profesionales para distribuidoras, locales y empresas de cualquier rubro. Sin mínimo de pedido. Envíos a todo Argentina.",
  keywords: [
    "mayorista",
    "importaciones mayoristas Argentina",
    "importador mayorista",
    "distribuidoras importación",
    "importar productos Argentina",
    "importación a gran escala",
    "proveedor mayorista",
  ],
  alternates: {
    canonical: "/mayoristas",
  },
  openGraph: {
    title: "Venta Mayorista | DALT Importaciones",
    description:
      "Importaciones profesionales para tu negocio. Sin mínimo de pedido, cualquier rubro, envíos a todo el país.",
    url: "https://www.daltimportaciones.com.ar/mayoristas",
  },
};

export default function MayoristasPage() {
  return (
    <div className="pt-20">
      <MayoristaSection />
    </div>
  );
}
