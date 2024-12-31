"use client"
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Headers(){
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Define o limite para mobile
        };

        handleResize(); // Chama no carregamento inicial
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {
                isMobile ? (
                    <HeaderMobile page={pathname} />
                ) : (
                    <HeaderDesktop page={pathname}/>
                )
            }
        </>
    );
}