// data/products.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  slug?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Svjetlo Jaje",
    price: 4.99,
    description: "Svjetleće jaje mijenja boje i stvara jedinstvenu atmosferu.",
    image: "/images/jaje.jpg",
    category: "Elektronika",
    seoTitle: "Svjetleće Jaje - Mijenja Boje i Atmosferu",
    seoDescription:
      "Ovo svjetleće jaje mijenja boje i stvara jedinstvenu atmosferu.",
    keywords: ["svjetleće jaje", "mijenja boje", "atmosfera"],
    slug: "svjetlece-jaje",
  },
  {
    id: "2",
    name: "Zecarica",
    price: 9.99,
    description: "Slatki zec koji drži vaše slatkiše.",
    image: "/images/watch.jpg",
    category: "dekoracija",
    seoTitle: "Zecarica - Slatki Čuvar Slatkiša",
    seoDescription: "Ova slatka zecarica čuva vaše slatkiše i donosi sreću.",
    keywords: ["zecarica", "slatki čuvar", "slatkiši"],
    slug: "zecarica",
  },
];

export const categories = [
  { id: "electronics", name: "Elektronika" },
  { id: "clothing", name: "Dekoracija" },
];
