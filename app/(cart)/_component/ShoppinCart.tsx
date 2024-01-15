"use client";
import Image from "next/image";
import { useCartContext } from "@/app/context/cartContext";
import { useState, useEffect } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  img: string;
  stock: number;
};

interface CartItemProps {
  item: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  console.log(quantity);

  const cartContext = useCartContext();
  const { cartDispatch } = cartContext || {};

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      console.log(quantity);
      const updatedItem = { ...item, quantity: quantity - 1 };
      cartDispatch({ type: "ADD_TO_CART", payload: updatedItem });
    } else {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: item.id });
    }
  };
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    console.log(item, "item");
    const updatedItem = { ...item, quantity: quantity + 1 };
    cartDispatch({ type: "ADD_TO_CART", payload: updatedItem });
  };
  const sizehandler = (id: number, value: number) => {
    cartDispatch({ type: "UPDATE_ITEM_SIZE", payload: { id, newSize: value } });
  };

  return (
    <div key={item.id} className="grid grid-cols-[1fr_.5fr_.3fr] items-center">
      <div className="grid grid-cols-[max-content,1fr] items-center gap-0 md:gap-2">
        <Image
          src={item.img}
          alt="shoe pic"
          width={120}
          height={100}
          className="rounded-sm"
        />
        <div className="text-sm">
          <p>{item.name}</p>
          <label htmlFor="size" className="inline-block">
            Size -
          </label>
          <input
            id="size"
            className="inline-block w-6 text-center rounded-sm bg-color1 border border-solid border-black"
            type="text"
            value={item.size}
            onChange={(e) => sizehandler(item.id, +e.target.value)}
          />
          <p className="inline-block">(39-45)</p>
          <p>ID - {item.id}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 w-28 gap-0 md:gap-2 justify-self-center">
        <button
          onClick={handleDecrease}
          className="bg-color1 rounded-sm text-white w-full text-xl"
        >
          -
        </button>
        <input
          type="text"
          className="w-full text-center"
          value={quantity}
          onChange={(e) => e.preventDefault()}
        />
        <button
          onClick={handleIncrease}
          className="bg-color1  rounded-sm text-white w-full text-xl"
        >
          +
        </button>
      </div>
      <p className="text-sm justify-self-center">
        {(item.price * quantity).toFixed(2)}
      </p>
    </div>
  );
};

const ShoppingCart: React.FC = () => {
  const cartContext = useCartContext();
  const { cartState } = cartContext || {};
  console.log(cartState.items);

  // Initialize total quantity state
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  // Update total quantity whenever the cart items change
  useEffect(() => {
    if (cartState.items) {
      const newTotalQuantity = cartState.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setTotalQuantity(newTotalQuantity);
    }
  }, [cartState.items]);

  return (
    <div className=" row-span-2 col-span-3 border-black border-solid border rounded py-2 px-1 md:px-4 grid grid-rows-[min-content_min-content_1fr_min-content]">
      <h1 className="font-heading text-xl font-bold pb-2">Shopping Cart</h1>
      <div className="px-1 pr-0 md:pr-5 grid grid-cols-[1fr,.5fr,.3fr]">
        <h3 className="font-heading">Products</h3>
        <h3 className="font-heading justify-self-center">Quantity</h3>
        <h3 className="font-heading justify-self-center">Price</h3>
      </div>
      <div className="grid gap-2 h-full content-start overflow-scroll overflow-x-hidden">
        {cartState.items &&
          cartState.items.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <div className="grid grid-cols-[1fr_max-content] items-center text-xs pt-2 font-bold">
        <p className="">Total Quantity</p>
        <p className="pr-10"> {totalQuantity} items</p>
      </div>
    </div>
  );
};
export default ShoppingCart;
