"use client"
import LoadingPage from "@/components/LoadingPage";
import Caroussel from "../components/Caroussel";
import GalleryCollections from "../components/GalleryCollections";
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
  
  const [isLoading, setIsLoading] = useState(true); //Constante que recebe se os fetch ja terminaram e se mostra o Loader ou nao
  
  useEffect(() => { // UseEffect para verificar se todos os dados ja foram carregados e se deve alterar a constante 'isLoading' responsavel por mostrar o Loader
    if(!nextEventsdata && !collectionsData){
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
            <Caroussel childToParentNextEvents={childToParentNextEvents} />
          </div>
          
        </div>
      </section>

      <section className="bg-mediumRed">

        <div className="max-w-screen-2xl py-8 mx-auto w-full p-4 sm:px-12 sm:py-20 w-full flex flex-col sm:flex-row gap-6 justify-between items-center">
          
          <div>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">+129.090</h3>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Followers on social media</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">+100</h3>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">DJ's Performed at our events</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">14</h3>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Partners/Sponsors</h3>
          </div>
          <div>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">+200</h3>
              <h3 className="text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Events Organized</h3>
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

        <div className="max-w-screen-2xl py-8 mx-auto w-full p-4 sm:px-12 sm:py-10 w-full flex flex-col sm:flex-row gap-10 justify-between items-center">
          
          <Image
              src={"/chroma.png"}
              alt={"Event Image"}
              height={200}
              width={200}
              className="sm:max-w-[400px] max-w-[200px] w-full object-contain"
              priority 
          />
          <Image
              src={"/nomadas.png"}
              alt={"Event Image"}
              height={200}
              width={200}
              className="sm:max-w-[400px] max-w-[200px] w-full object-contain"
              priority 
          />
          <Image
              src={"/logo_grande.png"}
              alt={"Event Image"}
              height={200}
              width={200}
              className="sm:max-w-[400px] max-w-[200px] w-full object-contain"
              priority 
          />

        </div>

      </section>

    </main>
  );
}
