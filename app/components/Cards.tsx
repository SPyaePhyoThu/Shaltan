import Image from "next/image";
import Link from "next/link";

import adidas from "../../public/images/adidas.png";
import nikeAir from "../../public/images/NikeAirJordan.png";
import nikeAirMax from "../../public/images/nike-air-max.png";
import vans from "../../public/images/Vans.png";

export const Card1 = () => {
  return (
    <div className=" w-smallCard md:w-card my-6 md:my-10 h-card rounded-xl bg-color5 grid grid-rows-[1fr_.7fr] md:grid-rows-1 md:grid-cols-2">
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center gap-1">
        <h3 className="font-heading text-center text-black text-2xl md:text-3xl self-end">
          Best Seller
        </h3>
        <p className="text-black text-center text-sm px-2 md:px-0 pt-2 lg:px-4">
          Discover the favorites of the season
        </p>
        <button className="bg-white text-black py-2 px-8 mt-1 rounded-3xl font-semibold self-start justify-self-center transform transition-transform hover:translate-y-[-5px]">
          <Link href="/collection?type=bestSeller">Shop Now</Link>
        </button>
      </div>
      <div className="w-1/2 lg:w-auto self-center justify-self-center">
        <Image
          src={adidas}
          alt="shoe"
          width={300}
          height={100}
          className="rotate-12"
        />
      </div>
    </div>
  );
};
export const Card2 = () => {
  return (
    <div className="w-smallCard md:w-card my-6 md:my-10 h-card rounded-xl bg-color2 grid grid-rows-[1fr_.7fr] md:grid-rows-1 md:grid-cols-2">
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center ">
        <h3 className="font-heading text-center text-black text-2xl md:text-3xl self-end">
          New Arrivals
        </h3>
        <p className="text-black text-center text-sm px-2 md:px-0 pt-2 lg:px-8">
          Unveiling the latest arrivals!
        </p>
        <button className="bg-white text-black py-2 px-8 rounded-3xl font-semibold self-start justify-self-center transform transition-transform hover:translate-y-[-5px] ">
          <Link href="/collection?type=newArrival">Shop Now</Link>
        </button>
      </div>
      <div className="w-1/2 lg:w-auto self-center justify-self-center">
        <Image src={nikeAir} alt="shoe" width={270} height={180} />
      </div>
    </div>
  );
};
export const Card3 = () => {
  return (
    <div className="w-smallCard md:w-card my-6 md:my-10 h-card rounded-xl bg-black grid grid-rows-[0.7fr_1fr] md:grid-rows-1 md:grid-cols-2">
      <div className="w-1/2 lg:w-auto self-center justify-self-center">
        <Image
          src={nikeAirMax}
          alt="shoe"
          width={250}
          height={200}
          className="transform scale-x-[-1]"
        />
      </div>
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center ">
        <h3 className="font-heading text-center text-white text-xl md:text-3xl self-end lg:text-xl pr-1">
          Get Discount Today!
        </h3>
        <p className="text-white text-sm px-8 pt-2">Up To 50%</p>
        <button className="bg-white text-black py-2 px-8 rounded-3xl font-semibold self-start justify-self-center transform transition-transform hover:translate-y-[-5px]">
          <Link href="/collection?type=sale">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};
export const Card4 = () => {
  return (
    <div className="w-smallCard md:w-card my-6 md:my-10 h-card rounded-xl bg-color1 grid grid-rows-[1fr_.7fr] md:grid-rows-1 md:grid-cols-2">
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center ">
        <h3 className="font-heading text-center text-black text-xl sm:text-2xl md:text-3xl self-end">
          Classical Shoes
        </h3>
        <p className="text-black text-center text-sm px-4 md:px-8 pt-2">
          Check out our classical shoes collection
        </p>
        <button className="bg-white text-black py-2 px-8 rounded-3xl font-semibold self-start justify-self-center transform transition-transform hover:translate-y-[-5px]">
          <Link href="/collection?type=classic">Shop Now</Link>
        </button>
      </div>
      <div className="w-1/2 lg:w-auto self-center justify-self-center">
        <Image src={vans} alt="shoe" width={300} height={180} />
      </div>
    </div>
  );
};
