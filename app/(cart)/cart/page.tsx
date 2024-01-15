"use client";
import { useState } from "react";
import { DeliveryInfo } from "../_component/DeliveryInfo";
import { OrderSummary } from "../_component/OrderSummary";
import ShoppingCart from "../_component/ShoppinCart";
import Link from "next/link";

const Cart = () => {
  const [deliveryInfo, setDeliveryInfo] = useState<any>();

  const deliveryInfoChangeHandler = (newDeliveryInfo: any) => {
    setDeliveryInfo(newDeliveryInfo);
  };

  return (
    <div className="h-full">
      <p className="text-sm text-center p-1 font-bold text-red-500">
        Please ensure to review your delivery information and thoroughly check
        your shopping cart for all items before proceeding to checkout.
        <button className="bg-color1 px-2 rounded text-white text-sm font-semibold ml-5 font-heading">
          <Link href="/"> Home</Link>
        </button>
      </p>
      <div className="h-cartPage w-full px-3 lg:w-4/5 my-auto md:m-auto grid grid-rows-2 grid-cols-5 gap-3 ">
        <ShoppingCart />
        <DeliveryInfo onChange={deliveryInfoChangeHandler} />
        <OrderSummary deliveryInfo={deliveryInfo} />
      </div>
    </div>
  );
};

export default Cart;
