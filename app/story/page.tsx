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
      <div className="grid grid-cols-[3fr_1.4fr] gap-10 w-card">
        <div className="h-full content-center grid justify-items-end grid-rows-[min-content_min-content_min-content_50px] ">
          <p className="w-4/5 xl:w-3/5 indent-5">
            In the aftermath of the challenging times that defined 2020, a group
            of friends came together with a shared passion for footwear and a
            collective vision for rejuvenating the way people shop for shoes.
            Born out of the resilience that follows adversity, ShalTan emerged
            as a vibrant online destination,an e-commerce haven , out of the
            crucible of those challenging times. Fueled by the desire to bring
            fashion and comfort to every doorstep, we embarked on a journey to
            curate a unique and diverse collection of shoes that echo the spirit
            of our times.
          </p>
          <p className="w-4/5 xl:w-3/5 indent-5">
            In the dynamic evolution of our journey, what began as a thriving
            e-commerce venture has grown into the heart and soul of our
            community , in 2021 —a vibrant physical store. Originating in the
            digital realm, our e-commerce roots allowed us to connect with shoe
            enthusiasts worldwide. Bolstered by the overwhelming support of our
            customers, we ventured into the realm of brick and mortar. Today,
            our physical store stands as a testament to the enduring bond forged
            through every online transaction. As we open our doors to the world,
            we carry the spirit of our e-commerce origins—a commitment to
            exceptional footwear and a passion for personal connection.
          </p>
          <p className="w-4/5 xl:w-3/5 indent-5">
            Join us on this adventure, and let ShalTan be the destination where
            every step is a statement .
          </p>
          <button className="bg-white font-heading text-black px-2 rounded-sm justify-self-center ml-32 lg:ml-36 xl:ml-96 self-end shadow shadow-color5">
            <Link href="/">Home</Link>
          </button>
        </div>
        <div>
          <div className="grid grird-cols-2 w-photo h-full content-center">
            <Image
              alt="Old pic"
              src={ShalTan1}
              width={200}
              className="col-start-1 col-end-3 rounded-sm"
            />
            <Image
              alt="Old pic"
              src={ShalTan2}
              width={100}
              className="col-start-1 col-end-2 rounded-sm"
            />
            <Image
              alt="Old pic"
              src={ShalTan3}
              width={100}
              className="col-start-2 col-end-3 rounded-sm"
            />
            <Image
              alt="Old pic"
              src={ShalTan4}
              width={200}
              className="col-start-1 col-end-3 rounded-sm"
            />
            <Image
              alt="Old pic"
              src={ShalTan5}
              width={200}
              className="col-start-1 col-end-3 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
