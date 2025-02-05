import Slider from "react-slick";
import BestSellersCards from "./BestSellersCards";
import { useProducts } from "@/Providers/ProductsProvider";


export default function BestSellers( ) {
  
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

  const products = useProducts(); //Context Products
  const bestSellers = products.sort((a, b) => b.sales - a.sales).slice(0,3); // Pegar os 3 melhores vendas e ordenar por ordem decrescente

  return bestSellers.length > 0 ? (
        <Slider {...settings} className="z-30">
          {
            // Events array
            bestSellers.map((product) => (
              <BestSellersCards key={product._id} product={product} />
            ))
          }
        </Slider>
  ) : (<p>No Products</p>);
}