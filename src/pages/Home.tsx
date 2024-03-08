import React from "react";
import { Hero } from "../components/Hero";
import { Carousel } from "../components/Carousel";
import { Menu } from "../components/Menu";

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-full h-full flex flex-col-reverse md:flex-row gap-4 items-center justify-center">
        <Hero />
        <Carousel />
      </div>
      <div className="absolute bottom-0">

      </div>
    </div>
  );
};

export { Home };
