"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import  {Heart} from 'react-feather';

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

  console.log(bestSellers)

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
                <div key={product.title} className="transition-all duration-200 ease-in-out shadow-[inset_0_0_30px_5px_rgba(38,1,1,1)] border-darkRed border-2 p-3 rounded-lg max-w-[300px] text-start">
                  <Image id="teste" src={product.url} alt={"Imagem"} width={300} height={200} className=" rounded-3xl w-full p-3" />
                  <h3 className="">{product.title}</h3>
                  <hr className="text-lightRed"/>
                  <h4>{product.price}€</h4>
                  <div className="flex gap-1 w-fit bg-darkRed/50 px-1 py-1 rounded-full">
                    {
                      Object.entries(product.colors).filter(([color, isAvailable]) => isAvailable).map(([color]) => (
                        <div key={color} className={`bg-${color} w-5 h-5 rounded-full border-2 border-gray`}></div>
                      ))
                    }
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <button className="bg-lightRed rounded-lg py-1 hover:scale-105 transition-all duration-200 ease-in-out">Add to cart</button>
                    <button className="hover:scale-105 transition-all duration-200 ease-in-out">Add to wishlist<Heart className="inline ml-1"/></button>
                  </div>
                </div>
              ))
          }
        </Slider>
  ) : (<p>No Products</p>);
  }