"use client"
import LoadingPage from "@/components/LoadingPage";
import NextEvents from "../components/Home/NextEvents";
import GalleryCollections from "../components/Home/GalleryCollections";
import BestSellers from "@/components/Home/BestSellers";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function page() {
  
  const [nextEventsdata, setNextEventsData] = useState(true) //Constante que recebe se o fetch dos 'Next Events' ja terminou
  const childToParentNextEvents = (childdata) =>{ //Função que recebe os dados do filho e os envia para a constante
    setNextEventsData(childdata)
  }
  
  const [collectionsData, setCollectionsData] = useState(true) //Constante que recebe se o fetch da 'Gallery' ja terminou
  const childToParentCollections = (childdata) =>{//Função que recebe os dados do filho e os envia para a constante
    setCollectionsData(childdata)
  }

  const [bestSellersData, setBestSellersData] = useState(true) //Constante que recebe se o fetch da 'Gallery' ja terminou
  const childToParentBestSellers = (childdata) =>{//Função que recebe os dados do filho e os envia para a constante
    setBestSellersData(childdata)
  }
  
  const [isLoading, setIsLoading] = useState(true); //Constante que recebe se os fetch ja terminaram e se mostra o Loader ou nao
  
  useEffect(() => { // UseEffect para verificar se todos os dados ja foram carregados e se deve alterar a constante 'isLoading' responsavel por mostrar o Loader
    if(!nextEventsdata && !collectionsData && !bestSellersData){ //Adicionar caso necessario
      setIsLoading(false);
    } else{
      setIsLoading(true);
    }
  
  }, [nextEventsdata, collectionsData]);

  useEffect(()=> { // Verifica se a carregar alguma coisa e esconde ou mostra a scrollbar
    if(isLoading) {
      document.documentElement.style.overflow = "hidden"
    }else {
      document.documentElement.style.overflow = "auto"
    }
  }, [isLoading])

  return (
    <main>
      {
        isLoading ? ( <LoadingPage /> ) : null
      }
      <section className="h-screen mx-auto w-full text-center px-4">
        <h1 className="h-full content-center">Welcome to the portal of Techno Music</h1>
      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto py-4 text-center">
          <h2 className="font-semibold xl:text-6xl">Next Events</h2>

          <div className="mx-auto my-7 px-16">
            <NextEvents childToParentNextEvents={childToParentNextEvents} />
          </div>
          
        </div>
      </section>

      <section className="bg-mediumRed">

        <div className="max-w-screen-2xl py-8 mx-auto w-full p-4 sm:px-12 sm:py-12 w-full flex flex-col sm:flex-row gap-6 justify-between items-center">
          
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">+129.090</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Followers on social media</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">+100</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Dj&apos;s Performed at our events</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">14</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Partners/Sponsors</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">+200</h3>
              <h3 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Events Organized</h3>
          </div>

        </div>

      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto mb-3 py-4 text-center">
          <h2 className="font-semibold xl:text-6xl">Gallery</h2>

          <div className="mx-auto my-7 px-16">
            <GalleryCollections childToParentCollections={childToParentCollections}/>
          </div>

        </div>
      </section>

      <section className="bg-mediumRed">
        <div className="max-w-screen-2xl py-8 mx-auto w-full p-4 sm:px-12 sm:py-12 flex flex-col sm:flex-row gap-8 sm:gap-0 justify-around items-center">
          
          <Image
            src={"/chroma.png"}
            alt={"Event Image"}
            height={180}
            width={180}
            className="max-w-[200px] object-contain"
          />
          <Image
            src={"/nomadas.png"}
            alt={"Event Image"}
            height={180}
            width={180}
            className="max-w-[200px] object-contain"
          />
          <Image
            src={"/logo_grande.png"}
            alt={"Event Image"}
            height={180}
            width={180}
            className="max-w-[200px] object-contain"
          />

        </div>
      </section>

      <section className="p-4 bg-[rgba(13,13,13,0.1)] backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto mb-3 py-4 text-center">
          <h2 className="font-semibold xl:text-6xl">Best Sellers</h2>

          <div className="mx-auto my-7 px-5">
            <BestSellers childToParentBestSellers={childToParentBestSellers}/>
          </div>

        </div>
      </section>
    </main>
  );
}
