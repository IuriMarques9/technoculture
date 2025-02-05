"use client"
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { Event } from "@/Interfaces/Event";

// Contexto inicial
const EventContext = createContext<Event[]>([]);

// Provider para envolver o aplicativo
export function EventsProvider({ children } : {children: ReactNode;}) {

  const [events, setEvents] = useState<Event[]>([]);
  
    useEffect(() => {
    // Função auxiliar para centralizar o fetch com tratamento de erros
      async function fetchEvents() {
        try {
          const response = await fetch(`/api/events`, {
            cache: "no-store", // Evitar cache se os dados mudam frequentemente
          });
          
          if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
  
          setEvents(await response.json());
        } catch (error) {
          console.error(`Erro ao buscar dados de /api/events:`, error);
        }
      }
  
      fetchEvents();
    }, []);
    
  return (
    <EventContext.Provider value={events}>
      {children}
    </EventContext.Provider>
  );
}

// Hook para usar o contexto
export function useEvents() {
  const context = useContext(EventContext);

  return context;
}
