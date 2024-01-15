"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useShoeContext } from "@/app/context/shoesContext";
import { useCartContext } from "@/app/context/cartContext";
import { useParams } from "next/navigation";

import { CartIcon } from "@/components/ui/CartIcon";

interface Image {
  id: number;
  url: string;
  shoeId: number;
}
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: number;
  img: string;
  stock: number;
};

interface Size {
  id: number;
  stock: number;
  shoeId: number;
  value: string;
}
async function getShoeImage(id: string): Promise<Image[]> {
  const res = await fetch(`/api/shoeImage/${id}`);
  if (!res.ok) {
    console.error(res);
    return [];
  }
  return res.json();
}
async function getSize(id: string): Promise<Size[]> {
  const res = await fetch(`/api/size/${id}`);
  if (!res.ok) {
    console.error(res);
    return [];
  }
  return res.json();
}

const Details: React.FC = () => {
  const shoeContext = useShoeContext();
  const cartContext = useCartContext();
  const params = useParams<{ detailsId: string }>();
  const { state } = shoeContext || {};
  const { cartState, cartDispatch } = cartContext || {};
  const [images, setImages] = useState<Image[]>([]);
  const [count, setCount] = useState<number>(1);
  const [sizes, setSizes] = useState<Size[]>();
  const [size, setSize] = useState<number>(39);
  const [id, setId] = useState<number>();
  const sizesArray = sizes?.map((size) => size.value);
  const stock = sizes?.map((size) => size.stock) || [];
  const [stockIndex, setStockIndex] = useState<number>(0);

  useEffect(() => {
    const detailsId = params?.detailsId;

    if (detailsId) {
      setId(+detailsId);

      const fetchData = async () => {
        const images = await getShoeImage(detailsId);
        setImages(images);
        const sizes = await getSize(detailsId);
        setSizes(sizes);
      };
      fetchData();
    }
  }, [params?.detailsId]);
  console.log(images, "images");
  const shoes = state?.shoes;
  const selectedShoe = shoes?.filter((shoe) => shoe.id === id);
  const suggestedShoes = shoes?.filter(
    (shoe) => selectedShoe && shoe.type === selectedShoe[0]?.type
  );
  const correctedSuggestedShoes = suggestedShoes
    ?.filter((shoe) => selectedShoe && shoe.id !== selectedShoe[0]?.id)
    .slice(1);
  console.log(correctedSuggestedShoes);
  const imageArray = [
    "https://github.com/SPyaePhyoThu/Images/blob/master/Vans%20suede/vanssuede2.png?raw=true",
    "https://github.com/SPyaePhyoThu/Images/blob/master/Vans%20suede/vanssuede1.png?raw=true",
    "https://github.com/SPyaePhyoThu/Images/blob/master/Vans%20suede/vanssuede3.png?raw=true",
  ];

  const addToCartHandler = (id: number) => {
    const shoe = state?.shoes.find((shoe) => shoe.id === id);
    if (!cartContext || !cartDispatch) {
      return;
    }

    let cartItem: CartItem | null = null;

    if (shoe) {
      cartItem = {
        id: shoe.id,
        name: shoe.name,
        price: shoe.price,
        quantity: count,
        size: size,
        img: shoe.image,
        stock: stock?.[stockIndex],
      };
    }
    cartDispatch({
      type: "ADD_TO_CART",
      payload: cartItem,
    });
  };

  return (
    <div className="h-dvh grid grid-rows-[max-content_1fr]">
      <div className="grid grid-cols-[1fr_max-content_max-content] border-b-4 border-black border-solid mx-10 py-3 gap-5 items-center">
        <h1 className="text-4xl font-heading font-bold ">ShalTan</h1>
        <div className="text-black font-semibold relative rounded-sm font-heading">
          <div className=" text-xs absolute bg-color1 rounded-full px-1  text-white -top-2 -right-2">
            {cartState.items && cartState.items.length}
          </div>
          <CartIcon className="text-black" />
        </div>
        <button className="bg-color1 rounded-sm px-4 py-1 text-white font-semibold">
          <Link href="/">Home </Link>
        </button>
      </div>
      <div className="w-4/5 mx-auto py-5 grid grid-cols-[max-content_1fr_1fr] gap-10">
        <div className="h-full grid items-center gap-3">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt="shoe pic"
              width={95}
              height={100}
              className="rounded-sm border border-solid border-black"
            />
          ))}
        </div>
        {selectedShoe &&
          selectedShoe.map((shoe) => (
            <div
              key={shoe.id}
              className="grid grid-rows-[1fr_min-content_min-content] justify-items-center gap-1 relative"
            >
              {shoe.type === "general" ? (
                ""
              ) : (
                <div className="h-28 w-28 rounded-full bg-color2 absolute right-0  translate-y-1/4">
                  <p className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-black">
                    {shoe.type}
                  </p>
                </div>
              )}

              <Image
                src={shoe.image}
                width={400}
                height={100}
                alt="shoe pic"
                className="rounded-sm self-center "
              />
              <h1 className="font-heading text-2xl font-bold">{shoe.name}</h1>
              <p className="pb-10">Price : {shoe.price}$</p>
            </div>
          ))}
        <div className="pl-3 h-details grid  gap-4">
          <div className="self-end">
            <h1 className="font-heading font-bold py-2">
              Size Chart
              <span className="text-red-500">
                (Only {stock?.[stockIndex ?? 0]} stocks left)
              </span>
            </h1>

            <div className="grid grid-cols-8 w-4/5 text-sm">
              {" "}
              {sizesArray?.map((sizeArray, index) => {
                return (
                  <button
                    key={sizeArray}
                    onClick={() => {
                      setSize(+sizeArray);
                      setStockIndex(index);
                    }}
                    className={`${
                      size === +sizeArray ? "bg-color1 text-white" : ""
                    } w-3/4 text-center rounded-sm`}
                  >
                    {sizeArray}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="self-end">
            <h1 className="py-2 font-bold">Items Quantity</h1>
            <div className="grid grid-cols-3 w-28 gap-2 justify-self-center">
              <button
                onClick={() => {
                  setCount((prev) => prev - 1);
                }}
                className="bg-color1 rounded-sm text-white w-full text-xl"
                disabled={count === 1}
              >
                -
              </button>
              <input
                type="text"
                className="w-full text-center"
                value={count}
                onChange={(e) => {
                  setCount(Number(e.target.value));
                }}
              />
              <button
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
                className="bg-color1  rounded-sm text-white w-full text-xl"
                disabled={count === 10}
              >
                +
              </button>
            </div>
          </div>
          {selectedShoe &&
            selectedShoe.map((shoe) => (
              <div key={shoe.id} className="self-end">
                <div className="self-end">
                  <h1 className="py-2 font-bold">Total Price</h1>

                  <p key={shoe.id} className="text-sm">
                    {shoe.price * count}$
                  </p>
                </div>
                <button
                  onClick={() => addToCartHandler(shoe.id)}
                  className="w-full text-white text-xl bg-color1 h-10 rounded-sm self-center"
                >
                  {cartState.items.find((item) => item.id === id)
                    ? "\u2713"
                    : "Add to Cart"}
                </button>
              </div>
            ))}

          <div className="gird grid-rows[min-content_1fr] gap-3">
            <h1 className="font-bold py-4">You might also like</h1>

            <ul className="grid grid-cols-3 gap-1">
              {correctedSuggestedShoes &&
                correctedSuggestedShoes.map((shoe) => (
                  <li key={shoe.id} className="grid justify-items-center gap-2">
                    <Link href={`/details/${shoe.id}`}>
                      <Image
                        onClick={() => {
                          setId(shoe.id);
                        }}
                        src={shoe.image}
                        alt="shoe pic"
                        width={100}
                        height={100}
                        className="rounded-sm border border-solid border-black"
                      />
                    </Link>
                    <h1 className="text-xs text-center font-bold">
                      {shoe.name}
                    </h1>
                    <p className="text-xs">Price : {shoe.price}$</p>
                    <button
                      onClick={() => addToCartHandler(shoe.id)}
                      className=" w-addButton bg-color1 text-white rounded-sm"
                    >
                      {cartState.items.find((item) => item.id === shoe.id)
                        ? "\u2713"
                        : "+"}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
