"use client"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { useEvents } from "@/Providers/EventsProvider";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";


// Importação dinâmica para evitar problemas de SSR
const Slider = dynamic(() => import('react-slick'), { ssr: false });

function CustomNextArrow(props: { className: string; style: object; onClick: undefined; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
      
    );
}
  
function CustomPrevArrow(props: { className: string; style: object; onClick: undefined; }) {
    const { className, style, onClick } = props ;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

export default function NextEvents( ) {
    const settings = {
        dots: true, // Mostrar os indicadores (bolinhas)
        infinite: false, // Loop infinito
        speed: 500, // Velocidade da transição
        slidesToShow: 3, // Quantidade de slides visíveis
        slidesToScroll: 1, // Quantidade de slides que movem a cada clique
        responsive: [ // Configurações responsivas
            {
                breakpoint: 640, // Breakpoint para telas menores que 640px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024, // Breakpoint para telas menores que 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <CustomNextArrow className="" style={{}} onClick={undefined}/>, // Personalizando botão "próximo"
        prevArrow: <CustomPrevArrow className="" style={{}} onClick={undefined}/>,
    };
    
    const events = useEvents(); //Context Events
    const currentDate = new Date(); //Data atual    
    
    const filteredEvents = events.filter((event) => new Date(event.date) >= currentDate); //Filtra os eventos guardando os que são futuros
    const nextEvents = filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); //Ordena os pelos mais proximos da data atual
    
    const [mounted, setMounted] = useState(false);// Evita erro de hidratação 
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

return nextEvents.length > 0 ? (
        <Slider {...settings}>
            {
                // Events array
                nextEvents.map((event) => (    
                    <Link key={event._id} href={event.link}>
                        <div className={`hover:brightness-75 transition ease-in-out duration-500`}>
                            <Image
                                src={event.url}
                                alt={"Event Image"}
                                height={500}
                                width={500}
                                className="max-h-[400px] w-full object-contain"
                                priority
                            />
                        </div>
                    </Link>
                ))
            }
        </Slider>
    ) : (<p>No Events</p>);
}