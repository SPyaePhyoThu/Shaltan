import Image from "next/image";
import Link from "next/link";

import ShalTan1 from "../../public/images/ShalTan1.jpg";
import ShalTan2 from "../../public/images/ShalTan2.png";
import ShalTan3 from "../../public/images/ShalTan3.png";
import ShalTan4 from "../../public/images/ShalTan4.jpg";
import ShalTan5 from "../../public/images/ShalTan5.jpg";

const Story = () => {
  return (
    <div className="h-max p-5">
      <h1 className="font-heading font-bold text-center text-5xl pb-10">
        Our Story
      </h1>
      <div className="w-card mx-auto grid grid-rows-[max-content_max-content] gap-5">
        <div className="py-10 grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-[repeat(3,max-content)] h-full justify-self-center gap-7 self-center items-baseline">
          <Image
            alt="Old pic"
            src={ShalTan2}
            height={200}
            className="  rounded-sm outline outline-4 outline-offset-8 outline-black "
          />
          <Image
            alt="Old pic"
            src={ShalTan3}
            height={200}
            className="  rounded-sm outline outline-4 outline-offset-8 outline-black "
          />

          <Image
            alt="Old pic"
            src={ShalTan4}
            height={200}
            className=" rounded-sm outline outline-4 outline-offset-8 outline-black col-span-2 justify-self-center"
          />
        </div>

        <div className="h-full grid justify-items-end grid-rows-[min-content_min-content_min-content_50px] ">
          <p className="w-full indent-10 text-justify">
            <span className="text-3xl">I</span>n the aftermath of the
            challenging times that defined 2020, a group of friends came
            together with a shared passion for footwear and a collective vision
            for rejuvenating the way people shop for shoes. Born out of the
            resilience that follows adversity,
            <strong> ShalTan</strong> emerged as a vibrant online destination,an
            e-commerce haven , out of the crucible of those challenging times.
            Fueled by the desire to bring fashion and comfort to every doorstep,
            we embarked on a journey to curate a unique and diverse collection
            of shoes that echo the spirit of our times.
          </p>
          <p className="w-full indent-10 text-justify">
            In the dynamic evolution of our journey, what began as a thriving
            e-commerce venture has grown into the heart and soul of our
            community , in 2021 —a vibrant physical store. Originating in the
            digital realm, our e-commerce roots allowed us to connect with shoe
            enthusiasts worldwide. Bolstered by the overwhelming support of our
            customers, we ventured into the realm of brick and mortar.
          </p>
          <p className="w-full indent-10 text-justify">
            Today, our physical store stands as a testament to the enduring bond
            forged through every online transaction. As we open our doors to the
            world, we carry the spirit of our e-commerce origins—a commitment to
            exceptional footwear and a passion for personal connection. Join us
            on this adventure, and let <strong>ShalTan</strong> be the
            destination where every step is a statement .
          </p>

          <button className="bg-black font-heading text-white px-2 mt-5 rounded-sm justify-self-center  self-end shadow shadow-color5">
            <Link href="/">Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
