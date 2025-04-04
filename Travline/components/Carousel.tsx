"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// Import images correctly in Next.js
import image1 from "@/public/test.png";
import image2 from "@/public/test.png";
import image3 from "@/public/test.png";
import image4 from "@/public/test.png";
import image5 from "@/public/test.png";
import image6 from "@/public/test.png";
import image7 from "@/public/test.png";
import image8 from "@/public/test.png";
import image9 from "@/public/test.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
    //   navigation
    
      autoplay={{ delay: 8000 }}
      className="flex justify-center items-center"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center gap-0">
          <Image src={img.src} alt={`Slide ${index + 1}`} width={150} height={100} className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
