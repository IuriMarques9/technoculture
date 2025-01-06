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

        <Headers />

        {children}

        <Footer />

      </body>
    </html>
  );
}
