"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const images = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src={images[currentImage]}
        alt="Background"
        fill
        className="object-contain transition-opacity duration-1000 ease-in-out"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <div className="max-w-3xl px-4 text-center text-white">
          <h1 className="text-5xl font-bold">
            3D posao određen <br />
            <span className="text-7xl font-bold">ispravno</span>
          </h1>
          <p className="mt-4 text-xl">
            Potreban ispis 3D modela? <br />
            Naručite svoj 3D model i dobijte ga u najkraćem mogućem roku.
            <br />
            <span className="font-semibold">Brzo, lako i povoljno.</span>
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/form"
              className="rounded-lg bg-blue-600 px-6 py-3 text-xl font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Naručite svoj 3D model
            </a>
            <a
              href="/shop"
              className="rounded-lg border-2 border-blue-600 px-6 py-3 text-xl font-semibold text-blue-600 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white"
            >
              Posjetite naš web shop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
