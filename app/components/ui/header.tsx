"use client";

import { ChevronDown, TableOfContents } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CartButton from "../CartButton";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false); // Close Services dropdown when opening mobile menu
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-800 text-white backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center text-xl font-bold">
          <Image
            width={80}
            height={32}
            src="/logo.png"
            alt="Logo"
            className="mr-2 h-8 w-20"
          />
          <span>Try3D</span>
        </div>

        {/* Navigation Links Centered */}
        <nav className="hidden flex-1 justify-center space-x-6 md:flex">
          <a href="/" className="hover:text-gray-300">
            Početna
          </a>
          <a href="/about" className="hover:text-gray-300">
            O nama
          </a>

          {/* Dropdown for "Usluge" */}
          <div className="group relative">
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              Usluge
              <motion.div
                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown />
              </motion.div>
            </button>

            {/* Animated Dropdown */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 min-w-[200px] rounded-md bg-gray-700 text-white shadow-lg"
                >
                  <a
                    href="/services/commissions"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Izrade po narudžbi
                  </a>
                  <a
                    href="/services/lectures"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Školski programi
                  </a>
                  <a
                    href="/services/courses"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Tečajevi
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/shop" className="hover:text-gray-300">
            Shop
          </a>
          <a href="mailto:trycaze@proton.me" className="hover:text-gray-300">
            Kontakt
          </a>
          <CartButton />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <TableOfContents />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 px-6 py-4 md:hidden"
          >
            <a href="/" className="block px-4 py-2 hover:bg-gray-700">
              Početna
            </a>
            <a href="/about" className="block px-4 py-2 hover:bg-gray-700">
              O nama
            </a>
            <a href="/services" className="block px-4 py-2 hover:bg-gray-700">
              Usluge
            </a>
            <a href="/shop" className="block px-4 py-2 hover:bg-gray-700">
              Shop
            </a>
            <a
              href="mailto:trycaze@gmail.com"
              className="block px-4 py-2 hover:bg-gray-700"
            >
              Kontakt
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
