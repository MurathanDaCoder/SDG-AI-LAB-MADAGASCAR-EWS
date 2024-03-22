import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "calc(100vh - 4rem)" }}
    >
      <TileLayer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
