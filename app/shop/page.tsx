// app/shop/page.tsx
import { products, categories } from "@/data/products";
import ProductCard from "./components/ProductCard";
import { Metadata } from "next";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title:
    "Online Trgovina - Vaša omiljena destinacija za kupovinu personaliziranih dekoracija.",
  description:
    "Otkrijte našu kolekciju proizvoda i pronađite savršene dekoracije za svoj dom.",
  keywords:
    "trgovina, dekoracije, proizvodi, online kupovina, 3D printanje, igračke, pokloni, svjetleće igračke",
  openGraph: {
    title:
      "Online Trgovina - Vaša omiljena destinacija za kupovinu dekoracija za vaš dom.",
    description:
      "Otkrijte našu kolekciju proizvoda i pronađite savršene dekoracije za svoj dom.",
    type: "website",
  },
};

export default function ShopPage() {
  return (
    <div className="container mx-auto bg-slate-900 px-4 py-8">
      <Hero />
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">Kategorije</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/shop/categories/${category.id}`}
              className="rounded-full bg-gray-200 px-4 py-2 hover:bg-gray-300"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
