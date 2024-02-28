"use client";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/components/ui/CartIcon";
import { use, useEffect, useState } from "react";
import { useShoeContext } from "@/app/context/shoesContext";
import { useCartContext } from "../context/cartContext";
import { useSearchParams } from "next/navigation";
import Loading from "../components/Loading";

interface Shoe {
  id: number;
  name: string;
  brand: string;
  type: string;
  price: number;
  image: string;
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

async function getShoe(): Promise<Shoe[]> {
  const res = await fetch(`/api/shoe`);
  if (!res.ok) {
    console.error(res);
    return [];
  }
  return res.json();
}

const Collection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showfilter, setShowfilter] = useState<boolean>(true);
  const [showBrand, setShowBrand] = useState<boolean>(false);
  const [showPrices, setShowPrices] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [shoesArray, setShoesArray] = useState<Shoe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const ShoeContext = useShoeContext();
  const CartContext = useCartContext();
  const { state, dispatch } = ShoeContext || {};
  const { cartState, cartDispatch } = CartContext || {};

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const shoeData = await getShoe();
      setLoading(false);
      setShoesArray(shoeData);
      if (ShoeContext && dispatch) {
        dispatch({ type: "SET_SHOES", payload: shoeData });
      }
      if (!ShoeContext || !dispatch) {
        return;
      }

      const brandName = searchParams?.get("brand");
      const type = searchParams?.get("type");

      if (brandName) {
        dispatch({ type: "FILTER_SHOES_BRAND", payload: brandName });
        setActiveFilter(brandName);
      } else if (type) {
        dispatch({ type: "FILTER_SHOES_TYPE", payload: type });
        setActiveFilter(type);
      }
    };

    fetchData();
  }, []);
  const shoes = state?.filteredShoes || [];
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentShoes = shoes.slice(startIndex, endIndex);
  const totalPages = Math.ceil(shoes.length / itemsPerPage);

  //click handler
  const previousClickHandler = () => {
    setCurrentPage((prevpage) => prevpage - 1);
  };
  const nextClickHandler = () => {
    setCurrentPage((prevpage) => prevpage + 1);
  };
  const brandFilterHandler = (brandName: string) => {
    if (!ShoeContext || !dispatch) {
      return;
    }
    dispatch({ type: "FILTER_SHOES_BRAND", payload: brandName });
    setActiveFilter(brandName);
  };
  const priceFilterHandler = (price: string) => {
    if (!ShoeContext || !dispatch) {
      return;
    }
    dispatch({ type: "FILTER_SHOES_PRICE", payload: price });
    setActiveFilter(price);
  };
  const typeFilterHandler = (type: string) => {
    if (!ShoeContext || !dispatch) {
      return;
    }
    dispatch({ type: "FILTER_SHOES_TYPE", payload: type });
    setActiveFilter(type);
  };
  const displayedAllShoes = () => {
    if (!ShoeContext || !dispatch) {
      return;
    }
    dispatch({ type: "ALL_SHOES" });
    setActiveFilter("all");
  };

  return (
    <div className="h-full w-full grid gap-4 grid-rows-[min-content_min-content_min-content_1fr]">
      <div className="bg-black relative w-full">
        <h1 className="text-3xl p-2 sm:text-4xl sm:p-0 md:text-5xl  font-heading font-bold text-center text-white">
          ShalTan
        </h1>
        <div className="text-black font-semibold absolute right-3 md:right-5 lg:right-8 top-4 px-3 rounded-sm font-heading">
          <div className="text-xs absolute bg-color1 rounded-full px-1  text-black -top-2 right-0">
            {cartState.items && cartState.items.length}
          </div>
          <CartIcon className="text-black" />
        </div>
        <button className="text-black font-semibold absolute left-3 md:left-5 lg:left-8 top-3 bg-color1 px-2 rounded-sm font-heading">
          <Link href="/">Home</Link>
        </button>
      </div>
      <div className="px-3 md:px-5 lg:px-8">
        <h3 className="text-2xl font-heading font-bold">Collections</h3>
        <p className="text-sm py-2 indent-10 text-justify leading-5">
          Welcome to our exclusive shoe collection page, where every step is a
          statement and every pair tells a unique story of style and
          craftsmanship. Explore a curated selection of footwear that transcends
          trends, showcasing a fusion of comfort, elegance, and on-trend
          designs. From casual sneakers to sophisticated shoes, our collection
          caters to diverse tastes and occasions.
        </p>
      </div>
      <div className="px-3 md:px-5 lg:px-8 py-2 grid grid-cols-2">
        <div className=" font-semibold flex gap-3 items-center">
          <p>Hide filter</p>
          <div className="relative w-7 h-4 rounded-full bg-color1">
            <button
              onClick={() => setShowfilter((prev) => !prev)}
              className={
                showfilter
                  ? "absolute w-4 h-4 rounded-full bg-white left-0 top-0 border border-solid border-color1"
                  : "absolute w-4 h-4 rounded-full bg-white right-0 top-0 border border-solid border-color1"
              }
            ></button>
          </div>
        </div>

        <p className="font-semibold justify-self-end">
          Result: {state?.filteredShoes.length}
        </p>
      </div>
      <div
        className={
          showfilter
            ? "px-3 md:px-5 lg:px-8 grid grid-rows-[max-content_1fr] gap-y-5 sm:gap-y-0 sm:grid-rows-1 sm:grid-cols-[0.4fr_1fr] md:grid-cols-[0.2fr_1fr] gap-2"
            : "px-3 md:px-5 lg:px-8 "
        }
      >
        {showfilter && (
          <div className="grid grid-cols-3 grid-rows-[repeat(3,max-content)] md:grid-cols-1 md:grid-rows-[repeat(7,max-content)] gap-3 font-semibold  items-center  ">
            <button
              className="justify-self-center sm:justify-self-start border-2 border-solid border-black w-full rounded-md sm:border-0 md:justify-self-start sm:w-0"
              style={{
                color: activeFilter === "all" ? "#43655A" : "",
              }}
              onClick={displayedAllShoes}
            >
              All
            </button>
            <div className="grid grid-cols-2 w-full md:justify-self-start border-2 border-solid border-black px-3 sm:px-0 rounded-md sm:border-0 ">
              <p>Brands</p>
              <button
                onClick={() => setShowBrand((prev) => !prev)}
                className="justify-self-end bg-color1 h-6 w-6 rounded-full"
              >
                {showBrand ? "-" : "+"}
              </button>
            </div>
            {showBrand && (
              <div className="text-sm font-semibold grid justify-items-start md:justify-self-start ">
                <button
                  onClick={() => brandFilterHandler("nike")}
                  style={{
                    color: activeFilter === "nike" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  Nike
                </button>
                <button
                  onClick={() => brandFilterHandler("adidas")}
                  style={{
                    color: activeFilter === "adidas" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  Adidas
                </button>
                <button
                  onClick={() => brandFilterHandler("converse")}
                  style={{
                    color: activeFilter === "converse" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  Converse
                </button>
                <button
                  onClick={() => brandFilterHandler("puma")}
                  style={{
                    color: activeFilter === "puma" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  Puma
                </button>
                <button
                  onClick={() => brandFilterHandler("vans")}
                  style={{
                    color: activeFilter === "vans" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  Vans
                </button>
              </div>
            )}
            <div className="grid grid-cols-2 justify-self-center sm:justify-self-start w-full border-2 border-solid border-black px-3 sm:px-0  rounded-md sm:border-0">
              <p>Price</p>
              <button
                onClick={() => setShowPrices((prev) => !prev)}
                className="justify-self-end  bg-color1 w-6 h-6 rounded-full"
              >
                {showPrices ? "-" : "+"}
              </button>
            </div>
            {showPrices && (
              <div className="text-sm font-semibold grid justify-items-start md:justify-self-start">
                <button
                  onClick={() => priceFilterHandler("0-100$")}
                  style={{
                    color: activeFilter === "0-100$" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  0$ - 100$
                </button>
                <button
                  onClick={() => priceFilterHandler("100-200$")}
                  style={{
                    color: activeFilter === "100-200$" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  100$ - 200$
                </button>
                <button
                  onClick={() => priceFilterHandler("200-300$")}
                  style={{
                    color: activeFilter === "200-300$" ? "#43655A" : "",
                  }}
                  className="border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
                >
                  200$ - 300$
                </button>
              </div>
            )}
            <button
              onClick={() => typeFilterHandler("newArrival")}
              className="justify-self-center sm:justify-self-start border-2 border-solid border-black w-full rounded-md sm:border-0 sm:w-fit"
              style={{
                color: activeFilter === "newArrival" ? "#43655A" : "",
              }}
            >
              New Arrivals
            </button>
            <button
              onClick={() => typeFilterHandler("sale")}
              className="justify-self-center sm:justify-self-start w-full border-2 border-solid border-black  rounded-md sm:border-0 sm:w-fit"
              style={{
                color: activeFilter === "sale" ? "#43655A" : "",
              }}
            >
              Sale Items
            </button>
            <button
              onClick={() => typeFilterHandler("bestSeller")}
              className="justify-self-center sm:justify-self-start w-full border-2 border-solid border-black  rounded-md sm:border-0 sm:w-fit"
              style={{
                color: activeFilter === "bestSeller" ? "#43655A" : "",
              }}
            >
              Best Sellers
            </button>
            <button
              onClick={() => typeFilterHandler("classic")}
              className="justify-self-center sm:justify-self-start w-full border-2 border-solid border-black rounded-md sm:border-0 sm:w-fit"
              style={{
                color: activeFilter === "classic" ? "#43655A" : "",
              }}
            >
              Classics
            </button>
          </div>
        )}
        {loading ? (
          <div className="m-auto">
            <Loading />
          </div>
        ) : (
          <div className="h-full grid grid-rows-[1fr_min-content] gap-5">
            <div className="w-full grid gap-3 grid-cols-3 md:grid-cols-5  ">
              {currentShoes &&
                currentShoes.map((shoe) => (
                  <div
                    key={shoe.id}
                    id={`${shoe.id}`}
                    className="grid justify-items-center gap-1 grid-rows-[repeat(3,max-content)]"
                  >
                    <Link href={`/details/${shoe.id}`}>
                      <Image
                        src={shoe.image}
                        alt="shoe pic"
                        width={200}
                        height={100}
                        className="rounded-sm"
                      />
                    </Link>

                    <h1 className="text-sm font-bold text-center">
                      {shoe.name}
                    </h1>

                    <p className="text-sm text-center">
                      Price : {shoe.price} $
                    </p>
                  </div>
                ))}
            </div>

            <div className="grid grid-cols-[1fr_max-content_1fr] items-center gap-5 py-5">
              <button
                disabled={currentPage === 1}
                onClick={previousClickHandler}
                className="bg-color1 rounded-full text-white px-2 py-1 grid justify-self-end"
              >
                &larr;
              </button>
              <span className="text-xs ">
                Page <strong> {currentPage} </strong> of{" "}
                <strong> {totalPages} </strong>
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={nextClickHandler}
                className="bg-color1 rounded-full text-white px-2 py-1 grid justify-self-start
            "
              >
                &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
