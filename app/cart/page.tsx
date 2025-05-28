// app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, totalItems } = useCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Vaša košarica</h1>

      {cart.length === 0 ? (
        <div className="py-12 text-center">
          <p className="mb-4 text-xl text-white">Vaša košarica je prazna</p>
          <Link
            href="/shop"
            className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Nastavite kupovati
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex border-b py-4">
                <div className="relative mr-4 size-24 rounded-md bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grow">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-400">€{item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-400">
                    Količina: {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Uklonite
                </button>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-lg bg-gray-800 p-6">
            <h2 className="mb-4 text-xl font-bold text-white">Opis narudžbe</h2>
            <div className="mb-2 flex justify-between">
              <span className="text-white">Količina ({totalItems})</span>
              <span className="text-white">€{totalPrice.toFixed(2)}</span>
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between font-bold">
                <span className="text-white">Ukupno</span>
                <span className="text-white">€{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={clearCart}
              className="mt-4 w-full py-2 text-sm text-red-600 hover:text-red-800"
            >
              <span className="font-semibold">Obriši sve</span>
              <span className="ml-1 text-gray-400">
                ({totalItems} artikala)
              </span>
            </button>
            <a
              href="/order"
              className="mt-4 flex w-full justify-center rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              <span className="font-semibold">Naručite</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
