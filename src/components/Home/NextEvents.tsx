"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


interface Events {
    title: string;
    url: string; // URL da imagem
    date: Date; // Data da evento
    link: string; // Link para o evento

}
export default function NextEvents( {childToParentNextEvents } ) {
    
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
    
    const [nextEvents, setNextEvents] = useState<Events[]>([]); //Estado para armazenar os proximos eventos
    useEffect(() => {
        // Função para buscar os dados
        const fetchEvents = async () => {
          try {
            const response = await fetch("/api/events"); // Substituir pelo endpoint correto
            const data = await response.json();

            const currentDate = new Date(); //Data atual

            const filteredEvents = data.filter((event: Events) => new Date(event.date) >= currentDate);
            const sortedEvents = filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
            
            setNextEvents(sortedEvents); //Atualiza os estados dos proximos eventos

            
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
        } finally{
            childToParentNextEvents(false)
        }
        };
    
        fetchEvents();
    }, []);
    
return nextEvents.length > 0 ? (
        <Slider {...settings}>
            {
                // Events array
                nextEvents.map((event) => (    
                    <Link key={event.title} href={event.link}>
                        <div className={`hover:opacity-50 transition ease-in-out duration-500`}>
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