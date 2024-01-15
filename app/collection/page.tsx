"use client";
import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/components/ui/CartIcon";
import { useEffect, useState } from "react";
import { useShoeContext } from "@/app/context/shoesContext";
import { useCartContext } from "../context/cartContext";
import { useSearchParams } from "next/navigation";

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
  const res = await fetch(`https://shaltan.vercel.app/api/shoe`);
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
  const ShoeContext = useShoeContext();
  const CartContext = useCartContext();
  const { state, dispatch } = ShoeContext || {};
  const { cartState, cartDispatch } = CartContext || {};

  const searchParams = useSearchParams();

  // const dataArray = [
  //   {
  //     id: 1001,
  //     name: "Air Jordan 1 Retro High OG",
  //     brand: "nike",
  //     type: "newArrival",
  //     price: 209.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/air-jordan-1-retro-high-og/air-jordan-1-retro-high-og.jpg?raw=true",
  //   },
  //   {
  //     id: 1002,
  //     name: "Nike Dunk Low",
  //     brand: "nike",
  //     type: "bestSeller",
  //     price: 84.47,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/airnikedunklow/nikeairdunklow.png?raw=true",
  //   },
  //   {
  //     id: 1003,
  //     name: "Nike Pegasus Trail 4 GORE-TEX",
  //     brand: "nike",
  //     type: "sale",
  //     price: 159.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Nike%20Pegasus%20Trail%204%20GORE-TEX/NikePegasusTrail4GORE-TEX.png?raw=true",
  //   },
  //   {
  //     id: 1004,
  //     name: "Nike SB Zoom Blazer Low Pro GT",
  //     brand: "nike",
  //     type: "classic",
  //     price: 84.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Nike%20SB%20Zoom%20Blazer%20Low%20Pro%20GT/NikeSBZoomBlazerLowProGT.png?raw=true",
  //   },
  //   {
  //     id: 1005,
  //     name: "NikeCourt Air Zoom Vapor Pro 2",
  //     brand: "nike",
  //     type: "general",
  //     price: 100.97,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/NikeCourt%20Air%20Zoom%20Vapor%20Pro%202/NikeCourtAirZoomVaporPro2.png?raw=true",
  //   },
  //   {
  //     id: 2001,
  //     name: "Ultra Boost 1.0",
  //     brand: "adidas",
  //     type: "newArrival",
  //     price: 209.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/ULTRABOOST/ultraboost.png?raw=true",
  //   },
  //   {
  //     id: 2002,
  //     name: "NMD_G1",
  //     brand: "adidas",
  //     type: "bestSeller",
  //     price: 139.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/NMD/NMD_G1.png?raw=true",
  //   },
  //   {
  //     id: 2003,
  //     name: "FORUM 84 LOW AEC SHOES",
  //     brand: "adidas",
  //     type: "sale",
  //     price: 104.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/FORUM%2084%20LOW%20AEC%20SHOES/Forum.png?raw=true",
  //   },
  //   {
  //     id: 2004,
  //     name: "Stan smith",
  //     brand: "adidas",
  //     type: "classic",
  //     price: 100.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Nike%20SB%20Zoom%20Blazer%20Low%20Pro%20GT/NikeSBZoomBlazerLowProGT.png?raw=true",
  //   },
  //   {
  //     id: 2005,
  //     name: "Pureboost 23",
  //     brand: "adidas",
  //     type: "general",
  //     price: 139.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/pureboost/Pureboost.png?raw=true",
  //   },
  //   {
  //     id: 3001,
  //     name: "Chuck Taylor All Star",
  //     brand: "converse",
  //     type: "newArrival",
  //     price: 65.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/chuck%20taylor%20all%20star/chucktaylor.jpg?raw=true",
  //   },
  //   {
  //     id: 3002,
  //     name: "Star Player 78",
  //     brand: "converse",
  //     type: "bestSeller",
  //     price: 70.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/StarPlayer/starplayer.jpg?raw=true",
  //   },
  //   {
  //     id: 3003,
  //     name: "Chuck 70 Vintage Canvas",
  //     brand: "converse",
  //     type: "classic",
  //     price: 85.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/chuck%2070%20vintage%20canvas/70vintage.jpg?raw=true",
  //   },
  //   {
  //     id: 3004,
  //     name: "Chuck Taylor All Star Low",
  //     brand: "converse",
  //     type: "sale",
  //     price: 155.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/all%20star%20low/allstarlow.jpg?raw=true",
  //   },
  //   {
  //     id: 3005,
  //     name: "One Star Pro",
  //     brand: "converse",
  //     type: "general",
  //     price: 80.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/OnestarPro/onestar.jpg?raw=true",
  //   },
  //   {
  //     id: 4001,
  //     name: "Suede Classic",
  //     brand: "puma",
  //     type: "newArrival",
  //     price: 75.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/suede/suede.png?raw=true",
  //   },
  //   {
  //     id: 4002,
  //     name: "CA Pro OW",
  //     brand: "puma",
  //     type: "bestSeller",
  //     price: 109.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/CA%20Pro%20OW/CA-Pro-OW.png?raw=true",
  //   },
  //   {
  //     id: 4003,
  //     name: "Roma Classic Gum",
  //     brand: "puma",
  //     type: "classic",
  //     price: 70.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Roma%20Classic%20Gum/Roma-Classic-Gum.png?raw=true",
  //   },
  //   {
  //     id: 4004,
  //     name: "Clyde Varsity",
  //     brand: "puma",
  //     type: "sale",
  //     price: 109.99,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/ClydeVarsity/Clyde-Varsity.png?raw=true",
  //   },
  //   {
  //     id: 5001,
  //     name: "Old skool V Suede Canvas",
  //     brand: "vans",
  //     type: "newArrival",
  //     price: 75.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Vans%20suede/vanssuede.png?raw=true",
  //   },
  //   {
  //     id: 5002,
  //     name: "Old skool",
  //     brand: "vans",
  //     type: "bestSeller",
  //     price: 70.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Old%20Skool%20Shoe/vansOldSkool.png?raw=true",
  //   },
  //   {
  //     id: 5003,
  //     name: "Classic Slip-on",
  //     brand: "vans",
  //     type: "classic",
  //     price: 55.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Classic%20Slip-on/classic.png?raw=true",
  //   },
  //   {
  //     id: 5004,
  //     name: "Old skool Primary Check",
  //     brand: "vans",
  //     type: "sale",
  //     price: 75.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Old%20school%20primary%20check%20shoe/OldSchoolPrimaryCheck.png?raw=true",
  //   },
  //   {
  //     id: 5005,
  //     name: "Authentic",
  //     brand: "vans",
  //     type: "general",
  //     price: 55.0,
  //     img: "https://github.com/SPyaePhyoThu/Images/blob/master/Authentic/authentic.png?raw=true",
  //   },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      const shoeData = await getShoe();
      console.log(shoeData);
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
  const addToCartHandler = (id: number) => {
    const selectedShoe = state?.shoes.find((shoe) => shoe.id === id);

    if (!CartContext || !cartDispatch || !dispatch) {
      return;
    }

    let cartItem: CartItem | null = null;

    if (selectedShoe) {
      cartItem = {
        id: selectedShoe.id,
        name: selectedShoe.name,
        price: selectedShoe.price,
        quantity: 1,
        size: 39,
        img: selectedShoe.image,
        stock: 5,
      };
    }
    cartDispatch({
      type: "ADD_TO_CART",
      payload: cartItem,
    });
  };

  return (
    <div className="h-full w-full grid gap-4 grid-rows-[min-content_min-content_min-content_1fr]">
      <div className="bg-black relative w-full">
        <h1 className="text-5xl font-heading font-bold text-center text-white">
          ShalTan
        </h1>
        <div className="text-black font-semibold absolute right-3 top-4 px-2 rounded-sm font-heading">
          <div className="text-xs absolute bg-color1 rounded-full px-1  text-black -top-2 right-0">
            {cartState.items && cartState.items.length}
          </div>
          <CartIcon className="text-black" />
        </div>
        <button className="text-black font-semibold absolute left-3 top-3 bg-color1 px-2 rounded-sm font-heading">
          <Link href="/">Home</Link>
        </button>
      </div>
      <div className="px-10">
        <h3 className="text-2xl font-heading font-bold">Collections</h3>
        <p className="text-sm py-2 indent-5">
          Welcome to our exclusive shoe collection page, where every step is a
          statement and every pair tells a unique story of style and
          craftsmanship. Explore a curated selection of footwear that transcends
          trends, showcasing a fusion of comfort, elegance, and on-trend
          designs. From casual sneakers to sophisticated shoes, our collection
          caters to diverse tastes and occasions. Immerse yourself in a world of
          quality materials, intricate details, and a palette of colors that
          define both classic and contemporary fashion. Whether you are seeking
          the perfect pair for a casual day out or a special event, our shoe
          collection is a celebration of individuality, allowing you to stride
          with confidence and express your personal fashion journey. Step into a
          realm where every shoe is more than an accessory,it is a reflection of
          your distinctive style.
        </p>
      </div>
      <div className="px-16 py-2 grid grid-cols-2">
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

        <p className="font-semibold pr-10 justify-self-end">
          Result: {state?.filteredShoes.length}
        </p>
      </div>
      <div
        className={showfilter ? "px-10 grid grid-cols-[0.3fr_1fr] " : "px-10 "}
      >
        {showfilter && (
          <div className="grid px-5  gap-3  font-bold content-start">
            <div>
              <button
                style={{
                  color: activeFilter === "all" ? "#43655A" : "",
                  fontSize: activeFilter === "all" ? "1.1rem" : "",
                }}
                onClick={displayedAllShoes}
              >
                All
              </button>
            </div>
            <div className="grid grid-cols-2 ">
              <p>Brands</p>
              <button
                onClick={() => setShowBrand((prev) => !prev)}
                className="justify-self-center"
              >
                {showBrand ? "-" : "+"}
              </button>
            </div>
            {showBrand && (
              <div className="text-sm font-semibold grid justify-items-start">
                <button
                  onClick={() => brandFilterHandler("nike")}
                  style={{
                    color: activeFilter === "nike" ? "#43655A" : "",
                    fontSize: activeFilter === "nike" ? "1.1rem" : "",
                  }}
                >
                  Nike
                </button>
                <button
                  onClick={() => brandFilterHandler("adidas")}
                  style={{
                    color: activeFilter === "adidas" ? "#43655A" : "",
                    fontSize: activeFilter === "adidas" ? "1.1rem" : "",
                  }}
                >
                  Adidas
                </button>
                <button
                  onClick={() => brandFilterHandler("converse")}
                  style={{
                    color: activeFilter === "converse" ? "#43655A" : "",
                    fontSize: activeFilter === "converse" ? "1.1rem" : "",
                  }}
                >
                  Converse
                </button>
                <button
                  onClick={() => brandFilterHandler("puma")}
                  style={{
                    color: activeFilter === "puma" ? "#43655A" : "",
                    fontSize: activeFilter === "puma" ? "1.1rem" : "",
                  }}
                >
                  puma
                </button>
                <button
                  onClick={() => brandFilterHandler("vans")}
                  style={{
                    color: activeFilter === "vans" ? "#43655A" : "",
                    fontSize: activeFilter === "vans" ? "1.1rem" : "",
                  }}
                >
                  Vans
                </button>
              </div>
            )}
            <div className="grid grid-cols-2">
              <p>Search by Price</p>
              <button
                onClick={() => setShowPrices((prev) => !prev)}
                className="justify-self-center"
              >
                {showPrices ? "-" : "+"}
              </button>
            </div>
            {showPrices && (
              <div className="text-sm font-semibold grid justify-items-start">
                <button
                  onClick={() => priceFilterHandler("0-100$")}
                  style={{
                    color: activeFilter === "0-100$" ? "#43655A" : "",
                    fontSize: activeFilter === "0-100$" ? "1.1rem" : "",
                  }}
                >
                  0-100$
                </button>
                <button
                  onClick={() => priceFilterHandler("100-200$")}
                  style={{
                    color: activeFilter === "100-200$" ? "#43655A" : "",
                    fontSize: activeFilter === "100-200$" ? "1.1rem" : "",
                  }}
                >
                  100-200$
                </button>
                <button
                  onClick={() => priceFilterHandler("200-300$")}
                  style={{
                    color: activeFilter === "200-300$" ? "#43655A" : "",
                    fontSize: activeFilter === "200-300$" ? "1.1rem" : "",
                  }}
                >
                  200-300$
                </button>
              </div>
            )}
            <button
              onClick={() => typeFilterHandler("newArrival")}
              className="justify-self-start"
              style={{
                color: activeFilter === "newArrival" ? "#43655A" : "",
                fontSize: activeFilter === "newArrival" ? "1.1rem" : "",
              }}
            >
              New Arrivals
            </button>
            <button
              onClick={() => typeFilterHandler("sale")}
              className="justify-self-start"
              style={{
                color: activeFilter === "sale" ? "#43655A" : "",
                fontSize: activeFilter === "sale" ? "1.1rem" : "",
              }}
            >
              Sale Items
            </button>
            <button
              onClick={() => typeFilterHandler("bestSeller")}
              className="justify-self-start"
              style={{
                color: activeFilter === "bestSeller" ? "#43655A" : "",
                fontSize: activeFilter === "bestSeller" ? "1.1rem" : "",
              }}
            >
              Best Sellers
            </button>
            <button
              onClick={() => typeFilterHandler("classic")}
              className="justify-self-start"
              style={{
                color: activeFilter === "classic" ? "#43655A" : "",
                fontSize: activeFilter === "classic" ? "1.1rem" : "",
              }}
            >
              Classics
            </button>
          </div>
        )}

        <div className="h-full grid grid-rows-[1fr_min-content] gap-5">
          <div className="w-full grid grid-cols-5 gap-3 grid-rows-[1fr,1fr,1fr]">
            {currentShoes &&
              currentShoes.map((shoe) => (
                <div
                  key={shoe.id}
                  id={`${shoe.id}`}
                  className="grid justify-items-center gap-1 "
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

                  <h1 className="text-xs font-bold">{shoe.name}</h1>

                  <p className="text-xs">Price : {shoe.price} $</p>
                  <button
                    onClick={() => addToCartHandler(shoe.id)}
                    className=" w-addButton bg-color1 text-white rounded-sm"
                  >
                    {cartState.items.find((item) => item.id === shoe.id)
                      ? "\u2713"
                      : "+"}
                  </button>
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
      </div>
    </div>
  );
};

export default Collection;
