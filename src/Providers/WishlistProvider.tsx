"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";

// Criamos o tipo do contexto
interface WishlistContextType {
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
}

// Criamos o contexto
const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  toggleWishlist: () => {}, // Função vazia para evitar erro ao acessar antes da inicialização
});

// Criamos o Provider
export function WishlistProvider({ children } : {children: ReactNode}) {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    // Pega os dados do localStorage ao iniciar
    if (typeof window !== "undefined") {
      return localStorage.getItem("wishlist")?.split("#").filter(id => id.trim() !== "") || [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", wishlist.join("#"));
  },[wishlist])
  
  // Adiciona ou remove um item da wishlist
  const toggleWishlist = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId) // Remove se já existir
        : [...prevWishlist, productId] // Adiciona se não existir
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Criamos um hook personalizado para facilitar o uso do contexto
export function useWishlist () {
    const context = useContext(WishlistContext);
      if (!context) {
        throw new Error("useWishlist deve ser usado dentro de um WishlistProvider.");
      }
      return context;
}
