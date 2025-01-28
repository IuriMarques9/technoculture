"use client"
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { Event } from "@/Interfaces/Event";


interface Events {
  events: Event[];  // Tipagem da prop 'events' como um array de objetos 'Event'
}

export default function GalleryCollections( eventCollections: Events ) {

  
  const settings = {
    dots: false, // Mostrar os indicadores (bolinhas)
    infinite: false, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 3, // Quantidade de slides visíveis
    responsive: [ // Configurações responsivas
        {
            breakpoint: 640, // Breakpoint para telas menores que 640px
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1024, // Breakpoint para telas menores que 1024px
            settings: {
                slidesToShow: 2,
            },
        },
    ],
    arrows:false,
    swipe: false, // Desativa o deslizar em dispositivos móveis
    draggable: false, // Desativa o arrastar em desktops
  };

  return eventCollections.events.length > 0 ? (
      <>
        <Slider {...settings} className="z-30">
          {
              // Events array
              eventCollections.events.map((event) => (
                <Link key={event.title} className={`hover:brightness-75 transition ease-in-out duration-500`} href={event.link}>
                    <Image
                      src={event.url}
                      alt={"Event Image"}
                      height={500}
                      width={500}
                      className="max-h-[300px] w-full object-contain"
                      priority
                    />
                </Link>
              ))
          }
        </Slider>
          
        <div className="max-w-screen-2xl z-10 shadow-[inset_0_-80px_80px_-70px_rgba(90,2,2,1)] absolute w-[90%] h-full rounded-xl bottom-12 left-2/4 -translate-x-2/4"></div>

        <a href="#" className="transition ease-in-out duration-125 hover:scale-110 z-30 absolute left-2/4 -translate-x-2/4 bottom-7 py-2 px-9 tracking-widest bg-mediumRed text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/50 focus:outline-none">
          See More
        </a>
      </>
  ) : (<p>No Event Collections</p>);
  }