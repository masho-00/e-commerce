import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slideImages } from "../data/data";

const Views = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef();

  useEffect(() => {
    startSlideTimer();
    return () => pauseSlideTimer();
  }, [currentIndex]);

  const startSlideTimer = () => {
    pauseSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slideImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
  };

  const pauseSlideTimer = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? slideImages.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === slideImages.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl underline text-center my-8">Explore our Products</h1>
    <div
      className="relative w-full max-w-5xl mx-auto"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <img
        src={slideImages[currentIndex]}
        alt={`Car slide ${currentIndex + 1}`}
        className="rounded-xl shadow-2xl w-full h-72 md:h-96 object-cover transition-opacity duration-700"
        key={slideImages[currentIndex]}
      />
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 md:p-4 transition"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 text-white rounded-full p-3 md:p-4 transition"
      >
        <FaArrowRight size={24} />
      </button>
    </div></div>
  );
};

export default Views;
