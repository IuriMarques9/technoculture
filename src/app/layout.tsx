import "@/app/styles/globals.css";
import type { Metadata } from "next";
import Headers from "@/app/components/Headers";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "TechnoCulture",
  description: "Eletronic music events",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <header className="fixed w-full top-0 z-50">
            <Headers />
          </header>

          {children}

          <Footer />
      </body>
    </html>
  );
}
