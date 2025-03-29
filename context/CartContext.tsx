// context/CartContext.tsx (updated)
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
  addedAt: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  updateItemQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_EXPIRY_DAYS = 30;
const STORAGE_KEY = "cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  // Load and validate cart
  useEffect(() => {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (!parsed.expires || parsed.expires > Date.now()) {
          setCart(parsed.data || []);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setHasHydrated(true);
  }, []);

  // Save cart and setup tab sync
  useEffect(() => {
    if (!hasHydrated) return;

    const saveData = {
      data: cart,
      expires: Date.now() + 1000 * 60 * 60 * 24 * CART_EXPIRY_DAYS,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const newCart = JSON.parse(e.newValue);
          if (newCart.data) {
            setCart(newCart.data);
          }
        } catch (e) {
          console.error("Failed to sync cart", e);
        }
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [cart, hasHydrated]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1, addedAt: Date.now() }
              : item,
          )
        : [...prev, { ...product, quantity: 1, addedAt: Date.now() }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateItemQuantity = (productId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
