import Link from "next/link";
import Image from "next/image";
import { useEvents } from "@/Providers/EventsProvider";
import NextEventCard from "./NextEventCard";
import { useEffect, useState } from "react";


export default function NextEvents( ) {
   
    
    const events = useEvents(); //Context Events
    const currentDate = new Date(); //Data atual    
    
    const filteredEvents = events.filter((event) => new Date(event.date) >= currentDate); //Filtra os eventos guardando os que são futuros
    const nextEvents = filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); //Ordena os pelos mais proximos da data atual
    
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth); // Define o limite para mobile
      
      };
        handleResize(); // Chama no carregamento inicial
        window.addEventListener("resize", handleResize);
  
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
return nextEvents.length > 0 ? (
        <>
            <div className="flex justify-evenly gap-16">
                {
                    // Events array
                    nextEvents.map((event) => (    
                        <NextEventCard key={event._id} event={event} />
                    ))
                }
            </div>
        </>
    ) : (<p>No Events</p>);
}