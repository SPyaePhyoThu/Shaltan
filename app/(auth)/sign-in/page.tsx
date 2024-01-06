"use client";
import Image from "next/image";
import Link from "next/link";

import google from "../../../components/ui/icons8-google-48.png";
import photo from "../../../public/images/SignPhoto.jpg";

import { useState, ChangeEvent, FormEvent } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, provider, signInWithPopup } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { edgeServerPages } from "next/dist/build/webpack/plugins/pages-manifest-plugin";

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
    <div className="h-dvh grid  content-center">
      <div className="w-5/6 grid grid-cols-[1fr_max-content] border-8 border-solid border-black mx-auto rounded-xl ">
        <form
          onSubmit={submitHandler}
          className="bg-black text-white p-3 grid grid-rows-[1.2fr_0.6fr_0.6fr_0.6fr_0.5fr_min-content_0.5fr_0.5fr] justify-items-center gap-3 rounded-r-lg"
        >
          <div className="w-full relative">
            <h1 className="font-heading text-white text-center text-5xl">
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
              className="bg-transparent outline-none w-96 border-b-2 border-white border-solid placeholder-white "
            />
          </label>

          <label htmlFor="email" className="block">
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-black outline-none w-96 border-b-2 border-white border-solid placeholder-white "
            />
          </label>

          <label htmlFor="password" className="block">
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="bg-black outline-none w-96 border-b-2 border-white border-solid placeholder-white "
            />
          </label>

          <button
            type="submit"
            className="bg-white text-black h-10 w-96 rounded-full font-semibold self-end"
          >
            Log In
          </button>
          <p>or</p>
          <button
            onClick={clickHandler}
            className="bg-white text-black h-10 w-96 rounded-full font-semibold"
          >
            <Image
              src={google}
              alt="google"
              width={25}
              height={25}
              className="inline mx-5"
            />
            Log in with google
          </button>
          <div className="font-semibold text-xs">
            New here?{" "}
            <button className="bg-white text-black rounded-full px-2 py-1 ml-3">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </div>
        </form>
        <Image
          src={photo}
          alt="shoes pic"
          height={400}
          width={450}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
export default SignIn;
