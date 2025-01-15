"use client"

import { useEffect, useState } from "react";

interface GalleryPictures {
    partyDate: string; //Party date
    url: string; // URL da imagem
}
export default function GalleryImages() {
    
    const [galleryPictures, setGalleryPictures] = useState<GalleryPictures[]>([]); // Estado para armazenar os eventos
        useEffect(() => {
            // Função para buscar os dados
            const fetchPictures = async () => {
              try {
                const response = await fetch("/api/galleryPictures"); // Substituir pelo endpoint correto
                const data = await response.json();
                setGalleryPictures(data); // Atualizar estado com os eventos
              } catch (error) {
                console.error("Erro ao buscar eventos:", error);
              }
            };
        
            fetchPictures();
        }, []);

return (
    <>
        <div className="mx-auto my-7 px-16 flex justify-evenly gap-10">
            {
                galleryPictures.map((picture) => (
                    console.log("Festa:", picture.partyDate, "URL:", picture.url),
                ))
            }
        </div>
    </>
  );
}