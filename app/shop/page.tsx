// app/shop/page.tsx
import { products, categories } from "@/data/products";
import ProductCard from "./components/ProductCard";
import { Metadata } from "next";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "Shop | My Awesome Store",
  description:
    "Browse our amazing collection of products. Find the best deals on quality items.",
  keywords: "shop, products, buy, online store, ecommerce",
  openGraph: {
    title: "Our Product Collection",
    description: "Browse our amazing collection of products",
    type: "website",
  },
};

export default function ShopPage() {
  return (
    <div className="container mx-auto bg-slate-900 px-4 py-8">
      <Hero />
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">Categories</h2>
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
