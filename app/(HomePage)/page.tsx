import { FirstPage } from "./_components/(FirstPage)/page";
import { SecondPage } from "./_components/(SecondPage)/page";
import { ThirdPage } from "./_components/(ThirdPage)/page";
import { FourthPage } from "./_components/(FourthPage)/page";
import { FifthPage } from "./_components/(FifthPage)/page";
import { SixthPage } from "./_components/(sixthPage)/page";
import { FacilityBar } from "./_components/(SecondPage)/FacilityBar";

const Home: React.FC = () => {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <FourthPage />
      <FacilityBar />
      <ThirdPage />
      <FifthPage />
      <SixthPage />
    </div>
  );
};

export default Home;
