import BestSellersCards from "./BestSellerCard";
import { useProducts } from "@/Providers/ProductsProvider";
import { useEffect, useState } from "react";


export default function BestSellers( ) {

  const products = useProducts(); //Context Products
  const bestSellers = products.sort((a, b) => b.sales - a.sales).slice(0,3); // Pegar os 3 melhores vendas e ordenar por ordem decrescente


  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Define o limite para mobile
    
    };
      handleResize(); // Chama no carregamento inicial
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
  }, []);



  if(windowWidth <= 640) {
    return bestSellers.length > 0 ? (
      <div className="flex justify-center">
        <BestSellersCards key={bestSellers[0]._id} product={bestSellers[0]} />
      </div>
    ) 
    :
    (<p>No Products</p>);
  } 
  else if(windowWidth <= 1024){
    return bestSellers.length > 0 ? (
      <div className="flex gap-8 justify-evenly">
        <BestSellersCards key={bestSellers[0]._id} product={bestSellers[0]} />
        <BestSellersCards key={bestSellers[1]._id} product={bestSellers[1]} />
      </div>
    ) 
    :
    (<p>No Products</p>);
  } 
  else{
    return bestSellers.length > 0 ? (
      <div className="flex flex-col md:flex-row gap-8 justify-evenly">
          {
            // Events array
            bestSellers.map((product) => (
              <BestSellersCards key={product._id} product={product} />
            ))
          }
      </div>
    ) 
    :
    (<p>No Products</p>);
  }
}