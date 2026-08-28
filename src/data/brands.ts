export interface BrandImage {
  url: string;
  alt: string;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: BrandImage[];
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Senye",
    slug: "senye",
    description: "Productos varios para mascotas de alta calidad",
    images: [
      { url: "/productos/senye/senye-logo.png", alt: "Logo Senye - accesorios para mascotas importados" },
      { url: "/productos/senye/mochila.jpeg", alt: "Mochila transportadora para mascotas Senye por mayor" },
      { url: "/productos/senye/mochila2.jpeg", alt: "Mochila transportadora mascota importada - vista 2" },
      { url: "/productos/senye/mochila3.jpeg", alt: "Mochila transportadora mascota importada - vista 3" },
      { url: "/productos/senye/bolso1.jpeg", alt: "Bolso mascota cuero Senye por mayor Argentina" },
      { url: "/productos/senye/bolso2.jpeg", alt: "Bolso mascota cuero Senye - vista 2" },
      { url: "/productos/senye/bolso3.jpeg", alt: "Bolso mascota cuero Senye - vista 3" },
      { url: "/productos/senye/bolso-ext.jpeg", alt: "Bolso extensible para mascotas Senye" },
      { url: "/productos/senye/rascador.jpeg", alt: "Árbol rascador para gatos Senye por mayor" },
      { url: "/productos/senye/comida.jpeg", alt: "Comedero automático para mascotas Senye" },
      { url: "/productos/senye/agua.jpeg", alt: "Bebedero automático para mascotas Senye" },
      { url: "/productos/senye/piedras.jpeg", alt: "Arenero/baño para gatos Senye" },
      { url: "/productos/senye/piedras2.jpeg", alt: "Arenero para gatos Senye - vista 2" },
      { url: "/productos/senye/piedras3.jpeg", alt: "Arenero para gatos Senye - vista 3" },
      { url: "/productos/senye/Pretal%20talle%20L.jpeg", alt: "Pretal ajustable para perro talle L por mayor Argentina" },
      { url: "/productos/senye/Pretal%20talle%20M.jpeg", alt: "Pretal ajustable para perro talle M por mayor Argentina" },
      { url: "/productos/senye/Pretal%20talle%20S.jpeg", alt: "Pretal ajustable para perro talle S por mayor Argentina" },
      { url: "/productos/senye/Pretal%20talle%20XL.jpeg", alt: "Pretal ajustable para perro talle XL por mayor Argentina" },
    ],
  },
  {
    id: 2,
    name: "Amaru",
    slug: "lvxing",
    description: "Tachos de basura para reciclaje y uso doméstico",
    images: [
      { url: "/productos/lvxing/amaru-logo.jpeg", alt: "Logo Amaru - contenedores de reciclaje por mayor" },
      { url: "/productos/lvxing/tacho-30lts.jpeg", alt: "Tacho de reciclaje 30 litros Amaru" },
      { url: "/productos/lvxing/tacho-30lts-2.jpeg", alt: "Tacho de reciclaje 30 litros Amaru - vista 2" },
      { url: "/productos/lvxing/tacho-40lts.jpeg", alt: "Tacho de reciclaje 40 litros Amaru" },
      { url: "/productos/lvxing/tacho-40lts-2.jpeg", alt: "Tacho de reciclaje 40 litros Amaru - vista 2" },
      { url: "/productos/lvxing/240lts.jpg", alt: "Contenedor de reciclaje 240 litros Amaru para municipios" },
      { url: "/productos/lvxing/tacho-1100lts.jpg", alt: "Contenedor de reciclaje 1100 litros Amaru para municipios" },
    ],
  },
  {
    id: 3,
    name: "Baylor",
    slug: "baylor",
    description: "Camas y sillones para mascotas cómodos y duraderos",
    images: [
      { url: "/productos/baylor/baylor-logo.png", alt: "Logo Baylor - camas y sillones para mascotas" },
      { url: "/productos/baylor/cama.jpeg", alt: "Cama ortopédica para mascotas Baylor por mayor" },
      { url: "/productos/baylor/sillon-premium.jpeg", alt: "Sillón premium para mascotas Baylor" },
      { url: "/productos/baylor/sillon-2.jpeg", alt: "Sillón redondo ortopédico para mascotas Baylor" },
      { url: "/productos/baylor/escalera.jpeg", alt: "Escalera rampa ortopédica para mascotas Baylor" },
    ],
  },
];
