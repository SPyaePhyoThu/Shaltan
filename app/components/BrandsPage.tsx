"use client";
import React, { useState } from "react";
import Link from "next/link";

export const BrandsPage = () => {
  const [isHovered, setIsHovered] = useState("");
  return (
    <div
      className="h-full  pt-10 pb-16 gap-5 bg-color5 grid grid-rows-[min-content,min-content,1fr]"
      id="brands"
    >
      <h1 className="font-heading text-3xl sm:text-5xl text-center">
        Featured Brands
      </h1>
      <p className="text-center pb-6 font-bold">
        Explore your perfect pair with just a click.
      </p>
      <div
        className="bg-color5 w-full h-album md:justify-self-center md:justify-center grid 
      grid-rows-5 gap-3 justify-items-center md:grid-rows-3 md:grid-cols-[200px_308px_200px] md:gap-1 lg:gap-4  lg:grid-cols-[250px_385px_250px]"
      >
        <div className='relative bg-cover bg-center w-4/5 sm:w-3/5 md:w-full  md:h-full bg-[url("/images/nike.jpg")] md:row-span-2 rounded-md'>
          <div
            className="absolute inset-0 w-full h-full bg-black rounded-md"
            style={{
              opacity: isHovered === "nike" ? "0.6" : "0.8",
              transition: "width 0.3s ease",
            }}
          >
            <h1
              className="text-white font-heading text-2xl lg:text-4xl absolute top-2/4 left-1/3 transform -translate-y-2/4  border-b-4"
              style={{
                width: isHovered === "nike" ? "34%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("nike")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=nike">NIKE</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full w-4/5 sm:w-3/5 md:w-full bg-cover bg-center bg-[url("/images/vans.jpg")] md:row-start-3 md:row-end-4 rounded-md'>
          <div
            className="absolute inset-0 w-full h-full bg-black rounded-md "
            style={{
              opacity: isHovered === "vans" ? "0.6" : "0.8",
              transition: "width 0.3s ease",
            }}
          >
            <h1
              className="text-white  font-heading text-2xl lg:text-4xl absolute top-2/4 left-1/3 transform -translate-y-2/4  border-b-4"
              style={{
                width: isHovered === "vans" ? "40%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("vans")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection/?brand=vans">VANS</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full w-4/5 sm:w-3/5 md:w-full bg-cover bg-center bg-[url("/images/puma.jpg")] md:row-start-1 md:row-end-4 rounded-md'>
          <div
            className="absolute inset-0 w-full h-full bg-black  rounded-md"
            style={{
              opacity: isHovered === "puma" ? "0.6" : "0.8",
              transition: "width 0.3s ease",
            }}
          >
            <h1
              className="text-white  font-heading text-3xl lg:text-5xl absolute top-2/4 left-1/3 transform -translate-y-2/4 border-b-4"
              style={{
                width: isHovered === "puma" ? "38%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("puma")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=puma">PUMA</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full w-4/5 sm:w-3/5 md:w-full bg-cover bg-center bg-[url("/images/adidasPair.jpg")] md:row-start-1 md:row-end-2 rounded-md'>
          <div
            className="absolute inset-0 w-full h-full bg-black rounded-md"
            style={{
              opacity: isHovered === "adidas" ? "0.6" : "0.8",
              transition: "width 0.3s ease",
            }}
          >
            <h1
              className="text-white  font-heading text-2xl lg:text-4xl absolute top-2/4 left-1/3 md:left-1/4 transform -translate-y-2/4 border-b-4"
              style={{
                width: isHovered === "adidas" ? "55%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("adidas")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=adidas">ADIDAS</Link>
            </h1>
          </div>
        </div>
        <div className='relative w-4/5 sm:w-3/5 h-full md:w-full bg-cover bg-center bg-[url("/images/converse.jpg")] md:row-start-2 md:row-end-4 rounded-md'>
          <div
            className="absolute inset-0 w-full h-full bg-black rounded-md"
            style={{
              opacity: isHovered === "converse" ? "0.6" : "0.8",
              transition: "width 0.3s ease",
            }}
          >
            <h1
              className="text-white  font-heading text-2xl lg:text-4xl absolute top-2/4 left-1/3 md:left-8 transform -translate-y-2/4 border-b-4 "
              style={{
                width: isHovered === "converse" ? "77%" : "0",
                transition: "width 0.3s ease",
              }}
              onMouseEnter={() => setIsHovered("converse")}
              onMouseLeave={() => setIsHovered("")}
            >
              <Link href="/collection?brand=converse">CONVERSE</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
