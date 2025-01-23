"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import  {Heart} from 'react-feather';

interface Product {
    title: string,
    price: number,
    description: string,
    sales:  number,
    url:  string,
    colors: object
}
export default function BestSellersCards( {product} : { product: Product } ) {
  
    const [isHovered, setIsHovered] = useState(false);

    const [colorSelected, setColorSelected] = useState(0);

    return (
        <div className="mx-auto hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out shadow-[inset_0_0_70px_15px_rgba(38,1,1,1)] border-darkRed border-2 p-3 rounded-lg max-w-[300px] text-start">
            <Image src={product.url} alt={"Imagem"} width={300} height={200} className="rounded-2xl  p-3" />
            <h3 className="">{product.title}</h3>
            <hr className="text-lightRed"/>
            <h4>{product.price}€</h4>
            <div className="flex gap-1 w-fit bg-lightRed/65 px-1 py-1 rounded-full">
                {
                Object.entries(product.colors).filter(([color, isAvailable]) => isAvailable).map(([color], index) => (
                    <div onMouseDown={() => setColorSelected(index)} key={color} className={`bg-${color} ${index === colorSelected ? 'border-lightRed' : 'border-gray' } hover:border-lightRed cursor-pointer w-5 h-5 rounded-full border-2`}></div>
                ))
                }
            </div>

            <div className="flex gap-1 py-2 items-center">
                <button className="bg-lightRed py-1 w-full rounded-lg hover:brightness-50 transition-all duration-200 ease-in-out">Add to cart</button>
                <button  onMouseOver={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}  className="bg-mediumRed py-1 px-2 rounded-lg transition-all duration-200 ease-in-out w-2/12 flex justify-center">
                    <Heart color={isHovered ? "darkRed" : "currentColor"} className="transition-all duration-200 ease-in-out cursor-pointer"/>
                </button>
            </div>
        </div>
    )
  }