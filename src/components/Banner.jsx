import React, { useEffect, useState } from 'react';

import backgroundImage from '../assets/assest/Home_01.jpg';
import backgroundImage2 from '../assets/assest/view-of-upasshak-hostel-e1635155724955.jpg';
import backgroundImage3 from '../assets/assest/IMG_5338.jpg';
import backgroundImage4 from '../assets/assest/DSC_0417-1-scaled.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

const Banner = () => {
  const images = [
    backgroundImage,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isFading) return; // Prevent clicking while fading
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      setIsFading(false);
    }, 1000);
  };

  const prevSlide = () => {
    if (isFading) return; // Prevent clicking while fading
    setIsFading(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? images.length - 1 : prevSlide - 1
      );
      setIsFading(false);
    }, 1000);
  };

  return (
    <div className="relative w-full h-[750px] overflow-hidden group">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fit"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        onClick={prevSlide}
      >
        <IoIosArrowBack /> {/* Left arrow icon */}
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        onClick={nextSlide}
      >
        <MdArrowForwardIos /> {/* Right arrow icon */}
      </div>

      {/* Dots (Indicators) */}
  


    </div>
  );
};

export default Banner;
