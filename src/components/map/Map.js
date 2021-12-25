import React, { useEffect, useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "./Map.css";
import searchicon from '../../assets/Icons/search.icon.svg'
import MarkerHome from './marker/Map.Marker'


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
    zoom: 13,
  });

  useEffect(() => {
    //get user location
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        width: "35vw",
        height: "100vh",
        zoom: 13,
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
        mapStyle="mapbox://styles/karimghar/ckxkyhjh0kpby14mj0husi1i5"
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
        <div className="map__search">
          <input placeholder="Search..." className="map__search--input" />
          <img src={searchicon} alt="Search" className="map__search--icon"/>
        </div>
       
        <MarkerHome/>

        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
    </div>
  );
}
