import Link from "next/link";
import Image from "next/image";
import { useEvents } from "@/Providers/EventsProvider";


export default function NextEvents( ) {
   
    
    const events = useEvents(); //Context Events
    const currentDate = new Date(); //Data atual    
    
    const filteredEvents = events.filter((event) => new Date(event.date) >= currentDate); //Filtra os eventos guardando os que são futuros
    const nextEvents = filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); //Ordena os pelos mais proximos da data atual
    

return nextEvents.length > 0 ? (
        <>
            <div className="flex justify-evenly gap-16">
                {
                    // Events array
                    nextEvents.map((event) => (    
                        <Link key={event._id} href={event.link} className={`hover:brightness-75 transition ease-in-out duration-500 basis-full`}>
                            <Image
                                src={event.url}
                                alt={"Event Image"}
                                height={500}
                                width={500}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    ) : (<p>No Events</p>);
}