import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🔹 Importa correctamente las imágenes
import pizzaMuzza from "../../assets/muzzarella.jpg";
import helado from "../../assets/helado.jpg";
import empanada from "../../assets/empanada_jamonyqueso.jpg";

const images = [
  { src: pizzaMuzza, title: "Pizza Muzzarella", text: "La mejor pizza de muzarella." },
  { src: helado, title: "Helado", text: "Helado cremoso de chocolate." },
  { src: empanada, title: "Empanada Jamón y Queso", text: "Empanadas clásicas rellenas de jamón y queso." }
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="slick-slider">
      {images.map((image, index) => (
        <div key={index} className="slick-slide" style={{ backgroundImage: `url(${image.src})` }}>
          <div className="slider-content">
            <h2>{image.title}</h2>
            <p>{image.text}</p>
            <button>Ver Menú</button>
          </div>
        </div>
      ))}
    </Slider>
  );
}
