import "../styles/globals.css"
import type { Metadata } from "next";
import Headers from "@/components/Headers";
import Footer from "@/components/Footer";
import { ProductsProvider } from "@/Providers/ProductsProvider";
import { EventsProvider } from "@/Providers/EventsProvider";
import { Suspense } from "react";
import { WishlistProvider } from "@/Providers/WishlistProvider";
import LoadingPage from "@/components/LoadingPage";

export const metadata: Metadata = {
  title: "TechnoCulture",
  description: "Eletronic music events",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
          <Suspense fallback={<LoadingPage/>}> {/* Exibe Loadingpage enquanto carrega */}
            {/* Passa os produtos e eventos para o provider */}
            <ProductsProvider>
              <EventsProvider>
                <WishlistProvider>

                  <header className="fixed w-full top-0 z-50">
                    <Headers />
                  </header>

                  {children}
                </WishlistProvider>
              </EventsProvider>
            </ProductsProvider>
          </Suspense>

          <Footer />
      </body>
    </html>
  );
}
