export const OrderSummary = () => {
  return (
    <div className="row-start-2 row-end-3 col-start-4 col-end-6 border-black border-solid border rounded py-2 px-4 text-sm grid grid-rows-[min-content_0.5fr_1fr_0.5fr_0.5fr_1fr_1fr] gap-1">
      <h1 className="font-heading text-xl font-bold pb-5">Order Summary</h1>

      <div className="grid grid-cols-2 border-color1 border-solid border-b-2">
        <p className="justify-self-start ">Total Quantity</p>
        <p className="justify-self-end">4</p>
      </div>
      <div className="grid grid-cols-2 self-end pb-1">
        <p className="justify-self-start">Subtotal</p>
        <p className="justify-self-end">520$</p>
      </div>
      <div className="grid grid-cols-2">
        <p className="justify-self-start">Delivery Fee</p>
        <p className="justify-self-end">Free</p>
      </div>
      <div className="grid grid-cols-2 border-color1 border-solid border-b-2">
        <p className="justify-self-start">Tax</p>
        <p className="justify-self-end">52$</p>
      </div>
      <div className="grid grid-cols-2 text-base font-bold">
        <p className="justify-self-start">Total</p>
        <p className="justify-self-end">572$</p>
      </div>
      <button className="text-center bg-color1 py-3 w-full text-white font-bold rounded-sm">
        Check Out
      </button>
    </div>
  );
};
3;
