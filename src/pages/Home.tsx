import React from "react";
import { Hero } from "../components/Hero";
import { Carousel } from "../components/Carousel";

const Home: React.FC = () => {
  return (
    <div className="flex px-8">
      <div className="w-full h-full flex flex-col-reverse md:flex-row gap-4 items-center justify-center">
        <Hero />
        <Carousel />
      </div>
    </div>
  );
};

export { Home };
