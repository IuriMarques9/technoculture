"use client"
import { useProducts } from "@/Providers/ProductsProvider";
import Image from "next/image";
import { useState } from "react";
import { Delete } from "react-feather";

export default function Wishlist( ){
    const wishlist = localStorage.getItem('wishlist') ?? '';
    const wishlistProductsId = wishlist.split('#').filter(id => id !== ''); //Passa a string que vem da local storage para um array com os id dos produtos e elimina os vazios 

    const products = useProducts(); //Pega todos os produtos do contexto de produtos

    // Filtra os produtos que estão na wishlist
    const wishlistProducts = products.filter((product) => 
        wishlistProductsId.includes(product._id)
    );


    return (
        <>
            <h4>Wishlist</h4>

            <hr />
            {
                //Mapeia os produtos da wishlist
                wishlistProducts.map((product) => ( 
                    <div key={product._id} className="flex gap-3 shadow-[inset_0_0_70px_15px_rgba(38,1,1,1)] border-darkRed border-2 p-3 rounded-lg text-start">
                        <Image 
                            src={product.url} 
                            alt={"Imagem"} 
                            width={100} 
                            height={100} 
                            className="rounded-md" 
                        />

                        <div className="flex flex-col justify-evenly grow">
                            <h5>{product.title}</h5>
                            <h6>{product.price}</h6>
                            <h4>{product.sales}</h4>

                            <div className="flex">
                                <button className="bg-lightRed py-1 w-full rounded-lg hover:brightness-50 active:brightness-75 transition-all duration-200 ease-in-out">Add to cart</button>

                                <button
                                    className="rounded-lg transition-all duration-200 ease-in-out w-2/12 flex justify-center"
                                >
                                    <Delete 
                                        color={wishlist?.split('#').includes(product._id) ? "darkRed" : "currentColor"} 
                                        className={` active:scale-100 hover:scale-125  transition-all duration-200 ease-in-out cursor-pointer`}
                                        size={28}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    );
}