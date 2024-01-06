export const DeliveryInfo = () => {
  return (
    <div className="h-full row-start-1 row-end-2 col-start-4 col-end-6 border-black border-solid border rounded py-2 px-4 grid grid-rows-[min-content,1fr]">
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
          />
        </div>
        <div className="text-sm">
          <label htmlFor="phoneNo" className="block text-sm">
            Phone
          </label>
          <input
            type="text"
            id="phoneNo"
            className="border-color1 border-solid border-2 h-7 p-1 w-full rounded focus:outline-none text-start"
          />
        </div>
        <div className="text-sm">
          <label htmlFor="address" className="block text-sm">
            Address
          </label>
          <textarea className="border-color1 border-solid border-2 resize-none w-full h-5/6 p-1 rounded focus:outline-none text-start" />
        </div>
      </div>
    </div>
  );
};
