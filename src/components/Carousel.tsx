import React, { useState } from "react";
import mereoleona from "../assets/products/Black Clover Mereoleona Figure.png";
import mugsock from "../assets/products/XBOX Mug and Socks.png";
import PSTee from "../assets/products/Sony Playstation Mens' Shirt.png";
import CODTee from "../assets/products/COD Mens' T-Shirt.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Carousel: React.FC = () => {
  const images = [
    { url: mereoleona, alt: "MEREOLEONA" },
    { url: mugsock, alt: "MUG&SOCK" },
    { url: PSTee, alt: "PST" },
    { url: CODTee, alt: "CODT" },
  ];

  const [imgIndex, setImgIndex] = useState<number>(0);

  const setPrevious = () => {
    setImgIndex((prevImgIndex: number) => {
      if (prevImgIndex === 0) return images.length - 1;
      return prevImgIndex - 1;
    });
  };
  const setNext = () => {
    setImgIndex((prevImgIndex: number) => {
      if (prevImgIndex === images.length - 1) return 0;
      return prevImgIndex + 1;
    });
  };

  return (
    <div className="relative bg-gradient-to-r from-nebula-100 to-nebula-200 flex items-center overflow-clip size-[300px] sm:size-[400px] rounded-full text-nebula-900 select-none">
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className="w-full object-cover duration-300"
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        );
      })}
      <IoIosArrowBack
        onClick={setPrevious}
        className="absolute text-4xl hover:cursor-pointer"
      />
      <IoIosArrowForward
        onClick={setNext}
        className="absolute right-0 text-4xl hover:cursor-pointer"
      />
    </div>
  );
};

export { Carousel };
