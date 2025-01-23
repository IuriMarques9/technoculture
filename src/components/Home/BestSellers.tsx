"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import  {Heart} from 'react-feather';
import BestSellersCards from "./BestSellersCards";

interface Products {
    title: string,
    price: number,
    description: string,
    sales:  number,
    url:  string,
    colors: object
}

export default function BestSellers( {childToParentBestSellers} ) {
  
  
  const [bestSellers, setBestSellers] = useState<Products[]>([]); // Estado para armazenar os eventos
  useEffect(() => {
    // Função para buscar os dados
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Substituir pelo endpoint correto
        const data = await response.json();
      
        const bestSellers = data.sort((a, b) => b.sales - a.sales).slice(0,3); // Pegar os 3 melhores vendas e ordenar por ordem decrescente
        
        setBestSellers(bestSellers); // Atualizar estado com os eventos

      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      } finally{
        childToParentBestSellers(false)
      }
    };
            
    fetchProducts();
  }, []);

  

  const settings = {
    dots: false, // Mostrar os indicadores (bolinhas)
    infinite: false, // Loop infinito
    speed: 500, // Velocidade da transição
    slidesToShow: 3, // Quantidade de slides visíveis
    responsive: [ // Configurações responsivas
        {
            breakpoint: 640, // Breakpoint para telas menores que 640px
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 1024, // Breakpoint para telas menores que 1024px
            settings: {
                slidesToShow: 2,
            },
        },
    ],
    arrows:false,
    swipe: false, // Desativa o deslizar em dispositivos móveis
  draggable: false, // Desativa o arrastar em desktops
  };

  return bestSellers.length > 0 ? (
        <Slider {...settings} className="z-30">
            {
                // Events array
                bestSellers.map((product) => (
                  <BestSellersCards key={product.title} product={product} />
                ))
            }
        </Slider>
  ) : (<p>No Products</p>);
  }