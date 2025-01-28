
"use client"
import { createContext, useContext, ReactNode } from "react";
import { Event } from "@/Interfaces/Event";

// Contexto inicial
const EventContext = createContext<Event[] | null>(null);

// Provider para envolver o aplicativo
export function EventsProvider({
  children,
  events,
}: {
  children: ReactNode;
  events: Event[];
}) {
  return (
    <EventContext.Provider value={events}>
      {children}
    </EventContext.Provider>
  );
}

// Hook para usar o contexto
export function useEvents() {
  const context = useContext(EventContext);
  if (context === null) {
    throw new Error("useEvents deve ser usado dentro de um EventsProvider.");
  }
  return context;
}
