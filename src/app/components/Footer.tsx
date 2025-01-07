"use client"
import Link from "next/link";
import {Loader} from "react-feather";
export default function Footer(){
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    document.querySelector('#loader')?.classList.remove('hidden')

    const userEmail = document.querySelector('input')?.value;

    try{
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail })
      });

      if (response.ok) {
        const result = await response.json();
        console.log(`Sucesso: ${result.message}`);
      } else {
        const error = await response.json();
        console.log(`Erro: ${error.message}`);
      }
    } catch (error) {
      console.log('Erro ao conectar ao servidor.');
      console.error('Erro:', error);
    }
    document.querySelector('#loader')?.classList.add('hidden')
  } 

  return (
    <footer className="bg-gradient-to-b from-lightRed from-90 to-darkRed to-100 px-4 flex flex-col gap-2">
      <section>
        <h2>Newsletter</h2>
          
        <p>Subscribe to our newsletter to stay up to date with the latest events and discounts.</p>

        <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
          <input className="sm:w-3/4 shadow-inner bg-[rgba(38,1,1,0.2)] w-full indent-2 py-1 rounded-sm sm:w-full sm:text-md md:text-lg lg:text-xl xl:text-2xl sm:placeholder:text-md md:placeholder:text-lg lg:placeholder:text-xl xl:placeholder:text-2xl" placeholder="Email" type="email" required/>
        
          <button className="md:text-[1.125rem] lg:text-[1.25rem] sm:w-1/4 text-center bg-[rgba(38,1,1,0.2)] w-full" type="submit">
            <Loader id="loader" className="hidden animate-spin inline mr-2"/> 
            <span className="align-middle">Subscribe</span>
            
          </button>
        </form>

        <p className="text-sm">By clicking Subscribe, you agree with our <Link href="" className="underline hover:text-lightRed">Terms and Conditions</Link>.</p>

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