"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo_grande.png";
import { ShoppingCart, Heart } from "react-feather";
import routes from "@/lib/routes";
import { useState } from "react";
import Wishlist from "./Wishlist";
import { useProducts } from "@/Providers/ProductsProvider";

export default function HeaderDesktop(props: { page: string }){
    const wishlist = localStorage.getItem('wishlist') ?? '';
    const wishlistProductsId = wishlist.split('#').filter(id => id !== ''); //Passa a string que vem da local storage para um array com os id dos produtos e elimina os vazios 

    const products = useProducts(); //Pega todos os produtos do contexto de produtos
    
        // Filtra os produtos que estão na wishlist
    const wishlistProducts = products.filter((product) => 
        wishlistProductsId.includes(product._id)
    );
        
    const [showWishlist, setShowWishlist] = useState(false);
    

    return (
        <header id="Header" className="flex w-full items-center justify-between bg-transparent p-4 h-fit gap-1">
            <Link href="/">
                <Image 
                    src={Logo} 
                    alt="TechnoCulture Logo" 
                    width={170}
                    height={170}   
                />            
            </Link>


            <div className="w-fit flex items-center gap-x-3">                
        
                {
                    routes.map((routes) => {
                        if(routes.path === props.page){ //If its the current page, decoration in button
                            return (
                            <div key={routes.path} className="bg-darkRed/20 decoration-white underline text-xs px-3 py-1 w-fit uppercase tracking-widest transition-all duration-500 ease-in-out border-2 border-darkRed flex justify-center items-center">
                                <Link className="cursor-default" href={routes.path}>{routes.name}</Link>
                            </div>
                            )
                        }

                        return (
                            <div key={routes.path} className="bg-darkRed/20 hover:scale-125 text-xs px-3 py-1 w-fit uppercase cursor-pointer tracking-widest transition-all duration-500 ease-in-out border-2 border-darkRed flex justify-center items-center">
                                <Link href={routes.path}>{routes.name}</Link>
                            </div>
                        );
                    })
                }
                    
                
                <div className="h-[32px] border-darkRed border"></div>

                <ShoppingCart 
                    color="white" 
                    size={25}
                    className="active:scale-[0.85] fill-darkRed/20 hover:cursor-pointer transition-transform"
                />
        
        
                <div className="relative active:scale-[0.85] transition-transform">
                    <Heart 
                        color="white" 
                        size={25}
                        className="fill-darkRed/20 hover:cursor-pointer"
                        onMouseOver={()=>setShowWishlist(true)}
                        onMouseLeave={()=>setShowWishlist(false)}
                    />
                </div>


            </div>
            {
                (showWishlist && wishlistProducts.length > 0) ? (

                    <div 
                        onMouseOver={()=>setShowWishlist(true)} 
                        onMouseLeave={()=>setShowWishlist(false)}
                        className="max-w-[600px] shadow-[4px_4px_7px_1px_rgba(0,0,0,0.5)] flex flex-col gap-4 absolute right-4 top-12 bg-mediumRed rounded-md px-6 py-4 w-6/12"
                    >
                        <Wishlist wishlist={wishlistProducts}/>
                    </div>

                ) : (showWishlist && wishlistProducts.length === 0) ? (

                    <div className="max-w-[600px] shadow-[4px_4px_7px_1px_rgba(0,0,0,0.5)] flex flex-col gap-4 absolute right-4 top-12 bg-mediumRed rounded-md px-6 py-4 w-6/12">
                        <h3 className="text-4xl">Wishlist</h3>

                        <p>No products saved on your wishlist</p>
                    </div>

                ) : null
            }
        </header>
    );
}