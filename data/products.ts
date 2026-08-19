export type Product = {
  id: number
  name: string
  category: string
  description: string
  finish: string
  sku: string
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
    description: "A durable oak cabinet with soft-close doors and a full-width drawer.",
    finish: "Natural oak",
    sku: "KDP-BC-060",
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
    description: "A compact wall-mounted cabinet designed for practical kitchen storage.",
    finish: "Sage green",
    sku: "KDP-WC-060",
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
    description: "A full-height pantry cabinet providing generous storage for food and kitchen essentials.",
    finish: "White",
    sku: "KDP-TC-060",
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
    description: "A built-in electric oven designed to integrate neatly into standard kitchen cabinetry.",
    finish: "Stainless steel",
    sku: "KDP-AP-OVEN-01",
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
    description: "A slim induction cooktop providing fast and efficient electric cooking.",
    finish: "Black glass",
    sku: "KDP-AP-COOK-01",
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
    description: "A fully integrated dishwasher designed to sit behind a matching kitchen cabinet panel.",
    finish: "Integrated",
    sku: "KDP-AP-DISH-01",
    widthMm: 598,
    heightMm: 818,
    depthMm: 550,
    priceCents: 139900,
    imagePath: "/products/integrated-dishwasher.png",
  },
]