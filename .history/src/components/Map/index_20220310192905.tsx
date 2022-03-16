import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };

  export type MapProps = {
    places: Place[]
  }
};
const Map = () => (
  <MapContainer
    center={[51.505, -0.09]}
    zoom={3}
    style={{ height: "100%", width: "100%" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
