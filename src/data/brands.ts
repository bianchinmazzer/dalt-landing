export interface Brand {
  id: number;
  name: string;
  slug: string;
  description: string;
  images: string[];
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Senye",
    slug: "senye",
    description: "Productos varios para mascotas de alta calidad",
    images: [
      "/productos/senye/senye-logo.png",
      "/productos/senye/mochila.jpeg",
      "/productos/senye/mochila2.jpeg",
      "/productos/senye/mochila3.jpeg",
      "/productos/senye/bolso1.jpeg",
      "/productos/senye/bolso2.jpeg",
      "/productos/senye/bolso3.jpeg",
      "/productos/senye/bolso-ext.jpeg",
      "/productos/senye/rascador.jpeg",
      "/productos/senye/comida.jpeg",
      "/productos/senye/agua.jpeg",
      "/productos/senye/piedras.jpeg",
      "/productos/senye/piedras2.jpeg",
      "/productos/senye/piedras3.jpeg",
      "/productos/senye/Pretal%20talle%20L.jpeg",
      "/productos/senye/Pretal%20talle%20M.jpeg",
      "/productos/senye/Pretal%20talle%20S.jpeg",
      "/productos/senye/Pretal%20talle%20XL.jpeg",
    ],
  },
  {
    id: 2,
    name: "Amaru",
    slug: "lvxing",
    description: "Tachos de basura para reciclaje y uso doméstico",
    images: [
      "/productos/lvxing/amaru-logo.jpeg",
      "/productos/lvxing/tacho-30lts.jpeg",
      "/productos/lvxing/tacho-30lts-2.jpeg",
      "/productos/lvxing/tacho-40lts.jpeg",
      "/productos/lvxing/tacho-40lts-2.jpeg",
      "/productos/lvxing/240lts.jpg",
      "/productos/lvxing/tacho-1100lts.jpg",
    ],
  },
  {
    id: 3,
    name: "Baylor",
    slug: "baylor",
    description: "Camas y sillones para mascotas cómodos y duraderos",
    images: [
      "/productos/baylor/baylor-logo.png",
      "/productos/baylor/cama.jpeg",
      "/productos/baylor/sillon-premium.jpeg",
      "/productos/baylor/sillon-2.jpeg",
      "/productos/baylor/escalera.jpeg",
    ],
  },
];
