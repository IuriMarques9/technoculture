"use client"
import { useEvents } from "@/Providers/EventsProvider";
import { useEffect, useState } from "react";
import GalleryCollectionsCard from "./GalleryCollectionCard";

export default function GalleryCollections() {

  const events = useEvents(); //Context Events
  const currentDate = new Date(); //Data atual    

  const passedEvents = events.filter((event) => new Date(event.date) <= currentDate) //Guarda os eventos antigos
  const eventCollections = passedEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0,3); //Ordena pelo mais recente e retira os 3 mais recentes


  const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth); // Define o limite para mobile
      
      };
        handleResize(); // Chama no carregamento inicial
        window.addEventListener("resize", handleResize);
  
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    
    if(windowWidth <= 640) {
        return eventCollections.length > 0 ? (
          <>
            <div className="flex justify-center">
              <GalleryCollectionsCard key={eventCollections[0]._id} event={eventCollections[0]} />
            </div>

            <div className="max-w-screen-2xl z-10 shadow-[inset_0_-80px_80px_-70px_rgba(90,2,2,1)] absolute w-[95%] h-full rounded-xl bottom-12 left-2/4 -translate-x-2/4"></div>

            <a href="#" className="transition ease-in-out duration-125 hover:scale-110 z-30 absolute left-2/4 -translate-x-2/4 bottom-7 py-2 px-9 tracking-widest bg-mediumRed text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/50 focus:outline-none">
              See More
            </a>
          </>
        ) 
        :
        (<p>No Products</p>);
      } else if(windowWidth <= 1024){
        return eventCollections.length > 0 ? (
          <>
            <div className="flex gap-16 justify-evenly">
              <GalleryCollectionsCard key={eventCollections[0]._id} event={eventCollections[0]} />
              <GalleryCollectionsCard key={eventCollections[1]._id} event={eventCollections[1]} />
            </div>

            <div className="max-w-screen-2xl z-10 shadow-[inset_0_-80px_80px_-70px_rgba(90,2,2,1)] absolute w-[95%] h-full rounded-xl bottom-12 left-2/4 -translate-x-2/4"></div>

            <a href="#" className="transition ease-in-out duration-125 hover:scale-110 z-30 absolute left-2/4 -translate-x-2/4 bottom-7 py-2 px-9 tracking-widest bg-mediumRed text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/50 focus:outline-none">
              See More
            </a>
          </>
        ) 
        :
        (<p>No Products</p>);
      } else{
        return eventCollections.length > 0 ? (
			<>
				<div className="flex justify-evenly gap-16">
					{
						// Events array
						eventCollections.map((event) => (
							<GalleryCollectionsCard key={event._id} event={event} />
						))
					}
				</div>

				<div className="max-w-screen-2xl z-10 shadow-[inset_0_-80px_80px_-70px_rgba(90,2,2,1)] absolute w-[95%] h-full rounded-xl bottom-10 left-2/4 -translate-x-2/4"></div>

				<a href="#" className="transition ease-in-out duration-125 hover:scale-110 z-30 absolute left-2/4 -translate-x-2/4 bottom-5 py-2 px-9 tracking-widest bg-mediumRed text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/50 focus:outline-none">
				See More
				</a>
			</>
        ) : (<p>No Event Collections</p>);
        }
  
  }