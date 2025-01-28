import "../styles/globals.css"
import type { Metadata } from "next";
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";
import { ProductsProvider } from "@/Providers/ProductsProvider";
import { EventsProvider } from "@/Providers/EventsProvider";
import { Suspense } from "react";
import LoadingPage from "@/components/LoadingPage";

export const metadata: Metadata = {
  title: "TechnoCulture",
  description: "Eletronic music events",
};

// Função auxiliar para centralizar o fetch com tratamento de erros
async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`, {
      cache: "no-store", // Evitar cache se os dados mudam frequentemente
    });
    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Erro ao buscar dados de ${endpoint}:`, error);
    return null; // Retornar null em caso de erro
  }
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Busca de dados no servidor
  const events = await fetchData("/api/events");
  const products = await fetchData("/api/products");

  return (
    <html lang="en">
      <body>
          <header className="fixed w-full top-0 z-50">
            <Headers />
          </header>

          <Suspense fallback={<LoadingPage/>}> {/* Exibe Loadingpage enquanto carrega */}
            {/* Passa os produtos para o provider */}
            <ProductsProvider products={products}>
              <EventsProvider events={events}>

                {children}
              </EventsProvider>
            </ProductsProvider>
          </Suspense>

          <Footer />
      </body>
    </html>
  );
}
