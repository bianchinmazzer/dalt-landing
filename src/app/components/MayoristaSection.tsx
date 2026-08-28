import {
  CreditCardIcon,
  TruckIcon,
  DocumentTextIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const WHATSAPP_NUMBER = "5492914263063";

type Pack = {
  id: string;
  name: string;
  badge: string;
  badgeClass: string;
  description: string;
  items: string[];
  totalUnits: number;
  price: number;
};

type LooseItem = {
  name: string;
  price: number;
  minQty: number;
};

type Condition = {
  icon: typeof CreditCardIcon;
  title: string;
  desc: string;
};

const packs: Pack[] = [
  {
    id: "starter-petshop",
    name: "Starter Petshop",
    badge: "Más vendido",
    badgeClass: "bg-accent-500 text-white",
    description: "Ideal para arrancar o renovar tu sección de paseo",
    items: [
      "20 pretales surtidos (5 por talle S/M/L/XL)",
      "5 comederos automáticos",
      "5 bebederos automáticos",
    ],
    totalUnits: 30,
    price: 550000,
  },
  {
    id: "accesorios-premium",
    name: "Accesorios Premium",
    badge: "Alta rotación",
    badgeClass: "bg-primary-100 text-primary-700",
    description: "Productos de valor para diferenciarte de la competencia",
    items: [
      "5 mochilas transportadoras",
      "10 bolsos mascota cuero",
      "10 bolsos extensibles",
    ],
    totalUnits: 25,
    price: 1630000,
  },
  {
    id: "mundo-felino",
    name: "Mundo Felino",
    badge: "Nicho premium",
    badgeClass: "bg-primary-100 text-primary-700",
    description: "El segmento de gatos crece y tiene poca oferta mayorista",
    items: [
      "5 árboles rascadores",
      "5 areneros/baños para gato",
      "5 comederos automáticos",
    ],
    totalUnits: 15,
    price: 860000,
  },
];

const looseItems: LooseItem[] = [
  { name: "Pretal ajustable (S/M/L/XL)", price: 11000, minQty: 10 },
  { name: "Mochila transportadora", price: 75000, minQty: 3 },
  { name: "Bolso mascota cuero", price: 68000, minQty: 5 },
  { name: "Bolso extensible", price: 52000, minQty: 5 },
  { name: "Comedero automático", price: 28000, minQty: 5 },
  { name: "Bebedero automático", price: 28000, minQty: 5 },
  { name: "Árbol rascador gato", price: 82000, minQty: 3 },
  { name: "Arenero/baño gato", price: 56000, minQty: 3 },
];

const conditions: Condition[] = [
  { icon: CreditCardIcon, title: "Pago", desc: "Transferencia bancaria o depósito previo" },
  {
    icon: TruckIcon,
    title: "Entrega",
    desc: "Retiro en Bahía Blanca o flete a cargo del comprador",
  },
  { icon: DocumentTextIcon, title: "Facturación", desc: "Disponible" },
  { icon: ClockIcon, title: "Atención", desc: "Lunes a viernes de 9 a 18 hs" },
];

// Formatea pesos enteros (no centavos) a ARS: 550000 → "$550.000".
// No confundir con formatARS de src/lib/formatters.ts, que espera centavos.
function formatArsWhole(amount: number): string {
  const rounded = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `$${rounded}`;
}

function buildWhatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function MayoristaSection() {
  const looseUnitsLink = buildWhatsappLink(
    "Hola! Quiero consultar precios por unidades sueltas para mi negocio."
  );
  const advisorLink = buildWhatsappLink(
    "Hola! Quiero armar un pedido mayorista a medida. ¿Podemos hablar?"
  );

  return (
    <section
      id="mayoristas"
      aria-labelledby="mayoristas-heading"
      className="bg-gradient-to-b from-primary-50 via-white to-primary-50 py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full mb-6">
            Solo para revendedores y petshops
          </span>
          <h2
            id="mayoristas-heading"
            className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4"
          >
            Comprá directo al importador
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stock disponible en Bahía Blanca. Sin intermediarios. Precios reales
            para tu negocio.
          </p>
        </div>

        {/* Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {packs.map((pack) => {
            const packLink = buildWhatsappLink(
              `Hola! Me interesa el pack "${pack.name}" (${formatArsWhole(pack.price)}). ¿Cómo seguimos?`
            );

            return (
              <div
                key={pack.id}
                className="flex flex-col bg-white rounded-2xl p-8 border border-primary-100 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span
                  className={`self-start text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4 ${pack.badgeClass}`}
                >
                  {pack.badge}
                </span>

                <h3 className="text-2xl font-display font-bold text-primary-900 mb-1">
                  {pack.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {pack.description}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pack.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-primary-700 font-bold" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">
                  Total: {pack.totalUnits} unidades
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-primary-900">
                    {formatArsWhole(pack.price)}
                  </span>
                  <span className="text-gray-400 text-sm font-medium ml-1">ARS</span>
                </div>

                <a
                  href={packLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full text-center bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Quiero este pack
                </a>
              </div>
            );
          })}
        </div>

        {/* Unidades sueltas */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-2 text-center">
            Unidades sueltas
          </h3>
          <p className="text-gray-500 text-center mb-8">
            ¿Preferís armar tu propio pedido? Estos son los precios por unidad.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-primary-100 bg-primary-50">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="text-primary-700 text-xs uppercase tracking-widest">
                  <th scope="col" className="px-6 py-4 font-semibold">Producto</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Precio por unidad</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Mínimo</th>
                </tr>
              </thead>
              <tbody>
                {looseItems.map((item) => (
                  <tr key={item.name} className="bg-white border-t border-primary-100">
                    <td className="px-6 py-4 text-gray-700 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-primary-800 font-bold whitespace-nowrap">
                      {formatArsWhole(item.price)}/u
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      mín. {item.minQty} unidades
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <a
              href={looseUnitsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-primary-700 text-primary-700 font-semibold px-8 py-3.5 rounded-full hover:bg-primary-50 transition-colors duration-300"
            >
              Consultar por unidades sueltas
            </a>
          </div>
        </div>

        {/* Condiciones */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-8 text-center">
            Condiciones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {conditions.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6" />
                </div>
                <h4 className="text-primary-900 font-display font-bold mb-1">{c.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-900 mb-3">
            ¿Querés armar un pedido a medida?
          </h3>
          <p className="text-gray-500 mb-8">
            Escribinos y te asesoramos sin compromiso.
          </p>
          <a
            href={advisorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hablar con un asesor
          </a>
        </div>
      </div>
    </section>
  );
}
