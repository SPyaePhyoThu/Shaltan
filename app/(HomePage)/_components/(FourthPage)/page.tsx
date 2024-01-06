import Link from "next/link";

export const FourthPage = () => {
  return (
    <div
      className="h-full  pt-10 pb-16 gap-5 bg-color5 grid grid-rows-[min-content,min-content,1fr]"
      id="brands"
    >
      <h1 className="font-heading text-5xl text-center">Featured Brands</h1>
      <p className="text-center pb-6 font-bold">
        Explore your perfect pair with just a click.
      </p>
      <div className="bg-white grid grid-rows-3 grid-cols-[250px_385px_250px] gap-4 h-album justify-self-center">
        <div className='relative h-full bg-[url("/images/nike.jpg")] row-span-2 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1 className="text-white  font-heading text-4xl absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-1/2">
              <Link href="/collection">NIKE</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-[url("/images/vans.jpg")] row-start-3 row-end-4 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1 className="text-white  font-heading text-4xl absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-1/2">
              <Link href="/collection">VANS</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-[url("/images/puma.jpg")] row-start-1 row-end-4 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1 className="text-white  font-heading text-5xl absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-1/2">
              <Link href="/collection">PUMA</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-[url("/images/adidasPair.jpg")] row-start-1 row-end-2 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1 className="text-white  font-heading text-4xl absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-1/2">
              <Link href="/collection">ADIDAS</Link>
            </h1>
          </div>
        </div>
        <div className='relative h-full bg-[url("/images/converse.jpg")] row-start-2 row-end-4 rounded-md'>
          <div className="absolute inset-0 w-full h-full bg-black bg-opacity-80 rounded-md">
            <h1 className="text-white  font-heading text-4xl absolute top-2/4 left-1/2 transform -translate-y-2/4 -translate-x-1/2">
              <Link href="/collection">CONVERSE</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
