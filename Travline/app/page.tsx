"use client";

import ImageSlider from "@/components/ImageSlider";
import Carousel from "@/components/Carousel";
import MostCarosel from "@/components/MostCarousel";

import Image from "next/image";
import image1 from "@/public/test.png";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full w-full no-scrollbar">
      <ImageSlider />
      <div className="flex items-center justify-center py-7 no-scrollbar">
        <div className="w-[70%] flex md:flex-row flex-col gap-7">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold">Explore</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at et unde illo repellat nihil cumque eius asperiores, corporis eaque possimus illum necessitatibus explicabo, nisi ea, quod corrupti distinctio suscipit.
            </p>
          </div>
          <div className="md:w-1/2 h-fit ">
            <Carousel />
          </div>
        </div>
      </div>
      <div className="lg:px-20">
        <MostCarosel/>
      </div>
      <div>

      </div>
      
    </section>
  );
}
