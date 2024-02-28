import { FreeDelivery } from "@/components/ui/FreeDelivery";
import { ExchangeMoney } from "@/components/ui/ExchangeMoney";
import { EasyPayment } from "@/components/ui/EasyPayment";
import { CustomerService } from "@/components/ui/CustomerService";
import { PriceNPerformance } from "@/components/ui/Price&Performance";

export const FacilityBar = () => {
  return (
    <div className="h-full grid grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-5 gap-x-1 gap-y-5 md:gap-y-0 items-start text-xs p-2 md:p-5 my-5 lg:gap-x-8 md:gap-x-4">
      <div className=" grid justify-items-center ">
        <FreeDelivery />
        <h1 className="py-3 font-heading text-center font-bold">
          Free & Fast Delivery
        </h1>
        <p className="justify-self-center text-center md:text-justify md:px-5">
          Swift and Free: Your order, delivered with speed and on us!
        </p>
      </div>
      <div className=" grid justify-items-center ">
        <ExchangeMoney />
        <h1 className="py-3 font-heading text-center font-bold">
          Easy Exchange & Return
        </h1>
        <p className="justify-self-center text-center md:text-justify md:px-5">
          Hassle-free Returns and Exchanges: Because your satisfaction matters.
        </p>
      </div>
      <div className=" grid justify-items-center text-center">
        <EasyPayment />
        <h1 className="py-3 font-heading text-center font-bold">
          Easy Payment
        </h1>
        <p className="justify-self-center text-center md:px-5 md:text-justify">
          Seamless Transactions,Total Security: Easy and Secure Payments Every
          Time.
        </p>
      </div>
      <div className=" grid justify-items-center ">
        <CustomerService />
        <h1 className="py-3 font-heading text-center font-bold">
          24/7 Customer Service
        </h1>
        <p className="justify-self-center text-center md:px-5 md:text-justify">
          Always Here for You:24/7 Customer Service,Your Support Around the
          Clock
        </p>
      </div>
      <div className=" grid justify-items-center ">
        <PriceNPerformance />
        <h1 className="py-3 font-heading text-center font-bold">
          Prices Match performance
        </h1>
        <p className="justify-self-center text-center md:px-5 md:text-justify">
          Matched Prices,Unmatched Value:Our Promise for the Best Deals Every
          Time.
        </p>
      </div>
    </div>
  );
};
