"use client";
import Image from "next/image";
import Link from "next/link";

import google from "../../../components/ui/icons8-google-48.png";

import { useState, ChangeEvent, FormEvent } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, provider, signInWithPopup } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      if (res) {
        localStorage.setItem("user", "true");
        setEmail("");
        setPassword("");
        router.push("/cart");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const clickHandler = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (res) {
        localStorage.setItem("user", "true");
        router.push("/cart");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="h-dvh grid bg-black  content-center">
      <div className="w-full lg:w-signPage xl:w-5/6 grid md:grid-cols-[1fr_0.3fr] lg:grid-cols-[1fr_max-content] md:border-4 border-solid border-white mx-auto rounded-xl ">
        <form
          onSubmit={submitHandler}
          className="w-full h-screen md:h-auto md:w-auto bg-black text-white p-3 grid grid-rows-[1fr_0.3fr_0.3fr_0.3fr_.3fr_max-content_.5fr_1fr] md:grid-rows-[1.2fr_0.6fr_0.6fr_0.6fr_0.5fr_min-content_0.5fr_1fr] justify-items-center gap-1 lg:gap-3 md:rounded-r-lg"
        >
          <div className="w-full relative grid items-center">
            <h1 className="mt-10 md:mt-5 font-heading text-white text-center text-3xl lg:text-5xl">
              WELCOME
            </h1>
            <button className="absolute right-0 top-0  bg-white text-black rounded-full  px-2 text-sm font-semibold py-1">
              <Link href="/"> Home </Link>
            </button>
          </div>
          <label htmlFor="name" className="block ">
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="bg-transparent outline-none w-72 lg:w-96 border-b-2 border-white border-solid placeholder-white text-xs lg:text-base"
            />
          </label>

          <label htmlFor="email" className="block">
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="bg-black outline-none w-72 lg:w-96 border-b-2 border-white border-solid placeholder-white text-xs lg:text-base"
            />
          </label>

          <label htmlFor="password" className="block">
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder="Password"
              className="bg-black outline-none w-72 lg:w-96 border-b-2 border-white border-solid placeholder-white text-xs lg:text-base"
            />
          </label>

          <button
            type="submit"
            className="bg-white text-black text-xs lg:text-base h-7 lg:h-10 w-72 lg:w-96 rounded-full font-semibold self-end"
          >
            Log In
          </button>
          <p>or</p>
          <button
            onClick={clickHandler}
            className="bg-white text-black text-xs lg:text-base h-7 lg:h-10 w-72 lg:w-96 rounded-full font-semibold"
          >
            <Image
              src={google}
              alt="google"
              width={25}
              height={25}
              className="inline mx-1 lg:mx-5"
            />
            Log in with google
          </button>
          <div className="font-semibold text-xs lg:text-base">
            New here?{" "}
            <Link
              href="/sign-up"
              className=" text-color1 text-xs lg:text-base rounded-full px-2 py-1 ml-3"
            >
              Sign up
            </Link>
          </div>
        </form>
        <div className="w-0 h-0 md:w-smallImage lg:w-image md:h-signUpPage bg-[url('/images/SignPhoto.jpg')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};
export default SignIn;
