"use client"
import { Event } from "@/Interfaces/Event";
import Image from "next/image";
import Link from "next/link";

export default function GalleryCollectionsCard( {event} : { event: Event } ) {
  
    
        
    return (
        <Link key={event.title} className={`hover:brightness-75 transition ease-in-out duration-500`} href={event.link}>
            <Image
                src={event.url}
                alt={"Event Image"}
                height={300}
                width={300}
                className="h-full w-full"
                priority
             />
        </Link>  
    )
  }