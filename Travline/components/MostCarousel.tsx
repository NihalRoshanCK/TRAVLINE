"use client";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const MostCarousel: React.FC = () => {
  const images = [
    { src: "http://localhost:3000/image1.jpg", alt: "Slide 1" },
    { src: "http://localhost:3000/image2.jpg", alt: "Slide 2" },
    { src: "http://localhost:3000/image3.jpg", alt: "Slide 3" },
    { src: "http://localhost:3000/image4.jpg", alt: "Slide 4" },
    { src: "http://localhost:3000/image1.jpg", alt: "Slide 1" },
    { src: "http://localhost:3000/image2.jpg", alt: "Slide 2" },
    { src: "http://localhost:3000/image3.jpg", alt: "Slide 3" },
    { src: "http://localhost:3000/image4.jpg", alt: "Slide 4" },

  ];

  const visibleSlides = 3;
  const totalSlides = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleSlides < totalSlides ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : totalSlides - visibleSlides
    );
  };

  return (
    <div className="relative w-full h-80 flex gap-2 justify-center items-center py-4 ">
      {/* Left Arrow */}
      <button
        className="  top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="size-9 text-blue-500 hover:text-blue-700 transition" />
      </button>

      {/* Carousel Container */}
      <div className="w-5/6 h-full overflow-hidden flex items-center justify-center">
        <div
          className="flex h-full lg:gap-5 gap-2   transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
        >
          {images.map((image, index) => (
            <div
            key={index}
            className="group h-full rounded-2xl bg-cover bg-center text-white font-black text-xl relative overflow-hidden flex-shrink-0 
                       lg:w-[calc(100%/3.14)]  md:w-[calc(100%/3.09)] sm:w-[calc(100%/3.09)]"
            style={{ backgroundImage: `url(${image.src})` }}
          >
          
              <div className="absolute  inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300 ease-in-out"></div>
              <div className="relative  flex flex-col h-full w-full justify-between px-5 py-3 z-10">
                <div className="w-full text-right p-2 font-medium rounded-bl-lg">
                  <p>Price On Request</p>
                </div>
                <div>Kerala Special Tour</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className=" top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="size-9 text-blue-500 hover:text-blue-700 transition" />
      </button>
    </div>
  );
};

export default MostCarousel;
