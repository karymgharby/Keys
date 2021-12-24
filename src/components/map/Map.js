import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import "./Map.css";

import { MdPlace } from "react-icons/md";
export default function Map() {

  const navControlStyle = {
    right: 10,
    bottom: 30,
  };

  const [viewport, setViewport] = useState({
    width: "30vw",
    height: "100vh",
    latitude: 36.710161050637595,
    longitude: 10.428860882171598,
    zoom: 12,
  });

  useEffect(() => {
    //get user location
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        width: "35vw",
        height: "100vh",
        zoom: 12,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
      console.log(pos);
    });
  }, []);

  return (
    <div className="mapview__container">
      <ReactMapGL
        className="mapview__map"
        mapStyle="mapbox://styles/mapbox/light-v10"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        // onClick={(e) =>
        //   setMarkerCoord({
        //     lng: e.lngLat[0],
        //     lat: e.lngLat[1],
        //   })
        // }
      >
        <Marker
          latitude={36.710161050637595}
          longitude={10.428860882171598}
          offsetLeft={-30}
          offsetTop={-50}
        >
          {/* House main image */}
          <MdPlace style={{ color: "blue", width: 40, height: 50 }} />
        </Marker>

        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
    </div>
  );
}
