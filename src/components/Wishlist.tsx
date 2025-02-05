"use client"
import Image from "next/image";
import { Trash2 } from "react-feather";
import { useWishlist } from "@/Providers/WishlistProvider";
import { Product } from "@/Interfaces/Product";


export default function Wishlist({wishlistProducts}:  {wishlistProducts: Product[]}) {
    const { toggleWishlist} = useWishlist();
    
    return (
        <>
            <h3 className="text-4xl">Wishlist</h3>


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
                            priority
                        />

                        <div className="flex flex-col justify-between grow">
                            <div>
                                <h3 className="text-xl lg:text-2xl">{product.title}</h3>
                                <hr />
                                <h5 className="lg:text-xl">{product.price}€</h5>
                            </div>
                            

                            <div className="flex items-center">
                                <button className="bg-lightRed py-1 w-full rounded-lg hover:brightness-50 active:brightness-75 transition-all duration-200 ease-in-out">Add to cart</button>

                                <button
                                    className="rounded-lg transition-all duration-200 ease-in-out w-2/12 flex justify-center"
                                >
                                    <Trash2
                                        color={"white"} 
                                        className={` active:scale-100 hover:scale-125  transition-all duration-200 ease-in-out cursor-pointer`}
                                        size={25}
                                        onClick={() => toggleWishlist(product._id)}
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