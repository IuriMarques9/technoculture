"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { Event } from "@/Interfaces/Event";

interface Events {
  events: Event[];  // Tipagem da prop 'events' como um array de objetos 'Event'
}

export default function NextEvents( nextEvents: Events ) {
    
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
        nextArrow: <CustomNextArrow />, // Personalizando botão "próximo"
        prevArrow: <CustomPrevArrow />,
    };
    

    
return nextEvents.events.length > 0 ? (
        <Slider {...settings}>
            {
                // Events array
                nextEvents.events.map((event) => (    
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



function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
      
    );
}
  
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}