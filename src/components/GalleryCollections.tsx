"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Events {
    title: string;
    url: string; // URL da imagem
    date: Date; // Data da evento
    link: string; // Link para o evento
}

export default function GalleryCollections() {

  const [eventCollections, setEventCollections] = useState<Events[]>([]); // Estado para armazenar os eventos
  useEffect(() => {
    // Função para buscar os dados
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events"); // Substituir pelo endpoint correto
        const data = await response.json();
                
        const currentDate = new Date(); //Data atual

        const passedEvents = data.filter((event: Events) => new Date(event.date) <= currentDate)
        const sortedEvents = passedEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0,3);
        setEventCollections(sortedEvents); // Atualizar estado com os eventos

      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      }
    };
            
    fetchEvents();
  }, []);

return eventCollections.length > 0 ? (
        <div className="mx-auto my-7 px-16 flex justify-evenly gap-10">
            {
                eventCollections.map((event) => (
                  <Link key={event.title} href={event.link}>
                  <div className={`hover:opacity-50 transition ease-in-out duration-500`}>
                      <Image
                        src={event.url}
                        alt={"Event Image"}
                        height={700}
                        width={700}
                        style={{ height: '18em' }}
                        objectFit="cover"
                        priority 
                      />
                  </div>
                </Link>
                ))
            }
        </div>
    ) : (<p>No Event Collections</p>);
}