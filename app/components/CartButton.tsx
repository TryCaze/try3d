// components/CartButton.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function CartButton() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="relative p-2 text-gray-700 hover:text-gray-900"
    >
      <ShoppingCartIcon className="size-5 text-white" />
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
