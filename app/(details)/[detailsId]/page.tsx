import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/images/Converse 1.jpg";
import image2 from "../../../public/images/Converse 2.jpg";
import image3 from "../../../public/images/Converse 3.jpg";
import image4 from "../../../public/images/Converse 4.jpg";
import image5 from "../../../public/images/Converse 5.jpg";

const Details = () => {
  return (
    <div className="h-dvh grid grid-rows-[max-content_1fr]">
      <div className="grid grid-cols-[1fr_max-content] border-b-4 border-black border-solid mx-10 py-3">
        <h1 className="text-4xl font-heading font-bold ">ShalTan</h1>
        <button className="bg-color1 rounded-sm px-4 text-white font-semibold">
          <Link href="/">Home </Link>
        </button>
      </div>
      <div className="w-4/5 mx-auto py-5 grid grid-cols-[max-content_1fr_1fr] gap-10">
        <div className="h-full grid grid-rows-4 gap-3">
          <Image
            src={image2}
            alt="shoe pic"
            width={95}
            height={100}
            className="rounded-sm border border-solid border-black"
          />
          <Image
            src={image3}
            alt="shoe pic"
            width={95}
            height={100}
            className="rounded-sm border border-solid border-black"
          />
          <Image
            src={image4}
            alt="shoe pic"
            width={95}
            height={100}
            className="rounded-sm border border-solid border-black"
          />
          <Image
            src={image5}
            alt="shoe pic"
            width={95}
            height={100}
            className="rounded-sm border border-solid border-black"
          />
        </div>
        <div className="grid grid-rows-[1fr_min-content_min-content] justify-items-center gap-1 relative">
          <div className="h-28 w-28 rounded-full bg-color2 absolute right-0  translate-y-1/4">
            <p className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-black">
              Best Seller
            </p>
          </div>
          <Image
            src={image1}
            width={400}
            height={100}
            alt="shoe pic"
            className="rounded-sm self-center "
          />
          <h1 className="font-heading text-2xl font-bold">
            Chuck Taylor All Star
          </h1>
          <p className="pb-10">Price : 123$</p>
        </div>
        <div className="pl-3 h-details grid  gap-4">
          <div className="self-end">
            <h1 className="font-heading font-bold py-2">
              Size Chart
              <span className="text-red-500">(Only 4 stocks left)</span>
            </h1>
            <ul className="grid grid-cols-8 w-4/5 text-sm">
              <li className="bg-color1 text-white w-3/4 text-center rounded-sm">
                39
              </li>
              <li className=" w-3/4 text-center rounded-sm">40</li>
              <li className=" w-3/4 text-center rounded-sm">41</li>
              <li className=" w-3/4 text-center rounded-sm">42</li>
              <li className=" w-3/4 text-center rounded-sm">43</li>
              <li className=" w-3/4 text-center rounded-sm">44</li>
              <li className=" w-3/4 text-center rounded-sm">45</li>
              <li className=" w-3/4 text-center rounded-sm">46</li>
            </ul>
          </div>
          <div className="self-end">
            <h1 className="py-2 font-bold">Items Quantity</h1>
            <div className="grid grid-cols-3 w-28 gap-2 justify-self-center">
              <button className="bg-color1 rounded-sm text-white w-full text-xl">
                +
              </button>
              <input type="text" className="w-full text-center" value="1" />
              <button className="bg-color1  rounded-sm text-white w-full text-xl">
                -
              </button>
            </div>
          </div>
          <div className="self-end">
            <h1 className="py-2 font-bold">Total Price</h1>
            <p className="text-sm">123$</p>
          </div>
          <button className="w-full text-white bg-color1 h-10 rounded-sm self-center">
            Add to Cart
          </button>
          <div className="gird grid-rows[min-content_1fr] gap-3">
            <h1 className="font-bold py-4">You might also like</h1>

            <ul className="grid grid-cols-3 gap-3">
              <li className="grid justify-items-center gap-2">
                <Image
                  src={image1}
                  alt="shoe pic"
                  width={100}
                  height={100}
                  className="rounded-sm border border-solid border-black"
                />
                <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>
                <p className="text-xs">Price : 123$</p>
                <button className=" w-addButton bg-color1 text-white rounded-sm">
                  +
                </button>
              </li>
              <li className="grid justify-items-center gap-2">
                <Image
                  src={image1}
                  alt="shoe pic"
                  width={100}
                  height={100}
                  className="rounded-sm border border-solid border-black"
                />
                <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>
                <p className="text-xs">Price : 123$</p>
                <button className="w-addButton bg-color1 text-white rounded-sm">
                  +
                </button>
              </li>
              <li className="grid justify-items-center gap-2">
                <Image
                  src={image1}
                  alt="shoe pic"
                  width={100}
                  height={100}
                  className="rounded-sm border border-solid border-black"
                />
                <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>
                <p className="text-xs">Price : 123$</p>
                <button className="w-addButton bg-color1 text-white rounded-sm">
                  +
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
