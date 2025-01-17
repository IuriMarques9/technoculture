"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

interface Products {
    title: string,
    price: number,
    description: string,
    sales:  number,
    url:  string,
}

export default function BestSellers( {childToParentBestSellers} ) {

  const [productsData, setProductsData] = useState<Products[]>([]); // Estado para armazenar os eventos
  useEffect(() => {
    // Função para buscar os dados
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/products"); // Substituir pelo endpoint correto
        const data = await response.json();
      
        const bestSellers = data.sort((a, b) => b.sales - a.sales).slice(0,3); // Pegar os 3 melhores vendas e ordenar por ordem decrescente
        
        setProductsData(bestSellers); // Atualizar estado com os eventos

      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      } finally{
        childToParentBestSellers(false)
      }
    };
            
    fetchEvents();
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

  return productsData.length > 0 ? (
      <>
        <Slider {...settings} className="z-30">
          {
              // Events array
              productsData.map((product) => (
                <div key={product.title}>
                  <h2>{product.title}</h2>
                  <h6>{product.description}</h6>
                  <h6>{product.price}</h6>
                  <h6>{product.url}</h6>
                  <h6>{product.sales}</h6>
                </div>
              ))
          }
        </Slider>
      </>
  ) : (<p>No Products</p>);
  }