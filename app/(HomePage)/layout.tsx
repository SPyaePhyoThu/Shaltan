import InformationBar from "../components/InformationBar";
import InfromationBar from "../components/InformationBar";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <InformationBar />
      {children}
    </div>
  );
};

export default HomepageLayout;
