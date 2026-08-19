export type KitchenDesign = {
  id: number
  name: string
  wallWidthMm: number
  productCount: number
  totalPriceCents: number
  updatedText: string
  isCurrent: boolean
}

export const designs: KitchenDesign[] = [
  {
    id: 1,
    name: "Coastal Oak Kitchen",
    wallWidthMm: 3600,
    productCount: 6,
    totalPriceCents: 484400,
    updatedText: "Updated today",
    isCurrent: true,
  },
  {
    id: 2,
    name: "Greenwich Apartment",
    wallWidthMm: 3000,
    productCount: 5,
    totalPriceCents: 397600,
    updatedText: "Updated 2 days ago",
    isCurrent: false,
  },
  {
    id: 3,
    name: "Harbour Family Kitchen",
    wallWidthMm: 4200,
    productCount: 8,
    totalPriceCents: 629200,
    updatedText: "Updated 5 days ago",
    isCurrent: false,
  },
  {
    id: 4,
    name: "Studio Refresh",
    wallWidthMm: 2400,
    productCount: 4,
    totalPriceCents: 289000,
    updatedText: "Updated 12 Aug",
    isCurrent: false,
  },
  {
    id: 5,
    name: "Warm Walnut Plan",
    wallWidthMm: 3900,
    productCount: 7,
    totalPriceCents: 561000,
    updatedText: "Updated 8 Aug",
    isCurrent: false,
  },
]