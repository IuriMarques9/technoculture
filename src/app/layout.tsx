import type { Metadata } from "next";
import { Gemunu_Libre } from "next/font/google";
import "../styles/globals.css";

const gemunu = Gemunu_Libre({
  variable: "--font-gemunu",
  subsets: ["latin"],
});

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
      <body
        className={`${gemunu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
