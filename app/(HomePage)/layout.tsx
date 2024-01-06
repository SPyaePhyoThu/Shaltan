import Navbar from "../components/navbar";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default HomepageLayout;
