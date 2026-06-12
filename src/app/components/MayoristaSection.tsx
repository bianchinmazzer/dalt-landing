"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const rubros = [
  { id: "mascotas", emoji: "🐾", label: "Mascotas" },
  { id: "hogar", emoji: "🏠", label: "Hogar & Deco" },
  { id: "gastronomia", emoji: "🍽️", label: "Gastronomía" },
  { id: "oficina", emoji: "💼", label: "Oficina" },
  { id: "deporte", emoji: "⚽", label: "Deporte" },
  { id: "limpieza", emoji: "🧹", label: "Limpieza" },
  { id: "municipio", emoji: "🏛️", label: "Municipios" },
  { id: "otro", emoji: "✨", label: "Otro rubro" },
];

const volumenes = [
  { id: "explorando", label: "Estoy explorando", sub: "Quiero conocer el proceso primero" },
  { id: "pequeño", label: "Hasta 500 unidades", sub: "Pedido inicial o prueba de mercado" },
  { id: "mediano", label: "500 – 2.000 unidades", sub: "Distribución regular" },
  { id: "grande", label: "Más de 2.000 unidades", sub: "Contenedor o importación mayor" },
];

const valueProps = [
  {
    emoji: "📦",
    title: "Sin mínimo de pedido",
    desc: "Consultanos cualquier volumen, nos adaptamos a tu negocio y a tu momento.",
  },
  {
    emoji: "🌐",
    title: "Cualquier rubro",
    desc: "Mascotas, hogar, gastronomía, oficina y más — abiertos a cualquier producto.",
  },
  {
    emoji: "🚚",
    title: "Envíos a todo el país",
    desc: "Depósito propio en Bahía Blanca. Despachamos a cualquier provincia de Argentina.",
  },
];

const pasos = [
  {
    n: "01",
    title: "Nos contactás",
    desc: "Describís el producto o categoría que necesitás importar.",
  },
  {
    n: "02",
    title: "Buscamos tu proveedor",
    desc: "Identificamos el fabricante ideal en China con la mejor relación precio-calidad.",
  },
  {
    n: "03",
    title: "Gestionamos todo",
    desc: "Negociación, pago, control de calidad, aduanas y logística internacional.",
  },
  {
    n: "04",
    title: "Recibís tu mercadería",
    desc: "Llega a nuestro depósito y despachamos directo a tu puerta.",
  },
];

export default function MayoristaSection() {
  const [step, setStep] = useState(1);
  const [selectedRubro, setSelectedRubro] = useState("");
  const [producto, setProducto] = useState("");
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [selectedVolumen, setSelectedVolumen] = useState("");

  const rubroLabel = rubros.find((r) => r.id === selectedRubro)?.label ?? selectedRubro;
  const volumenLabel = volumenes.find((v) => v.id === selectedVolumen)?.label ?? selectedVolumen;

  const handleWhatsApp = () => {
    const lines = [
      `Hola DALT! 👋`,
      ``,
      `Soy ${nombre}${empresa ? ` de *${empresa}*` : ""}.`,
      `Tengo un negocio de *${rubroLabel}* y me interesa importar: *${producto}*.`,
      `Mi volumen estimado es: *${volumenLabel}*.`,
      ``,
      `¿Podemos hablar?`,
    ];
    const message = lines.join("\n");
    window.open(`https://wa.me/5492914263063?text=${encodeURIComponent(message)}`, "_blank");
  };

  const resetWizard = () => {
    setStep(1);
    setSelectedRubro("");
    setProducto("");
    setNombre("");
    setEmpresa("");
    setSelectedVolumen("");
  };

  return (
    <section
      id="mayoristas"
      className="bg-gradient-to-b from-primary-50 to-white py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
            Para distribuidoras y negocios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6 leading-tight">
            Importaciones profesionales
            <br />
            <span className="text-primary-900">para tu negocio</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Somos tu aliado de importación. Vos elegís el producto,{" "}
            nosotros gestionamos todo: proveedores, aduanas y entrega a tu puerta.
          </p>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {valueProps.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="text-primary-900 font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Wizard */}
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-widest font-medium">
            Contanos sobre tu negocio — te armamos una propuesta
          </p>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            {/* Progress bar */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-5">
              <div className="flex items-center justify-center gap-4">
                {[
                  { n: 1, label: "Tu rubro" },
                  { n: 2, label: "Qué buscás" },
                  { n: 3, label: "Volumen" },
                ].map(({ n, label }, idx) => (
                  <div key={n} className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                          step > n
                            ? "bg-green-400 text-white"
                            : step === n
                            ? "bg-white text-primary-700"
                            : "bg-white/25 text-white/60"
                        }`}
                      >
                        {step > n ? "✓" : n}
                      </div>
                      <span
                        className={`text-sm font-medium hidden sm:block transition-all ${
                          step >= n ? "text-white" : "text-white/50"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {idx < 2 && (
                      <div
                        className={`w-10 md:w-16 h-px transition-all duration-500 ${
                          step > n ? "bg-green-400" : "bg-white/25"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-10">

              {/* Step 1 — Rubro */}
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-1">
                    ¿De qué rubro es tu negocio?
                  </h3>
                  <p className="text-gray-500 mb-7">
                    Seleccioná el que más se acerca a tu actividad.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {rubros.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => setSelectedRubro(r.id)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-105 ${
                          selectedRubro === r.id
                            ? "border-primary-500 bg-primary-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <div className="text-2xl mb-2">{r.emoji}</div>
                        <div
                          className={`text-sm font-semibold leading-tight ${
                            selectedRubro === r.id ? "text-primary-700" : "text-gray-700"
                          }`}
                        >
                          {r.label}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={!selectedRubro}
                    onClick={() => setStep(2)}
                    className="mt-8 w-full bg-gradient-to-r from-primary-600 to-primary-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Continuar
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}

              {/* Step 2 — Producto + datos */}
              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-1">
                    ¿Qué querés importar?
                  </h3>
                  <p className="text-gray-500 mb-7">
                    Contanos el producto o categoría que tenés en mente y cómo nos contactamos.
                  </p>
                  <div className="space-y-4">
                    <textarea
                      value={producto}
                      onChange={(e) => setProducto(e.target.value)}
                      placeholder="Ej: accesorios para perros, correas y comederos de varios tamaños..."
                      className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none resize-none h-28 transition-all"
                    />
                    <input
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre *"
                      className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    />
                    <input
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Empresa o local (opcional)"
                      className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-700 placeholder-gray-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 outline-none transition-all"
                    />
                  </div>
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => setStep(1)}
                      className="px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-gray-300 transition-all font-semibold"
                    >
                      Atrás
                    </button>
                    <button
                      disabled={!producto.trim() || !nombre.trim()}
                      onClick={() => setStep(3)}
                      className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Continuar
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 — Volumen */}
              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary-900 mb-1">
                    ¿Qué volumen estimás?
                  </h3>
                  <p className="text-gray-500 mb-7">
                    No hay mínimo — esto nos ayuda a orientarte mejor desde el primer mensaje.
                  </p>
                  <div className="space-y-3">
                    {volumenes.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVolumen(v.id)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                          selectedVolumen === v.id
                            ? "border-primary-500 bg-primary-50 shadow-md"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div
                          className={`font-semibold ${
                            selectedVolumen === v.id ? "text-primary-700" : "text-gray-800"
                          }`}
                        >
                          {v.label}
                        </div>
                        <div className="text-sm text-gray-500 mt-0.5">{v.sub}</div>
                      </button>
                    ))}
                  </div>

                  {selectedVolumen && (
                    <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                      <p className="text-green-800 text-sm font-medium">
                        ¡Perfecto! Podemos ayudarte. Un click y te contactamos directo por WhatsApp.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-gray-300 transition-all font-semibold"
                    >
                      Atrás
                    </button>
                    <button
                      disabled={!selectedVolumen}
                      onClick={handleWhatsApp}
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-200"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Hablar con DALT por WhatsApp
                    </button>
                  </div>

                  <button
                    onClick={resetWizard}
                    className="w-full mt-4 text-gray-400 text-sm hover:text-gray-600 transition-colors"
                  >
                    Empezar de nuevo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-24">
          <h3 className="text-center text-2xl md:text-3xl font-display font-bold text-primary-900 mb-12">
            ¿Cómo funciona el proceso?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {pasos.map((paso, i) => (
              <div key={i} className="relative">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-full hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl font-bold text-primary-100 mb-3 leading-none">
                    {paso.n}
                  </div>
                  <h4 className="text-primary-900 font-bold text-lg mb-2">{paso.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{paso.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 z-10 -translate-y-1/2 text-primary-300 text-xl pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            ¿Tenés dudas antes de empezar?{" "}
            <a
              href="https://wa.me/5492914263063"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-800 underline underline-offset-4 transition-colors"
            >
              Escribinos directo por WhatsApp
            </a>
            {" "}— respondemos en menos de 24hs.
          </p>
        </div>

      </div>
    </section>
  );
}
