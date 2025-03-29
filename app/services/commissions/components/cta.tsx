"use client";

import { MailboxIcon, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            Spremni za narudžbu?
          </h2>
          <p className="mb-8 font-light text-gray-400 sm:text-xl">
            Naručite svoj model već danas i uživajte u kvaliteti naših usluga.
          </p>
          <div className="my-10 flex justify-center">
            <Link
              href="/form"
              className="relative inline-flex items-center gap-2 rounded-lg border-0 bg-purple-500 px-6 py-2 text-lg text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700 focus:outline-none"
            >
              Naručite odmah
              <MailboxIcon className="transition-transform duration-300 ease-in-out group-hover:translate-y-[-3px]" />
            </Link>
            <a
              href="/shop"
              className="group relative ml-4 inline-flex items-center gap-2 rounded-lg border-0 bg-gray-800 px-6 py-2 text-lg text-gray-400 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Pogledajte ponude na gotove modele
              <ShoppingBagIcon className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
