"use client"
import Link from "next/link";
import { Loader } from "react-feather";
import Alert from "@/components/Alert";
import { useState } from "react";

export default function Footer(){
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setShowAlert(false);
    
    document.querySelector('#loader')?.classList.remove('hidden'); //Show loader when form is submitted to DB

    try{
      const resp = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
      });

      if(resp.ok) {
        setAlertType("success");
      } else{
        setAlertType("error");
      }

    } catch (error) {
      console.log('Erro ao conectar ao servidor.');
      console.error('Erro:', error);
    } finally{
      document.querySelector('#loader')?.classList.add('hidden'); //Hide loader finished
      setShowAlert(true); //Show alert when form is submitted to DB
    }
  } 

  return (
    <footer className="bg-gradient-to-b from-lightRed from-90 to-darkRed to-100 px-4 flex flex-col">

      {
        showAlert ? (<Alert title="Newsletter" type={alertType}/>) : null
      }

      <div className="max-w-screen-2xl mx-auto w-full">
        <section className="flex flex-col gap-1 py-4">
          <h2>Newsletter</h2>
            
          <p className="text-lg">Subscribe to our newsletter to stay up to date with the latest events and discounts.</p>

          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
            <input onChange={(e) =>{setEmail(e.target.value)}} value={email} className="sm:w-3/4 shadow-inner bg-[rgba(38,1,1,0.2)] w-full indent-2 py-1 rounded-sm sm:w-full md:text-base lg:text-md xl:text-lg md:placeholder:text-base lg:placeholder:text-md xl:placeholder:text-lg" placeholder="Email" type="email" required/>
          
            <button className="md:text-md lg:text-lg sm:w-1/4 p-2 shadow-inner rounded-sm text-center bg-[rgba(38,1,1,0.2)] w-full" type="submit">
              <Loader id="loader" size={17} className="hidden animate-spin inline mr-2"/> 
              <span className="align-middle">Subscribe</span>
            </button>
          </form>

          <p className="text-sm">By clicking Subscribe, you agree with our <Link href="" className="underline hover:text-lightRed">Terms and Conditions</Link>.</p>

        </section>

      </div>

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