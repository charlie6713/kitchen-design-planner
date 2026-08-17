export type Product = {
  id: number
  name: string
  category: string
  widthMm: number
  heightMm: number
  depthMm: number
  priceCents: number
  imagePath: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Oak Base Cabinet",
    category: "Base cabinets",
    widthMm: 600,
    heightMm: 720,
    depthMm: 560,
    priceCents: 84900,
    imagePath: "/products/oak-base-cabinet.png",
  },
  {
    id: 2,
    name: "Sage Wall Cabinet",
    category: "Wall cabinets",
    widthMm: 600,
    heightMm: 720,
    depthMm: 320,
    priceCents: 62900,
    imagePath: "/products/sage-wall-cabinet.png",
  },
  {
    id: 3,
    name: "Pantry Tower",
    category: "Tall cabinets",
    widthMm: 600,
    heightMm: 2100,
    depthMm: 560,
    priceCents: 124900,
    imagePath: "/products/pantry-tower.png",
  },
  {
    id: 4,
    name: "Built-in Oven",
    category: "Appliances",
    widthMm: 596,
    heightMm: 595,
    depthMm: 560,
    priceCents: 109900,
    imagePath: "/products/built-in-oven.png",
  },
  {
    id: 5,
    name: "Induction Cooktop",
    category: "Appliances",
    widthMm: 590,
    heightMm: 60,
    depthMm: 520,
    priceCents: 78900,
    imagePath: "/products/induction-cooktop.png",
  },
  {
    id: 6,
    name: "Integrated Dishwasher",
    category: "Appliances",
    widthMm: 598,
    heightMm: 818,
    depthMm: 550,
    priceCents: 139900,
    imagePath: "/products/integrated-dishwasher.png",
  },
]