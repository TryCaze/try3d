// app/shop/categories/[category]/page.tsx
import { products } from "@/data/products";
import ProductCard from "../../components/ProductCard";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryProducts = products.filter(
    (product) => product.category === params.category,
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">
        {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
      </h1>

      {categoryProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
