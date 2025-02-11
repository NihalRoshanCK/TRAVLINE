"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";

interface SlideData {
  src: StaticImageData;
  header: string;
  packageName: string;
  description: string;
  quout: string;
}

const slides: SlideData[] = [
  {
    src: image2,
    header: "God's Own Kerala",
    packageName: "Kerala Packages ",
    description: " Journey Through Paradise",
    quout: "God's Own Kerala",
  },
  {
    src: image3,
    header: " Amazing Thailand",
    packageName: "Thailand Packages",
    description: "The Land OF Smiles Awaits",
    quout: "Thailand Treasures",
  },
  {
    src: image1,
    header: "Beautiful Maldives",
    packageName: "Maldives Packages",
    description: "Escape to Tropical Bliss",
    quout: "Maldives Magic",
  },
  {
    src: image4,
    header: "EXOTIC GOA",
    packageName: "Goa Packages",
    description: "Sun, Sand, and Serenity",
    quout: "Goa Gateway",
  },
];

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (): void => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - startX.current;
    if (deltaX > 50) {
      prevSlide();
      isDragging.current = false;
    } else if (deltaX < -50) {
      nextSlide();
      isDragging.current = false;
    }
  };

  return (
    <div className="w-full h-full select-none">
      <div
        ref={sliderRef}
        className="relative h-full group overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Image
          alt={`Slider Image ${currentIndex + 1}`}
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer select-none pointer-events-none"
          layout="fill"
          objectFit="cover"
          src={slides[currentIndex].src}
        />
        <div className="relative h-1/4 w-full top-1/3 left-1/4flex flex-col items-center justify-center">
          <div className="h-[50%] flex justify-center items-center">
            <p className="text-7xl font-bold text-white h-1/2 ">
              {slides[currentIndex].header}
            </p>
          </div>
          <div className="h-[50%] w-[100%] flex justify-center items-center">
            <button className=" text-white  hover:opacity-80 hover:bg-slate-200 hover:text-black hover:cursor-pointer h-[50%] w-[10%] border-2 rounded-full">
              {slides[currentIndex].packageName}
            </button>
          </div>
        </div>
        <div className=" relative w-full h-[14%] top-[60%]   flex justify-center items-center">
          <div className="w-1/2 h-full  flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="transition-opacity duration-500 ease-in-out  w-1/4 h-full  border-l-1 "
              >
                <div className="h-1/2 w-full pl-3 flex flex-col gap-3 text-white">
                  <p>{slide.description}</p>
                  <p className="font-mono font-semibold text-lg">
                    {slide.quout}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
