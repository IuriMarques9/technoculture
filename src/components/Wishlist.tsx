"use client"
import { useState } from "react";
import { X } from "react-feather";

function toogleWishlist(){
    const wishlist = document.querySelector("#Wishlist");
    if(wishlist?.classList.contains('hidden')){
        wishlist?.classList.remove('hidden');
    }else{
        wishlist?.classList.add('hidden');
    }
}

export default function Wishlist(){
    const [wishlist, setWishlist] = useState(localStorage.getItem('wishlist'));

    
    return (
        <div className="absolute animate-[fade-right_1s_ease-in-out] top-0 right-0 w-2/4 bg-lightRed">
            <X
                color="white" 
                size={20}
                className="hover:scale-110 hover:cursor-pointer transition-transform h-full"
                onClick={toogleWishlist}
            />

            <hr />

            <div className="">
                fbd
            </div>
        </div>
    );
}