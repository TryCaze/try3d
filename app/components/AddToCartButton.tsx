"use client";

import { useCart } from "@/context/CartContext";
import { Product, ProductVariant } from "@/data/products";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "lucide-react";

export default function AddToCartButton({
  product,
  variant,
}: {
  product: Product;
  variant?: ProductVariant;
}) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    const cartItem = {
      id: product.id + (variant ? `-${variant.id}` : ""),
      name: variant ? `${product.name} – ${variant.name}` : product.name,
      price: variant ? variant.price : product.price,
      image: variant ? variant.image : product.image,
      description: product.description,
      descriptioncard: product.descriptioncard,
      category: product.category,
    };

    addToCart(cartItem);
  };

  return (
    <motion.button
      onClick={handleAdd}
      className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Dodajte u košaricu
      <ShoppingCartIcon className="ml-2 inline-block size-4" />
    </motion.button>
  );
}
