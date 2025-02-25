"use client"
import { Event } from "@/Interfaces/Event";
import Image from "next/image";
import Link from "next/link";

export default function NextEventCard( {event} : { event: Event } ) {
  
    return (
        <Link key={event._id} href={event.link} className={`hover:brightness-75 transition ease-in-out duration-500 basis-full max-w-[320px]`}>
           <Image
                src={event.url}
                alt={"Event Image"}
                height={500}
                width={500}
                className="w-full h-full object-cover"
                priority
            />
        </Link> 
    )
  }