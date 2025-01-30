import Image from "next/image";
import { Trash2 } from "react-feather";
import { Product } from "@/Interfaces/Product";

interface WishlistProducts{
    wishlist: Product[];
}

export default function Wishlist( wishlistProducts:  WishlistProducts){
    

    return (
        <>
            <h2>Wishlist</h2>


            {
                //Mapeia os produtos da wishlist
                wishlistProducts.wishlist.map((product) => ( 
                    <div key={product._id} className="flex gap-3 shadow-[inset_0_0_70px_15px_rgba(38,1,1,1)] border-darkRed border-2 p-3 rounded-lg text-start">
                        <Image 
                            src={product.url} 
                            alt={"Imagem"} 
                            width={100} 
                            height={100} 
                            className="rounded-md"
                            priority
                        />

                        <div className="flex flex-col justify-evenly grow">
                            <h3 className="text-xl lg:text-2xl">{product.title}</h3>
                            <h5 className="lg:text-xl">{product.price}€</h5>

                            <div className="flex">
                                <button className="bg-lightRed py-1 w-full rounded-lg hover:brightness-50 active:brightness-75 transition-all duration-200 ease-in-out">Add to cart</button>

                                <button
                                    className="rounded-lg transition-all duration-200 ease-in-out w-2/12 flex justify-center"
                                >
                                    <Trash2
                                        color={"white"} 
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