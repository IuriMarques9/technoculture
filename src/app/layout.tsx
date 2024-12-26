import "../styles/globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Logo from "../../public/logo_grande.png";
import { Menu, ShoppingCart, Heart } from "react-feather";


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

        <header className="flex w-full items-center justify-between bg-transparent p-4">
          <Menu 
            color="darkRed" 
            size={25}
            className="hover:scale-125 hover:cursor-pointer transition-transform"     
          />

          <Image 
            src={Logo} 
            alt="TechnoCulture Logo" 
            width={170}
            height={170}   
          />

          <div className="flex gap-2">
            <ShoppingCart 
              color="darkRed" 
              size={25}
              className="hover:scale-125 hover:cursor-pointer transition-transform"
            />

            <Heart 
              color="darkRed" 
              size={25}
              className="hover:scale-125 hover:cursor-pointer transition-transform"
            />
          </div>
        </header>

        {children}

        
        <footer className="bg-gradient-to-b from-lightRed from-90 to-darkRed to-100 px-4 flex flex-col gap-2">
          <section>
            <h2>Newsletter</h2>
            
            <p>Subscribe to our newsletter to stay up to date with the latest events and discounts.</p>

            ADD FORM

            <p className="text-sm">By clicking Subscribe, you agree with our <a>Terms and Conditions</a>.</p>
          </section>

          <section>
            <div className="flex justify-around py-2">
              <a className="text-sm">Return Policy</a>

              <a className="text-sm">Privacy Policy</a>
            </div>

            <hr />

            <p className="text-center text-xs py-2">&#169; 2025 By TechnoCulture Portugal</p>
          </section>
        </footer>
      </body>
    </html>
  );
}
