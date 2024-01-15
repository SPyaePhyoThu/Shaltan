"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const Alert: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const success = searchParams?.get("success");
    if (success === "true") {
      setShow(true);
    }
  }, [searchParams]);

  const handleClose = () => {
    setShow(false);
    router.push("/");
  };

  return (
    <>
      {show && (
        <div className="alert absolute  p-3 px-10 rounded-lg border border-solid border-white bg-black text-white text-center left-1/2  transform -translate-x-1/2 ">
          <span className="block px-5 p-1 pb-3">
            Payment successful! <br></br>Thank you for your purchase.
          </span>
          <button
            className="bg-white text-black py-1 px-6 rounded-full font-semibold self-start justify-self-center text-sm transform transition-transform hover:translate-y-[-5px]"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
