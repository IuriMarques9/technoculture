// src/context/ProductsContext.tsx
"use client"
import { createContext, useContext, ReactNode } from "react";
import { Product } from "@/Interfaces/Product";

// Contexto inicial
const ProductsContext = createContext<Product[] | null>(null);

// Provider para envolver o aplicativo
export function ProductsProvider({
  children,
  products,
}: {
  children: ReactNode;
  products: Product[];
}) {
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

// Hook para usar o contexto
export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === null) {
    throw new Error("useProducts deve ser usado dentro de um ProductsProvider.");
  }
  return context;
}
