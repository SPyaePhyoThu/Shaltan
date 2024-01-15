"use client";

import { useState } from "react";
interface DeliveryInfoProps {
  onChange: (data: {
    fullName: string;
    phoneNo: string;
    address: string;
  }) => void;
}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({ onChange }) => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNo, setFPhoneNo] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (fullName && phoneNo && address) {
      onChange({ fullName, phoneNo, address });
      setSubmitted(true);
      setFullName("");
      setFPhoneNo("");
      setAddress("");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="h-full row-start-1 row-end-2 col-start-4 col-end-6 border-black border-solid border rounded py-2 px-1 md:px-4 grid grid-rows-[min-content,1fr]"
    >
      <h1 className="font-heading text-xl font-bold pb-2">
        Delivery Information
      </h1>
      <div className="h-full grid grid-rows-[min-content_min-content_1fr]">
        <div className="text-sm">
          <label htmlFor="fullName" className="block text-sm">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
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
            className="border-color1 border-solid border-2 resize-none w-full h-5/6 p-1 rounded focus:outline-none text-start"
          />
        </div>
        <button
          type="submit"
          className="bg-color1 rounded-sm mt-2 text-white text-sm py-1"
        >
          {error
            ? "Please fill all fields before submitting."
            : submitted
            ? "Submitted"
            : "Submit"}
        </button>
      </div>
    </form>
  );
};
