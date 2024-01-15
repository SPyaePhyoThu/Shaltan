import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../../components/map"), {
  ssr: false,
});

const Map = () => {
  return <DynamicMap />;
};

export default Map;
