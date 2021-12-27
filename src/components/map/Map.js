import { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "./Map.css";
import searchicon from "../../assets/Icons/search.icon.svg";
import MarkerHome from "./marker/Map.Marker";

export default function Map() {
  const navControlStyle = {
    right: 10,
    bottom: 30,
  };

  const [viewport, setViewport] = useState({
    latitude: 36.710161050637595,
    longitude: 10.428860882171598,
    zoom: 13,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="100%"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <div className="map__search">
        <input placeholder="Search..." className="map__search--input" />
        <img src={searchicon} alt="Search" className="map__search--icon" />
      </div>

      <MarkerHome />

      <NavigationControl style={navControlStyle} />
    </ReactMapGL>
  );
}
