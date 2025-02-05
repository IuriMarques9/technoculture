// src/context/ProductsContext.tsx
"use client"
import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { Product } from "@/Interfaces/Product";

// Contexto inicial
const ProductsContext = createContext<Product[]>([]);

// Provider para envolver o aplicativo
export function ProductsProvider({children}: { children: ReactNode;}) {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
  // Função auxiliar para centralizar o fetch com tratamento de erros
    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products`, {
          cache: "no-store", // Evitar cache se os dados mudam frequentemente
        });
        
        if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(`Erro ao buscar dados de /api/products:`, error);
        throw error
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

// Hook para usar o contexto
export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}
