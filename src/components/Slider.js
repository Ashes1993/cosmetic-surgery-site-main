// Carousel.js
import React, { useState, useEffect } from "react";
import "./Slider.css";
import image1 from "../Images/Slider/1.webp";
import image2 from "../Images/Slider/2.webp";
import image3 from "../Images/Slider/3.webp";
import image4 from "../Images/Slider/4.jpg";

const images = [image1, image2, image3, image4];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimation(true);
    const timeout = setTimeout(() => {
      setAnimation(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentSlide ? "active" : ""
          } ${animation && index === currentSlide ? "zoom-out" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
