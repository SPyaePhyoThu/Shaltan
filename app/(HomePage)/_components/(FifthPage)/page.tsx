"use client";
import { useState } from "react";

export const FifthPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const clickHandler = () => {
    if (email.includes("@")) {
      setEmail("");
    }
  };

  return (
    <div className="relative h-newsletter bg-[url('/images/newsletterBG.jpg')] bg-cover bg-center">
      <div className="w-full h-full  bg-black bg-opacity-80 p-10 grid grid-rows-[0.5fr_1fr_1fr]">
        <h1 className="text-white font-heading text-4xl text-center">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-white text-center">
          Stay ahead in style! Subscribe for our newsletter to unlock exclusive
          offers and be the first to step into the latest trends.
        </p>
        <div className="grid grid-cols-[1fr,0.6fr] justify-center self-start gap-5">
          <label className="justify-self-end">
            <input
              type="email"
              id="email"
              placeholder="Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="h-10 w-input  bg-white bg-opacity-60 placeholder-black text-xs rounded-full px-4"
            />
          </label>
          <button
            onClick={clickHandler}
            className="text-black bg-white  px-7  text-xs rounded-full justify-self-start "
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-3 py-1 rounded-full text-sm">
        Thank You for Subscribing to Our Newsletter!
      </div>
    </div>
  );
};
