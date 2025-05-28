"use client";

import { useState } from "react";
import Hero from "../order/components/hero";

export default function KomisijaForm() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    opis: "",
    materijal: "",
    boja: "",
    datoteka: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/send-commission-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send request");

      alert("Narudžba poslana!");
    } catch (err) {
      console.error(err);
      alert("Došlo je do greške prilikom slanja narudžbe.");
    }
  };

  return (
    <>
      <Hero />
      <div className="mx-auto my-4 max-w-2xl rounded-2xl bg-gray-800 p-6 py-8 shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-white">
          Zatraži 3D Print Po Narudžbi
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-white">
              Ime i prezime
            </label>
            <input
              type="text"
              name="ime"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-600 bg-gray-700 p-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-600 bg-gray-700 p-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium text-white">
              Opis projekta
            </label>
            <textarea
              name="opis"
              required
              rows={4}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-600 bg-gray-700 p-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-white">Materijal</label>
              <select
                name="materijal"
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-600 bg-gray-700 p-2 text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Odaberi</option>
                <option value="PLA">PLA</option>
                <option value="PETG">PETG</option>
                <option value="ABS">ABS</option>
                <option value="TPU">TPU (fleksibilan)</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-white">Boja</label>
              <input
                type="text"
                name="boja"
                placeholder="npr. crvena, prozirna"
                onChange={handleChange}
                className="w-full rounded-xl border bg-gray-700 p-2 text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-white">
              Postavite link datoteke
            </label>
            <input
              type="url"
              name="datoteka"
              placeholder="npr. https://example.com/datoteka.stl"
              onChange={handleChange}
              className="w-full rounded-xl border bg-gray-700 p-2 text-white focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
          >
            Pošalji narudžbu
          </button>
        </form>
      </div>
    </>
  );
}
