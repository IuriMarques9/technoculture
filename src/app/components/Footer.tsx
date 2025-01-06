"use client"
import Link from "next/link";
export default function Footer(){
    

  return (
    <footer className="bg-gradient-to-b from-lightRed from-90 to-darkRed to-100 px-4 flex flex-col gap-2">
      <section>
        <h2>Newsletter</h2>
          
        <p>Subscribe to our newsletter to stay up to date with the latest events and discounts.</p>

        ADD FORM

        <p className="text-sm">By clicking Subscribe, you agree with our <a>Terms and Conditions</a>.</p>

      </section>

      <section>
        <div className="flex justify-around py-2">
          <Link href="" className="hover:underline text-sm">Return Policy</Link>
          <Link href="" className="hover:underline text-sm">Privacy Policy</Link>
        </div>

        <hr />

        <p className="text-center text-xs py-2">&#169; 2025 By TechnoCulture Portugal</p>
      </section>
    </footer>
  );
}