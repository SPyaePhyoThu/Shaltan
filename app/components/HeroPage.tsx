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
    <div className="pt-2 px-2 sm:px-3 h-smallHeroPage md:h-dvh  bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="relative w-full h-full bg-black bg-opacity-70 grid grid-rows-[min-content,0.8fr,0.5fr,0.2fr,.4fr]">
        <Alert></Alert>
        <div className="w-full pt-1 flex justify-between sm:px-2 md:px-5  items-center">
          <h1 className="font-heading text-white text-xl md:text-2xl ">
            ShalTan
          </h1>
          <ul className="flex gap-x-2 md:gap-x-6 items-end">
            <li className="font-bold text-xs md:text-base text-white">
              <Link href="/collection">Collection</Link>
            </li>
            <li className="font-bold text-xs md:text-base text-white">
              <Link href="/story">Our Story</Link>
            </li>
          </ul>
          <div className="flex gap-x-2 sm:gap-x-5 items-end md:gap-x-10">
            <div className="text-black font-semibold relative rounded-sm font-heading">
              <div className=" text-xs absolute bg-white rounded-full px-1  text-black -top-2 -right-2">
                {cartState.items && cartState.items.length}
              </div>
              <CartIcon />
            </div>
            <ProfileIcon />
          </div>
        </div>
        <h1 className="font-heading text-white text-7xl justify-self-center self-end  lg:text-8xl xl:text-9xl">
          ShalTan
        </h1>
        <p className=" text-white w-5/6 sm:w-heading py-2 justify-self-center text-center font-semibold text-xs lg:text-base md:text-sm">
          Step into a world where style meets comfort effortlessly. Explore our
          curated collection of footwear, crafted for the fashion- forward and
          designed to make every step a statement in both aesthetics and ease.
        </p>
        <button className="bg-white text-black py-2 md:py-4 px-10 md:px-14 rounded-full font-semibold self-start justify-self-center text-lg transform transition-transform hover:translate-y-[-5px] mt-2 xl:mt-0">
          <Link href="/collection">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};
