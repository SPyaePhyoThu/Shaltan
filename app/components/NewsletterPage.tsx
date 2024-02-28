"use client";
import { useState } from "react";

export const NewsletterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState(false);

  const clickHandler = () => {
    if (email.includes("@")) {
      setEmail("");
      setSubscribed(true);
    }
  };

  return (
    <div className="relative h-newsletter bg-[url('/images/newsletterBG.jpg')] bg-cover bg-center">
      <div className="w-full h-full  bg-black bg-opacity-80 p-5 md:p-10 grid grid-rows-[0.5fr_.5fr_1fr] md:grid-rows-[0.5fr_1fr_1fr]">
        <h1 className="text-white font-heading text-3xl md:text-5xl text-center">
          Subscribe To Our Newsletter
        </h1>
        <p className="text-white text-center text-sm md:text-base">
          Stay ahead in style! Subscribe for our newsletter to unlock exclusive
          offers and be the first to step into the latest trends.
        </p>
        <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr,0.6fr] justify-center self-start gap-5 pt-10 md:pt-0">
          <label className="justify-self-end">
            <input
              type="email"
              id="email"
              placeholder="Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="h-10 w-smallInput md:w-input bg-white bg-opacity-60 placeholder-black text-xs rounded-full px-4"
            />
          </label>
          <button
            className={`text-black justify-self-center bg-white  px-7  text-xs rounded-full md:justify-self-start transform transition-transform hover:translate-x-[-5px] `}
            onClick={clickHandler}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div
        className="absolute  animate-pulse text-center bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-3 py-1 rounded-full text-sm inline-block 
      "
      >
        {subscribed ? "Thank You for Subscribing to Our Newsletter!" : ""}
      </div>
    </div>
  );
};
