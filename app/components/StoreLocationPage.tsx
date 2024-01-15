import Map from "./Map";

export const StoreLocationPage = () => {
  return (
    <div className="h-dvh bg-color5 p-5" id="store">
      <h1 className="font-heading text-center font-bold text-4xl mb-10">
        Store Location
      </h1>
      <div className="grid grid-cols-[1fr,0.7fr] justify-items-center">
        <Map />
        <div className="my-auto grid grid-rows-[min-content,max-content,0.5fr,min-content,min-content,0.1fr] ">
          <h1 className="font-heading font-bold text-xl pb-5">
            Your destination for the perfect pair.
          </h1>
          <p className="indent-10 self-center tracking-wider leading-7">
            Visit our flagship store, where fashion and comfort converge in a
            space that mirrors our commitment to excellence.Immerse yourself in
            a unique shopping experience at our prime location, meticulously
            designed to reflect the essence of our brand and showcase our
            stunning footwear collection.
          </p>
          <p className="indent-10 self-center tracking-wider leading-7">
            We are thrilled to invite you to step into a world of footwear
            fashion that caters to both your aesthetic preferences and the
            comfort your feet deserve.Our knowledgeable and friendly staff is
            here to assist you in finding the ideal fit, ensuring you leave not
            only with a stylish addition to your wardrobe but also with a smile
            on your face.
          </p>
          <p className="block pt-4">
            Come and Enjoy Sale{" "}
            <span className="justify-self-start text-3xl text-color4 font-bold px-3">
              20% Off
            </span>{" "}
            for first pair.
          </p>
        </div>
      </div>
    </div>
  );
};
