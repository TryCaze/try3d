"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "lucide-react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.button
      onClick={() => addToCart(product)}
      className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Dodajte u košaricu
      <ShoppingCartIcon className="ml-2 inline-block size-4" />
    </motion.button>
  );
}
