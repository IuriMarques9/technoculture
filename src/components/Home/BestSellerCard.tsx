"use client"
import { Product } from "@/Interfaces/Product";
import { useWishlist } from "@/Providers/WishlistProvider";
import Image from "next/image";
import { useState } from "react";
import  {Heart} from 'react-feather';

export default function BestSellerCard( {product} : { product: Product } ) {
  
    const [colorSelected, setColorSelected] = useState(0);
    
    const { wishlist, toggleWishlist } = useWishlist(); //Pegamos o estado e a função para adicionar ou remover produto da wishlist
        
    return (
        <div className="hover:scale-105 cursor-pointer transition-all duration-200 ease-in-out shadow-[inset_0_0_70px_15px_rgba(38,1,1,1)] border-darkRed border-2 p-3 rounded-lg max-w-[300px] text-start">
            <Image 
                src={product.url} 
                alt={"Imagem"} 
                width={300} 
                height={200} 
                className="rounded-2xl p-3" 
            />

            <h3 className="">{product.title}</h3>
            <hr className="text-lightRed"/>
            <h4>{product.price}€</h4>
            <div className="flex gap-1 w-fit bg-lightRed/65 px-1 py-1 rounded-full">
                {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                Object.entries(product.colors).filter(([color , isAvailable]) => isAvailable).map(([color], index) => (
                    <div onMouseDown={() => setColorSelected(index)} key={color} className={`bg-${color} ${index === colorSelected ? 'border-lightRed' : 'border-gray' } hover:border-lightRed cursor-pointer w-5 h-5 rounded-full border-2`}></div>
                ))
                }
            </div>

            <div className="flex gap-1 py-2 items-center">
                <button className="bg-lightRed py-1 w-full rounded-lg hover:brightness-50 active:brightness-75 transition-all duration-200 ease-in-out">Add to cart</button>
                
                <button
                    onClick={() => toggleWishlist(product._id)}
                    className="rounded-lg transition-all duration-200 ease-in-out w-2/12 flex justify-center"
                >
                    <Heart 
                        color={wishlist.includes(product._id) ? "darkRed" : "currentColor"} 
                        className={`${wishlist.includes(product._id) ? 'fill-lightRed' : 'currentColor'} active:scale-100 hover:scale-125  transition-all duration-200 ease-in-out cursor-pointer`}
                        size={28}
                    />
                </button>
            </div>
        </div>
    )
  }