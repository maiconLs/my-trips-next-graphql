import dynamic from "next/dynamic";

const Map = dynamic(() => import("components/Map"), { ssr: false });

export default function Home() {
  return <Map place={ [51.505, -0.09]}/>;
}
