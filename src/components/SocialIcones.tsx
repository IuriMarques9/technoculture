"use client"
import { useEffect, useState } from "react";
import { Facebook, Instagram, Youtube, } from "react-feather";

export default function SocialIcones() {
   const [isVisible, setIsVisible] = useState(false);
       
       useEffect(() => {
           const handleScroll = () => {
             if (window.scrollY > 10) {
               setIsVisible(true);
             } else {
               setIsVisible(false);
             }
           };
       
           window.addEventListener("scroll", handleScroll);
           return () => window.removeEventListener("scroll", handleScroll);
         }, []);
         
    return (            
        <div className="flex gap-3">
            <a 
                href="https://www.facebook.com/Technocultureportugal" 
                target="_blank"       // Abre em uma nova aba (opcional)
                rel="noopener noreferrer" // Recomendado por questões de segurança
            >
                <Facebook size={24} color={'white'} className={`opacity-10 hover:opacity-100 hover:scale-125 hover:stroke-[#3b5998] hover:cursor-pointer transition-all duration-500`}/>
            </a>

            <a 
                href="https://www.instagram.com/technocultureportugal/?locale=gb&hl=am-et" 
                target="_blank"       // Abre em uma nova aba (opcional)
                rel="noopener noreferrer" // Recomendado por questões de segurança
            >
                <Instagram size={24} color={'white'} className={`opacity-10 hover:opacity-100 hover:scale-125 hover:stroke-[#3f729b] hover:cursor-pointer transition-all duration-500`}/>
            </a>

            <a 
                href="https://www.youtube.com/@technocultureportugal5731" 
                target="_blank"       // Abre em uma nova aba (opcional)
                rel="noopener noreferrer" // Recomendado por questões de segurança
            >
                <Youtube size={24} color={'white'} className={`opacity-10 hover:opacity-100 hover:scale-125 hover:stroke-[#c4302b] hover:cursor-pointer transition-all duration-500`}/>
            </a>
        </div>
    );
}