"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Hero from "./components/hero";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-checkout-confirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          address,
          city,
          postalCode,
          country,
          paymentMethod,
          cart,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send confirmation email");
      }

      clearCart(); // ✅ Empty the cart
      router.push("/thank-you"); // ✅ Navigate to the confirmation page
    } catch (error) {
      console.error("Error sending order:", error);
      alert("Došlo je do greške prilikom slanja narudžbe.");
    }
  };

  return (
    <>
      <Hero />
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3"
      >
        <div className="space-y-6 md:col-span-2">
          <div>
            <h2 className="mb-2 text-lg font-semibold text-white">
              1. Email adresa
            </h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Upišite Vašu email adresu"
              className="w-full rounded border bg-gray-800 p-2 text-white"
              required
            />
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-white">
              2. Adresa za dostavu
            </h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Puno ime"
              className="mb-2 w-full rounded border bg-gray-800 p-2 text-white"
              required
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ulica"
              className="mb-2 w-full rounded border bg-gray-800 p-2 text-white"
              required
            />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Grad"
              className="mb-2 w-full rounded border bg-gray-800 p-2 text-white"
              required
            />
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Poštanski broj"
              className="mb-2 w-full rounded border bg-gray-800 p-2 text-white"
              required
            />
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-white">
              3. Dostava
            </h2>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold text-white">
              4. Način plaćanja
            </h2>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="credit"
                  checked={paymentMethod === "credit"}
                  onChange={() => setPaymentMethod("credit")}
                />
                Kartica*
              </label>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                PayPal*
              </label>
              <label className="flex items-center gap-2 text-white">
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                Plaćanje tijekom dostave
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-white"
          >
            Potvrdite svoju dostavu
          </button>
          <p className="text-sm text-gray-400">
            *Nakon potvrde narudžbe primiti ćete email s potvrdom o svim
            informacijama o plaćanju putem kartice ili PayPala.
          </p>
        </div>

        <div className="space-y-4 rounded bg-gray-800 p-6 shadow-md">
          <h2 className="text-lg font-semibold text-white">Order summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="rounded object-cover text-white"
              />
              <div className="flex-1">
                <h3 className="font-medium text-white">{item.name}</h3>
                <p className="text-sm text-white">Quantity: {item.quantity}</p>
              </div>
              <p className="font-semibold text-white">
                €{(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="flex justify-between border-t pt-4">
            <span className="text-white">Subtotal</span>
            <span className="text-white">€{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white">Poštarina</span>
            <span className="text-white">Besplatna</span>
          </div>
          <div className="flex justify-between border-t pt-2 font-bold">
            <span className="text-white">Ukupna cijena (uključujući PDV)</span>
            <span className="text-white">€{subtotal.toFixed(2)}</span>
          </div>
        </div>
      </form>
    </>
  );
}
