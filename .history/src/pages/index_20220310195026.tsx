import dynamic from "next/dynamic";

const Map = dynamic(() => import("components/Map"), { ssr: false });

export default function Home() {
  return (
    <Map
      places={[
        {
          id: "1",
          name: "Petrópolis",
          slug: "petropolis",
          location: {
            latitude: 60,
            longitude: -70,
          },
        },
      ]}
    />
  );
}
