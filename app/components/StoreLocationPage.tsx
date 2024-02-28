import Map from "./Map";

export const StoreLocationPage = () => {
  return (
    <div
      className="h-full  grid grid-rows-[max-content_1fr] bg-color5 p-3 lg:p-5 "
      id="store"
    >
      <h1 className="font-heading text-center self-center font-bold text-3xl sm:text-5xl py-2 md:py-5">
        Store Location
      </h1>
      <div className="pt-5 pb-2 sm:pb-5 md:pb-10 grid grid-rows-[1fr_max-content] lg:grid-cols-[1fr_1fr] lg:grid-rows-1 lg:gap-4 justify-items-center self-center items-center">
        <Map />
        <div className="my-auto grid grid-rows-[min-content,max-content,0.5fr,min-content,min-content,0.1fr] pt-5 pb-2 md:py-5">
          <h1 className="font-heading font-bold text-xl pb-1 xl:pb-5">
            Your destination for the perfect pair.
          </h1>
          <p className="indent-10 self-center  lg:leading-6 xl:leading-8 text-xs lg:text-sm xl:text-base text-justify">
            Visit our flagship store, where fashion and comfort converge in a
            space that mirrors our commitment to excellence.Immerse yourself in
            a unique shopping experience at our prime location, meticulously
            designed to reflect the essence of our brand and showcase our
            stunning footwear collection.
          </p>
          <p className="indent-10 self-center lg:leading-6 xl:leading-8 text-xs lg:text-sm xl:text-base text-justify">
            We are thrilled to invite you to step into a world of footwear
            fashion that caters to both your aesthetic preferences and the
            comfort your feet deserve.Our knowledgeable and friendly staff is
            here to assist you in finding the ideal fit, ensuring you leave not
            only with a stylish addition to your wardrobe but also with a smile
            on your face.
          </p>
          <p className="block pt-1 text-xs lg:text-sm  lg:pt-4">
            Come and Enjoy Sale{" "}
            <span className="justify-self-start text-xl text-color4 font-bold px-3">
              20% Off
            </span>{" "}
            for first pair.
          </p>
        </div>
      </div>
    </div>
  );
};
