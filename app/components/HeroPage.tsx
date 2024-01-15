import Link from "next/link";
import Alert from "@/app/components/alert";

// import { Navbar } from "./Navbar";

export const HeroPage = () => {
  return (
    <div className="pt-2 px-3 h-dvh  bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <div className="relative w-full h-full bg-black bg-opacity-70 grid grid-rows-[min-content,0.8fr,min-content,0.2fr,.5fr]">
        <Alert></Alert>
        {/* <Navbar /> */}
        <h1 className="font-heading text-white text-9xl justify-self-center self-center">
          ShalTan
        </h1>
        <p className=" text-white  text-center">
          Step into a world where style meets comfort effortlessly.
        </p>
        <p className=" text-white text-center">
          Explore our curated collection of footwear, crafted for the fashion-
          <br />
          forward and designed to make every step a statement in both aesthetics
          and ease.
        </p>
        <button className="bg-white text-black py-4 px-14 rounded-full font-semibold self-start justify-self-center text-lg transform transition-transform hover:translate-y-[-5px]">
          <Link href="/collection">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};
