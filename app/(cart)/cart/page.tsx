"use client";
import { useState } from "react";

import { OrderSummary } from "../_component/OrderSummary";
import ShoppingCart from "../_component/ShoppinCart";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="h-full">
      <p className="text-sm text-center p-1 font-bold text-red-500">
        Please ensure to review your delivery information and thoroughly check
        your shopping cart for all items before proceeding to checkout.
        <button className="bg-color1 px-2 rounded text-white text-sm font-semibold ml-5 font-heading">
          <Link href="/"> Home</Link>
        </button>
      </p>
      <div className="h-cartPage w-full px-3 lg:w-cart my-auto md:m-auto grid grid-rows-[1fr_max-content] lg:grid-rows-1 lg:grid-cols-[1fr_0.6fr] gap-3 ">
        <ShoppingCart />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
