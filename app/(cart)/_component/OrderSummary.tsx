"use client";
import { useCartContext } from "@/app/context/cartContext";
import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

const stripePromise: Promise<Stripe | null> = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_KEY || ""
);

export const OrderSummary = () => {
  const cartContext = useCartContext();
  const { cartState } = cartContext || {};
  const router = useRouter();

  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNo, setFPhoneNo] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Update total quantity whenever the cart items change
  useEffect(() => {
    if (cartState.items) {
      const newTotalQuantity = cartState.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setTotalQuantity(newTotalQuantity);

      const newSubTotal = cartState.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      setSubTotal(newSubTotal);
      setTotal(newSubTotal + newSubTotal * 0.1);
    }
  }, [cartState.items]);

  const checkoutHandler = async () => {
    try {
      const loggedin = localStorage.getItem("user");
      if (loggedin && fullName && address && phoneNo) {
        setLoading(true);
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            totalQuantity: totalQuantity,
            total: total.toFixed(0),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error initiating checkout:", errorData);
        }

        const { session } = await response.json();
        setLoading(false);

        // Redirect to the Stripe Checkout page
        const stripe = await stripePromise;
        if (stripe) {
          const { error } = await stripe.redirectToCheckout({
            sessionId: session.id,
          });

          if (error) {
            console.error("Error redirecting to checkout:", error);
          }
        }
      } else {
        setError(true);
        setTimeout(() => {
          router.push("/sign-in");
        }, 5000);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="border-black border-solid border rounded  items-center relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loading />
          </div>
        </div>
      ) : (
        <div className="h-full border-black border-solid border rounded py-2 px-1 md:px-4 text-sm grid grid-rows-[max-content_max-content_0.2fr_max-content_max-content_0.3fr_max-content_max-content_max-content_1fr_max-content] gap-1 ">
          <>
            <h1 className="font-heading text-xl font-bold pb-1 text-center md:text-start">
              Order Summary
            </h1>

            <div className="grid grid-cols-2 border-color1 border-solid border-b-2">
              <p className="justify-self-start ">Total Quantity</p>
              <p className="justify-self-end font-bold">{totalQuantity}</p>
            </div>
            <div className="grid grid-cols-2 self-end">
              <p className="justify-self-start">Subtotal</p>
              <p className="justify-self-end font-bold">
                {subTotal.toFixed(2)}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="justify-self-start">Delivery Fee</p>
              <p className="justify-self-end font-bold">Free</p>
            </div>
            <div className="grid grid-cols-2 border-color1 border-solid border-b-2">
              <p className="justify-self-start">Tax</p>
              <p className="justify-self-end font-bold">
                {(subTotal * 0.1).toFixed(2)}
              </p>
            </div>
            <div className="grid grid-cols-2 text-base font-bold  border-color1 border-solid border-b-2">
              <p className="justify-self-start">Total</p>
              <p className="justify-self-end">{total.toFixed(2)}</p>
            </div>
            <h1 className="font-heading text-xl font-bold pb-1 text-center md:text-start">
              Delivery information
            </h1>
            <div className="text-sm">
              <label htmlFor="fullName" className="block text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="border-color1 border-solid border-2 w-full h-7 p-1 rounded focus:outline-none"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
            <div className="text-sm">
              <label htmlFor="phoneNo" className="block text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                required
                className="border-color1 border-solid border-2 h-7 p-1 w-full rounded focus:outline-none text-start"
                value={phoneNo}
                onChange={(e) => {
                  setFPhoneNo(e.target.value);
                }}
              />
            </div>
            <div className="text-sm">
              <label htmlFor="address" className="block text-sm">
                Address
              </label>
              <textarea
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
                className="border-color1 border-solid border-2 resize-none w-full h-5/6 p-1 rounded focus:outline-none text-start"
              />
            </div>
            <button
              onClick={checkoutHandler}
              className="text-center bg-color1 py-3 w-full mt-2 text-white font-bold rounded-sm"
            >
              {error
                ? "Please log in before check out & fill delivery Info"
                : "Check Out"}
            </button>
          </>
        </div>
      )}
    </>
  );
};
