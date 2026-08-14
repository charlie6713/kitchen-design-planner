export type Product = {
  id: number
  name: string
  category: string
  widthMm: number
  heightMm: number
  depthMm: number
  priceCents: number
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
  },
  {
    id: 2,
    name: "Sage Wall Cabinet",
    category: "Wall cabinets",
    widthMm: 600,
    heightMm: 720,
    depthMm: 320,
    priceCents: 62900,
  },
  {
    id: 3,
    name: "Pantry Tower",
    category: "Tall cabinets",
    widthMm: 600,
    heightMm: 2100,
    depthMm: 560,
    priceCents: 124900,
  },
  {
    id: 4,
    name: "Built-in Oven",
    category: "Appliances",
    widthMm: 596,
    heightMm: 595,
    depthMm: 560,
    priceCents: 109900,
  },
  {
    id: 5,
    name: "Induction Cooktop",
    category: "Appliances",
    widthMm: 590,
    heightMm: 60,
    depthMm: 520,
    priceCents: 78900,
  },
  {
    id: 6,
    name: "Integrated Dishwasher",
    category: "Appliances",
    widthMm: 598,
    heightMm: 818,
    depthMm: 550,
    priceCents: 139900,
  },
]