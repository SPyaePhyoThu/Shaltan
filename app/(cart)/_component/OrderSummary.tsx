"use client";
import { useCartContext } from "@/app/context/cartContext";
import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

interface OrderSummaryProps {
  deliveryInfo: {
    fullName: string;
    phoneNo: string;
    address: string;
  };
}

const stripePromise: Promise<Stripe | null> = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_KEY || ""
);

export const OrderSummary: React.FC<OrderSummaryProps> = ({ deliveryInfo }) => {
  console.log(deliveryInfo, "delivery info");
  const cartContext = useCartContext();
  const { cartState } = cartContext || {};
  const router = useRouter();

  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

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
      if (loggedin && deliveryInfo) {
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
        console.log(session);

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
        }, 2000);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="row-start-2 row-end-3 col-start-4 col-end-6 border-black border-solid border rounded py-2 px-4 text-sm grid grid-rows-[min-content_0.5fr_1fr_0.5fr_0.5fr_1fr_1fr] gap-1">
      <h1 className="font-heading text-xl font-bold pb-5">Order Summary</h1>

      <div className="grid grid-cols-2 border-color1 border-solid border-b-2">
        <p className="justify-self-start ">Total Quantity</p>
        <p className="justify-self-end">{totalQuantity}</p>
      </div>
      <div className="grid grid-cols-2 self-end pb-1">
        <p className="justify-self-start">Subtotal</p>
        <p className="justify-self-end">{subTotal.toFixed(2)}</p>
      </div>
      <div className="grid grid-cols-2">
        <p className="justify-self-start">Delivery Fee</p>
        <p className="justify-self-end">Free</p>
      </div>
      <div className="grid grid-cols-2 border-color1 border-solid border-b-2">
        <p className="justify-self-start">Tax</p>
        <p className="justify-self-end">{(subTotal * 0.1).toFixed(2)}</p>
      </div>
      <div className="grid grid-cols-2 text-base font-bold">
        <p className="justify-self-start">Total</p>
        <p className="justify-self-end">{total.toFixed(2)}</p>
      </div>
      <button
        onClick={checkoutHandler}
        className="text-center bg-color1 py-3 w-full text-white font-bold rounded-sm"
      >
        {error
          ? "Please log in before check out & fill delivery Info"
          : "Check Out"}
      </button>
    </div>
  );
};
