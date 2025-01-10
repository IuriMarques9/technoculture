"use client"
import { ChevronLeft, ChevronRight } from "react-feather";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Caroussel() {
    const settings = {
    dots: true, // Mostrar os indicadores (bolinhas)
    infinite: false, // Loop infinito
    speed: 1000, // Velocidade da transição
    slidesToShow: 3, // Quantidade de slides visíveis
    slidesToScroll: 1, // Quantidade de slides que movem a cada clique
    responsive: [ // Configurações responsivas
        {
            breakpoint: 640, // Breakpoint para telas menores que 768px
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1024, // Breakpoint para telas menores que 1024px
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
    nextArrow: <CustomNextArrow />, // Personalizando botão "próximo"
    prevArrow: <CustomPrevArrow  />
};



return (
    <div className=" mx-auto my-7 px-4">
      <Slider {...settings}>
        <div>
            fhfhfg
        </div>
        <div>
            aafghfhg
        </div>
        <div>
          fhtgfghfgh
        </div>
        <div>
          fhtgfghfgh
        </div>
        <div>
          fhtgfghfgh
        </div>
        <div>
          fhtgfghfgh
        </div>
      </Slider>
    </div>
  );
}

function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="hover:scale-[1.7] scale-[1.4] transition-transform absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl z-10">
        <ChevronRight/>
      </button>
    );
}
  
  function CustomPrevArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="hover:scale-[1.7] scale-[1.4] transition-transform absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl z-10">
        <ChevronLeft/>
      </button>
    );
}