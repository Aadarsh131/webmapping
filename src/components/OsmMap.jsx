import { useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Popup,
  Marker,
  useMapEvents,
  useMapEvent,
} from "react-leaflet";
import * as turf from "@turf/turf";
import "leaflet/dist/leaflet.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Button } from "antd";

const OsmMap = () => {
  const region = useSelector((state) => state.reducer.RegionData?.latlng);

  const mapRef = useRef();
  const isDarkMode = useSelector((state) => state.reducer.DarkMode);

  // function handleOnFlyTo() {
  //   const { current = {} } = mapRef;
  //   const { leafletElement: map } = current;

  //   map.flyTo(disneyLandLatLng, 14, {
  //     duration: 2,
  //   });
  // }
  return (
    <MapContainer
      // center={region}
      center={[20.66550590234906, 79.11621748344169]}
      zoom={5}
      scrollWheelZoom={false}
      style={{
        height: "100vh",
        border: "2px solid rgb(143, 173, 224)",
        borderRadius: "15px",
      }}
      // ref={mapRef}
    >
      {isDarkMode ? (
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
      ) : (
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      )}
    </MapContainer>
  );
};

export default OsmMap;
