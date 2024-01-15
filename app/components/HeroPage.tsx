"use client";
import Alert from "@/app/components/alert";

import Link from "next/link";
import { CartIcon } from "@/components/ui/CartIcon";
import { ProfileIcon } from "@/components/ui/ProfileIcon";
import { useCartContext } from "@/app/context/cartContext";

export const HeroPage = () => {
  const cartContext = useCartContext();
  const { cartState } = cartContext || {};
  return (
    <div className="pt-2 px-3 h-dvh  bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="relative w-full h-full bg-black bg-opacity-70 grid grid-rows-[min-content,0.8fr,min-content,0.2fr,.5fr]">
        <Alert></Alert>
        <div className="w-full pt-1 flex justify-between px-2 md:px-5 ">
          <h1 className="font-heading text-white text-2xl ">ShalTan</h1>
          <ul className="flex gap-x-6 items-end">
            <li className="font-bold text-white">
              <Link href="/collection">Collection</Link>
            </li>
            <li className="font-bold text-white">
              <Link href="/story">Our Story</Link>
            </li>
          </ul>
          <div className="flex gap-x-5 items-end md:gap-x-10">
            <div className="text-black font-semibold relative rounded-sm font-heading">
              <div className=" text-xs absolute bg-white rounded-full px-1  text-black -top-2 -right-2">
                {cartState.items && cartState.items.length}
              </div>
              <CartIcon />
            </div>
            <ProfileIcon />
          </div>
        </div>
        <h1 className="font-heading text-white text-7xl justify-self-center self-center  lg:text-8xl xl:text-9xl">
          ShalTan
        </h1>
        <p className=" text-white  text-center text-xs lg:text-base md:text-sm">
          Step into a world where style meets comfort effortlessly.
        </p>
        <p className=" text-white text-center text-xs lg:text-base md:text-sm">
          Explore our curated collection of footwear, crafted for the fashion-
          <br />
          forward and designed to make every step a statement in both aesthetics
          and ease.
        </p>
        <button className="bg-white text-black py-4 px-14 rounded-full font-semibold self-start justify-self-center text-lg transform transition-transform hover:translate-y-[-5px] mt-2 xl:mt-0">
          <Link href="/collection">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};
