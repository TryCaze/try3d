// app/shop/products/[id]/page.tsx
import { products } from "@/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCartButton from "@/app/components/AddToCartButton";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }

  return {
    title: product.seoTitle || product.name,
    description: product.seoDescription || product.description,
    keywords: product.keywords || [],
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto my-14 px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">{product.name}</h1>
          <p className="mb-4 text-2xl font-semibold text-blue-400">
            €{product.price.toFixed(2)}
          </p>
          <p className="mb-4 text-gray-400">{product.description}</p>

          <div className="mb-4">
            <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm">
              {product.category}
            </span>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
