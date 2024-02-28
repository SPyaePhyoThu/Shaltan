export const FooterPage = () => {
  const contactInfo = [
    {
      property: "Address",
      value: "No 123, 4th Street, Unknown City",
    },
    { property: "Phone No", value: "0990541834" },
    { property: "E-mail", value: "satwotwo@gmail.com" },
  ];
  return (
    <>
      <div className="bg-black text-white grid gird-rows-2 grid-cols-[0.3fr_1fr] gap-3 md:grid-rows-1 md:grid-cols-[1fr_0.5fr_1fr] h-full py-5 px-3 sm:py-10 sm:px-5 md:px-10">
        <div className="col-span-2 md:col-span-1 mb-5 md:mb-0">
          <h1 className="font-extrabold text-2xl font-heading pb-3 sm:pb-5 ">
            ShalTan
          </h1>
          <p className="text-sm leading-5 text-justify indent-10">
            Welcome to ShalTan, where footwear meets reliability and service
            exceeds expectations. At ShalTan, we take pride in offering not just
            shoes, but a commitment to quality, reliability, and unparalleled
            customer satisfaction. Our mission is to provide you with a seamless
            and delightful shopping experience, backed by a team dedicated to
            ensuring your every need is met. Trust us to step into a world where
            your comfort and contentment are our top priorities.
          </p>
        </div>
        <div className="justify-self-start md:justify-self-center text-sm">
          <h1 className="font-extrabold text-xl font-heading pb-3 sm:pb-5 ">
            Social
          </h1>
          <p>Twitter</p>
          <p className="py-3">Facebook</p>
          <p className="pb-3 ">Instagram</p>
          <p>Whatsapp</p>
        </div>
        <div className="text-sm md:pl-10">
          <h1 className="font-extrabold text-xl font-heading pb-3 sm:pb-5">
            Contact Us
          </h1>
          {contactInfo.map((info) => (
            <div
              key={info.value}
              className="grid grid-cols-[0.5fr_max-content_1fr] sm:grid-cols-[0.3fr_max-content_1fr] pb-3"
            >
              <span>{info.property}</span>
              <span className="pr-5">:</span>
              <span>{info.value}</span>{" "}
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs font-semibold tracking-wide text-center bg-black text-white p-2">
        © 2023 , ShalTan , All Right Reserved.
      </p>
    </>
  );
};
