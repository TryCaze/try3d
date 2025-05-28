"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartButton from "@/app/components/AddToCartButton";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) notFound();

  const hasVariants = !!product.variants?.length;
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? (product.variants?.[0] ?? null) : null,
  );

  const image =
    hasVariants && selectedVariant ? selectedVariant.image : product.image;
  const price =
    hasVariants && selectedVariant ? selectedVariant.price : product.price;
  const name =
    hasVariants && selectedVariant
      ? `${product.name} – ${selectedVariant.name}`
      : product.name;

  return (
    <div className="container mx-auto my-14 px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square rounded-lg bg-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">{name}</h1>
          <p className="mb-4 text-2xl font-semibold text-blue-400">
            €{price.toFixed(2)}
          </p>

          {hasVariants && (
            <div className="mb-4 flex flex-wrap gap-2">
              {(product.variants ?? []).map((variant: any) => (
                <button
                  key={variant.id}
                  className={`rounded border px-3 py-1 text-sm ${
                    selectedVariant?.id === variant.id
                      ? "rounded-md border-blue-600 bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
                      : "border-gray-300 bg-white"
                  }`}
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          )}

          <div className="mb-4 space-y-3 text-gray-400">
            {product.description.split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mb-4">
            <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm">
              {product.category}
            </span>
          </div>

          <AddToCartButton
            product={product}
            variant={selectedVariant ?? undefined}
          />
        </div>
      </div>
    </div>
  );
}
