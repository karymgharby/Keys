import "./ImageSlider.css";
import Slider from "react-slick";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const tempImages = [
  "https://images.unsplash.com/photo-1639059790587-95625e6b764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1639059790587-95625e6b764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1639059790587-95625e6b764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1639059790587-95625e6b764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1639059790587-95625e6b764c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "50px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="imageSlider">
      <Slider {...settings}>
        {tempImages.map((image, i) => (
          <div
            className={
              i === imageIndex
                ? "imageSlider__slide activeSlide"
                : "imageSlider__slide"
            }
          >
            <img className="imageSlider__slide--image" alt="" src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
