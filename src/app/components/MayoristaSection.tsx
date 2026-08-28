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
  highlight?: boolean;
};

type LooseItem = {
  name: string;
  minQty: number;
  price: number;
};

type Condition = {
  icon: string;
  title: string;
  desc: string;
};

const packs: Pack[] = [
  {
    id: "starter-petshop",
    name: "Starter Petshop",
    badge: "Más vendido",
    badgeClass: "bg-amber-400 text-slate-950",
    description: "Ideal para arrancar o renovar tu sección de paseo",
    items: [
      "20 pretales surtidos (5 por talle S/M/L/XL)",
      "5 comederos automáticos",
      "5 bebederos automáticos",
    ],
    totalUnits: 30,
    price: 550000,
    highlight: true,
  },
  {
    id: "accesorios-premium",
    name: "Accesorios Premium",
    badge: "Alta rotación",
    badgeClass: "bg-orange-400 text-slate-950",
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
    badgeClass: "bg-amber-300 text-slate-950",
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
  { name: "Pretal ajustable por talle", minQty: 10, price: 11000 },
  { name: "Mochila transportadora", minQty: 3, price: 75000 },
  { name: "Bolso mascota cuero", minQty: 5, price: 68000 },
  { name: "Bolso extensible", minQty: 5, price: 52000 },
  { name: "Comedero automático", minQty: 5, price: 28000 },
  { name: "Bebedero automático", minQty: 5, price: 28000 },
  { name: "Árbol rascador gato", minQty: 3, price: 82000 },
  { name: "Arenero/baño gato", minQty: 3, price: 56000 },
];

const conditions: Condition[] = [
  { icon: "💳", title: "Pago", desc: "Transferencia bancaria o depósito previo" },
  {
    icon: "🚚",
    title: "Entrega",
    desc: "Retiro en depósito Bahía Blanca o envío por flete a cargo del comprador",
  },
  { icon: "🧾", title: "Facturación", desc: "Disponible" },
  { icon: "🕒", title: "Atención", desc: "Lunes a viernes de 9 a 18 hs" },
];

function formatArs(amount: number): string {
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
      className="relative overflow-hidden bg-[#0f172a] py-24 px-4"
    >
      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,146,60,0.12),_transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Hero interno */}
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Solo para revendedores y petshops
          </span>
          <h2
            id="mayoristas-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Comprá directo
            <br />
            <span className="text-amber-400">al importador</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stock disponible en Bahía Blanca. Sin intermediarios. Precios reales
            para tu negocio.
          </p>
        </div>

        {/* Packs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {packs.map((pack) => {
            const packLink = buildWhatsappLink(
              `Hola! Me interesa el pack "${pack.name}" (${formatArs(pack.price)}). ¿Cómo seguimos?`
            );

            return (
              <div
                key={pack.id}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                  pack.highlight
                    ? "border-amber-400/40 bg-slate-900 shadow-2xl shadow-amber-500/10 md:-translate-y-3"
                    : "border-slate-800 bg-slate-900/60 hover:border-amber-400/30"
                } hover:shadow-xl hover:shadow-amber-500/10`}
              >
                <span
                  className={`absolute -top-3 left-8 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${pack.badgeClass}`}
                >
                  {pack.badge}
                </span>

                <h3 className="text-2xl font-display font-bold text-white mt-4 mb-1">
                  {pack.name}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {pack.description}
                </p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {pack.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-200 text-sm">
                      <span className="text-amber-400 font-bold" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
                  Total: {pack.totalUnits} unidades
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-display font-black text-amber-400">
                    {formatArs(pack.price)}
                  </span>
                  <span className="text-slate-500 text-sm font-medium ml-1">ARS</span>
                </div>

                <a
                  href={packLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30"
                >
                  Quiero este pack
                </a>
              </div>
            );
          })}
        </div>

        {/* Unidades sueltas */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 text-center">
            Unidades sueltas
          </h3>
          <p className="text-slate-400 text-center mb-8">
            ¿Preferís armar tu propio pedido? Estos son los precios por unidad.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-slate-900/80 text-slate-400 text-xs uppercase tracking-widest">
                  <th scope="col" className="px-6 py-4 font-semibold">Producto</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Mínimo</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-right">Precio</th>
                </tr>
              </thead>
              <tbody>
                {looseItems.map((item, i) => (
                  <tr
                    key={item.name}
                    className={`${
                      i % 2 === 0 ? "bg-slate-900/40" : "bg-slate-900/10"
                    } border-t border-slate-800`}
                  >
                    <td className="px-6 py-4 text-slate-100 font-medium">{item.name}</td>
                    <td className="px-6 py-4 text-slate-400 text-sm">
                      mín. {item.minQty} unidades
                    </td>
                    <td className="px-6 py-4 text-amber-400 font-bold text-right whitespace-nowrap">
                      {formatArs(item.price)}/u
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
              className="inline-block border-2 border-amber-400/40 text-amber-300 font-semibold px-8 py-3.5 rounded-xl hover:bg-amber-400/10 hover:border-amber-400/70 transition-all duration-300"
            >
              Consultar por unidades sueltas
            </a>
          </div>
        </div>

        {/* Condiciones */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
            Condiciones
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {conditions.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{c.icon}</div>
                <h4 className="text-white font-bold mb-1">{c.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-900/40 p-10 md:p-14">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            ¿Tenés dudas o querés armar un pedido a medida?
          </h3>
          <p className="text-slate-400 mb-8">
            Escribinos y te asesoramos sin compromiso.
          </p>
          <a
            href={advisorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-green-900/40"
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
