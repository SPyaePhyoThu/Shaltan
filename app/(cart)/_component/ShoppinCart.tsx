import Image from "next/image";
import boughtShoe from "../../../public/images/Converse 1.jpg";

const ShoppingCart = () => {
  return (
    <div className=" row-span-2 col-span-3 border-black border-solid border rounded py-2 px-4 grid grid-rows-[min-content_min-content_1fr_min-content]">
      <h1 className="font-heading text-xl font-bold pb-2">Shopping Cart</h1>
      <div className="px-1 pr-5 grid grid-cols-[1fr,.5fr,.3fr]">
        <h3 className="font-heading">Products</h3>
        <h3 className="font-heading justify-self-center">Quantity</h3>
        <h3 className="font-heading justify-self-center">Price</h3>
      </div>
      <div className="grid gap-2 h-full content-start overflow-scroll overflow-x-hidden">
        <div className="grid grid-cols-[1fr_.5fr_.3fr] items-center">
          <div className="grid grid-cols-[max-content,1fr] items-center gap-2">
            <Image
              src={boughtShoe}
              alt="shoe pic"
              width={120}
              height={100}
              className="rounded-sm"
            />
            <div className="text-sm">
              <p>Chuck Taylor All Star</p>
              <p>Size - 42</p>
              <p>ID - 50001</p>
            </div>
          </div>
          <div className="grid grid-cols-3 w-28 gap-2 justify-self-center">
            <button className="bg-color1 rounded-sm text-white w-full text-xl">
              +
            </button>
            <input type="text" className="w-full text-center" value="1" />
            <button className="bg-color1  rounded-sm text-white w-full text-xl">
              -
            </button>
          </div>
          <p className="text-sm justify-self-center">123$</p>
        </div>
        <div className="grid grid-cols-[1fr_.5fr_.3fr] items-center ">
          <div className="grid grid-cols-[max-content,1fr] items-center gap-2">
            <Image
              src={boughtShoe}
              alt="shoe pic"
              width={120}
              height={100}
              className="rounded-sm"
            />
            <div className="text-sm">
              <p>Chuck Taylor All Star</p>
              <p>Size - 42</p>
              <p>ID - 50001</p>
            </div>
          </div>
          <div className="grid grid-cols-3 w-28 gap-2 justify-self-center">
            <button className="bg-color1 rounded-sm text-white w-full text-xl">
              +
            </button>
            <input type="text" className="w-full text-center" value="1" />
            <button className="bg-color1  rounded-sm text-white w-full text-xl">
              -
            </button>
          </div>
          <p className="text-sm justify-self-center">123$</p>
        </div>
        <div className="grid grid-cols-[1fr_.5fr_.3fr] items-center ">
          <div className="grid grid-cols-[max-content,1fr] items-center gap-2">
            <Image
              src={boughtShoe}
              alt="shoe pic"
              width={120}
              height={100}
              className="rounded-sm"
            />
            <div className="text-sm">
              <p>Chuck Taylor All Star</p>
              <p>Size - 42</p>
              <p>ID - 50001</p>
            </div>
          </div>
          <div className="grid grid-cols-3 w-28 gap-2 justify-self-center">
            <button className="bg-color1 rounded-sm text-white w-full text-xl">
              +
            </button>
            <input type="text" className="w-full text-center" value="1" />
            <button className="bg-color1  rounded-sm text-white w-full text-xl">
              -
            </button>
          </div>
          <p className="text-sm justify-self-center">123$</p>
        </div>
        <div className="grid grid-cols-[1fr_.5fr_.3fr] items-center ">
          <div className="grid grid-cols-[max-content,1fr] items-center gap-2">
            <Image
              src={boughtShoe}
              alt="shoe pic"
              width={120}
              height={100}
              className="rounded-sm"
            />
            <div className="text-sm">
              <p>Chuck Taylor All Star</p>
              <p>Size - 42</p>
              <p>ID - 50001</p>
            </div>
          </div>
          <div className="grid grid-cols-3 w-28 gap-2 justify-self-center">
            <button className="bg-color1 rounded-sm text-white w-full text-xl">
              +
            </button>
            <input type="text" className="w-full text-center" value="1" />
            <button className="bg-color1  rounded-sm text-white w-full text-xl">
              -
            </button>
          </div>
          <p className="text-sm justify-self-center">123$</p>
        </div>
        <div className="grid grid-cols-[1fr_.5fr_.3fr] items-center ">
          <div className="grid grid-cols-[max-content,1fr] items-center gap-2">
            <Image
              src={boughtShoe}
              alt="shoe pic"
              width={120}
              height={100}
              className="rounded-sm"
            />
            <div className="text-sm">
              <p>Chuck Taylor All Star</p>
              <p>Size - 42</p>
              <p>ID - 50001</p>
            </div>
          </div>
          <div className="grid grid-cols-3 w-28 gap-2 justify-self-center">
            <button className="bg-color1 rounded-sm text-white w-full text-xl">
              +
            </button>
            <input type="text" className="w-full text-center" value="1" />
            <button className="bg-color1  rounded-sm text-white w-full text-xl">
              -
            </button>
          </div>
          <p className="text-sm justify-self-center">123$</p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_max-content] items-center text-xs pt-2 font-bold">
        <p className="">Total Quantity</p>
        <p className="pr-10">5 items</p>
      </div>
    </div>
  );
};
export default ShoppingCart;
