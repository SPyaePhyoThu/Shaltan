import { HeroPage } from "../components/HeroPage";
import { CardPage } from "../components/CardPage";
import { StoreLocationPage } from "../components/StoreLocationPage";
import { BrandsPage } from "../components/BrandsPage";
import { NewsletterPage } from "../components/NewsletterPage";
import { FooterPage } from "../components/FooterPage";
import { FacilityBar } from "../components/FacilityBar";

const Home: React.FC = () => {
  return (
    <div>
      <HeroPage />
      <CardPage />
      <BrandsPage />
      <FacilityBar />
      <StoreLocationPage />
      <NewsletterPage />
      <FooterPage />
    </div>
  );
};

export default Home;
