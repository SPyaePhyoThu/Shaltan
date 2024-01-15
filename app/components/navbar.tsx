"use client";
import Link from "next/link";
import { CartIcon } from "@/components/ui/CartIcon";
import { ProfileIcon } from "@/components/ui/ProfileIcon";
import { useCartContext } from "@/app/context/cartContext";

export const Navbar = () => {
  const cartContext = useCartContext();
  const { cartState } = cartContext || {};
  return (
    <div className="w-full pt-1 flex justify-between px-5 ">
      <h1 className="font-heading text-white text-2xl ">ShalTan</h1>
      <ul className="flex gap-x-6 items-end">
        <li className="font-bold text-white">
          <Link href="/collection">Collection</Link>
        </li>
        <li className="font-bold text-white">
          <Link href="/story">Our Story</Link>
        </li>
      </ul>
      <div className="flex gap-x-10 items-end ">
        <div className="text-black font-semibold relative rounded-sm font-heading">
          <div className=" text-xs absolute bg-white rounded-full px-1  text-black -top-2 -right-2">
            {cartState.items && cartState.items.length}
          </div>
          <CartIcon />
        </div>
        <ProfileIcon />
      </div>
    </div>
  );
};
