import Image from "next/image";
import Link from "next/link";
import Converse1 from "../../../public/images/Converse 1.jpg";

const Collection = () => {
  return (
    <div className="h-full w-full grid gap-4 grid-rows-[min-content_min-content_min-content_1fr]">
      <div className="bg-black relative w-full">
        <h1 className="text-5xl font-heading font-bold text-center text-white">
          ShalTan
        </h1>
        <button className="text-black font-semibold absolute right-3 top-3 bg-color1 px-2 rounded-sm font-heading">
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
          <div className="relative w-10 h-4 rounded-full bg-color1">
            <div className="absolute w-4 h-4 rounded-full bg-white left-0 top-0 border border-solid border-color1"></div>
          </div>
        </div>

        <p className="font-semibold pr-10 justify-self-end">Result: 88</p>
      </div>
      <div className="px-10 grid grid-cols-[0.3fr_1fr]">
        <div className="grid px-5  gap-3  font-bold content-start">
          <div className="grid grid-cols-2 ">
            <p>Brands</p>
            <p className="justify-self-center">+</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Search by Price</p>
            <p className="justify-self-center">+</p>
          </div>
          <div>
            <p>New Arrivals</p>
          </div>
          <div>
            <p>Sale Items</p>
          </div>
          <div>
            <p>Best Sellers</p>
          </div>
        </div>

        <div className="h-full grid grid-rows-[1fr_min-content] gap-5">
          <div className="w-full grid grid-cols-5 gap-3 grid-rows-[1fr,1fr,1fr]">
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
            <div className="grid justify-items-center gap-1">
              <Image src={Converse1} alt="shoe pic" width={200} height={200} />

              <h1 className="text-xs font-bold">Chuck Taylor All Star</h1>

              <p className="text-xs">Price : 123$</p>
              <button className=" w-addButton bg-color1 text-white rounded-sm">
                +
              </button>
            </div>
          </div>
          <div className="h-16 grid grid-cols-[1fr_max-content_1fr] items-center gap-2">
            <button className="w-7 h-7 rounded-full bg-color1 text-white shadow shadow-black justify-self-end">
              &larr;
            </button>
            <div className="flex gap-3 px-2">
              <p className="bg-black text-white px-2 rounded-sm"> 1 </p>
              <p> 2 </p>
              <p> 3</p>
            </div>
            <button className="w-7 h-7 rounded-full bg-color1 text-white shadow shadow-black justify-self-start">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
