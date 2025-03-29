// components/ProductCard.tsx
import Link from "next/link";
import { Product } from "@/data/products";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="overflow-hidden rounded-lg border bg-slate-800 shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/shop/products/${product.id}`}>
        <div className="aspect-square bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            className="size-full object-cover"
            width={640}
            height={768}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-400">{product.description}</p>
          <p className="mt-2 font-bold text-white">
            €{product.price.toFixed(2)}
          </p>
          <span className="mt-2 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs">
            {product.category}
          </span>
        </div>
      </Link>
    </div>
  );
}
