"use client"
import { useEffect, useState } from "react";
import { ArrowUp } from "react-feather";
export default function ToTopButton() {
   
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
        
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`${isVisible ? 'opacity-100 hover:scale-125' : 'opacity-0 cursor-default'} text-center p-2 bg-darkRed text-white rounded-full shadow-lg transition-all duration-300 bg-gradient-to-t from-[#8C0303] from-0% via-[#590202] via-50% to-[#260101] to-100% content-center text-lg`}
            >
                
                <ArrowUp />
            </button>
            
    );
}