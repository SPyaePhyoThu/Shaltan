import Image from "next/image";
import Link from "next/link";

import adidas from "../../../../public/images/adidas.png";
import nikeAir from "../../../../public/images/NikeAirJordan.png";
import nikeAirMax from "../../../../public/images/nike-air-max.png";
import vans from "../../../../public/images/Vans1.png";

export const Card1 = () => {
  return (
    <div className="w-card my-10 h-card rounded-xl bg-color5 flex justify-evenly">
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center ">
        <h3 className="font-heading text-black text-3xl self-end">
          Best Seller
        </h3>
        <p className="text-black text-sm px-4 pt-2">
          Discover the favorites of the season
        </p>
        <button className="bg-white text-black py-2 px-8 rounded-3xl font-semibold self-start justify-self-center transform transition-transform hover:translate-y-[-5px]">
          <Link href="/collection?type=bestSeller">Shop Now</Link>
        </button>
      </div>
      <Image
        src={adidas}
        alt="shoe"
        width={300}
        height={100}
        className="rotate-12"
      />
    </div>
  );
};
export const Card2 = () => {
  return (
    <div className="w-card my-10 h-card rounded-xl bg-color2 flex justify-evenly">
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center ">
        <h3 className="font-heading text-black text-3xl self-end">
          New Arrivals
        </h3>
        <p className="text-black text-sm px-8 pt-2">
          Unveiling the latest arrivals!
        </p>
        <button className="bg-white text-black py-2 px-8 rounded-3xl font-semibold self-start justify-self-center transform transition-transform hover:translate-y-[-5px] ">
          <Link href="/collection?type=newArrival">Shop Now</Link>
        </button>
      </div>
      <Image src={nikeAir} alt="shoe" width={270} height={180} />
    </div>
  );
};
export const Card3 = () => {
  return (
    <div className="w-card my-10 h-card rounded-xl bg-black flex justify-evenly">
      <Image
        src={nikeAirMax}
        alt="shoe"
        width={250}
        height={200}
        className="transform scale-x-[-1]"
      />
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center ">
        <h3 className="font-heading text-white text-3xl self-end">
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
    <div className="w-card my-10 h-card rounded-xl bg-color1 flex justify-evenly">
      <div className="grid grid-row-[1fr max-content 1fr] justify-items-center ">
        <h3 className="font-heading text-black text-3xl self-end">
          Classical Shoes
        </h3>
        <p className="text-black text-sm px-8 pt-2">
          Check out our classical shoes collection
        </p>
        <button className="bg-white text-black py-2 px-8 rounded-3xl font-semibold self-start justify-self-center transform transition-transform hover:translate-y-[-5px]">
          <Link href="/collection?type=classic">Shop Now</Link>
        </button>
      </div>
      <Image src={vans} alt="shoe" width={300} height={180} />
    </div>
  );
};
