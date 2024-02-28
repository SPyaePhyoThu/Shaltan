"use client";

import React, { useState, useRef } from "react";
import { Card1, Card2, Card3, Card4 } from "./Cards";

const CardContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(0);

  const scrollToIndex = (index: number) => {
    setScrollIndex(index);
  };

  const scrollLeft = () => {
    setScrollIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const scrollRight = () => {
    setScrollIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const calculateTranslateX = () => {
    return window.innerWidth / 2;
  };

  return (
    <div className="relative overflow-hidden py-2 md:py-5 lg:py-10">
      <div
        ref={containerRef}
        id="card-container"
        className="flex mx-2 transition-transform duration-300 ease-in-out transform w-container"
        style={{
          transform: `translateX(-${scrollIndex * calculateTranslateX()}px)`,
        }}
      >
        <div className="w-1/4  grid justify-items-center">
          <Card1 />
        </div>
        <div className="w-1/4  grid justify-items-center">
          <Card2 />
        </div>
        <div className="w-1/4  grid justify-items-center">
          <Card3 />
        </div>
        <div className="w-1/4  grid justify-items-center">
          <Card4 />
        </div>
      </div>
      <div className="flex justify-center">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`mx-2 p-2 rounded-full ${
              index === scrollIndex ? "bg-black" : "bg-color5"
            } border-solid border-black `}
          ></button>
        ))}
      </div>
      {window.innerWidth >= 600 && (
        <>
          {" "}
          <button
            className="absolute mx-2 top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full h-10 w-10 shadow shadow-black text-xl"
            onClick={scrollLeft}
          >
            &larr;
          </button>
          <button
            className="absolute mx-2 top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full h-10 w-10 shadow shadow-black"
            onClick={scrollRight}
          >
            &rarr;
          </button>{" "}
        </>
      )}
    </div>
  );
};

export default CardContainer;
