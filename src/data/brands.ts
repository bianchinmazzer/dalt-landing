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
    ],
  },
  {
    id: 2,
    name: "Lvxing",
    slug: "lvxing",
    description: "Tachos de basura para reciclaje y uso doméstico",
    images: [
      "/productos/lvxing/lvxing-logo.png",
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
