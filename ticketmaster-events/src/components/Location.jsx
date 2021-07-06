import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

export default function Location({ location, id }) {
  return (
    <MapContainer center={[location.latitude, location.longitude]} zoom={12}>
      <Marker key={id} position={[location.latitude, location.longitude]} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}
