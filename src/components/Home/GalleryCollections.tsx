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
          <div className="flex justify-center">
            <GalleryCollectionsCard key={eventCollections[0]._id} event={eventCollections[0]} />
          </div>
        ) 
        :
        (<p>No Products</p>);
      } else if(windowWidth <= 1024){
        return eventCollections.length > 0 ? (
          <div className="flex gap-8 justify-evenly">
            <GalleryCollectionsCard key={eventCollections[0]._id} event={eventCollections[0]} />
            <GalleryCollectionsCard key={eventCollections[1]._id} event={eventCollections[1]} />
          </div>
        ) 
        :
        (<p>No Products</p>);
      } else{
        return eventCollections.length > 0 ? (
          <div className="flex justify-evenly gap-16">
              {
                  // Events array
                  eventCollections.map((event) => (
                    <GalleryCollectionsCard key={event._id} event={event} />
                  ))
              }
            </div>
        ) : (<p>No Event Collections</p>);
        }
  
  }