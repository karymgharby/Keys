import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker,NavigationControl,Popup } from "react-map-gl";
import './Map.css'
import env from'
import {MdPlace} from 'react-icons/md'
export default function Map() {
  const [markerCoord, setMarkerCoord] = useState(null);

  

  const navControlStyle= {
    right: 10,
    bottom: 30
  };

  const [viewport, setViewport] = useState({
     width: "40vw",
    height: "100vh",
    latitude: 36,
    longitude: 10,
    zoom: 18,
  });

  useEffect(() => {
    //get user location
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
         width: "40vw",
        height: "100vh",
        zoom: 7,
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
        onClick={(e) =>
          setMarkerCoord({
            lng: e.lngLat[0],
            lat: e.lngLat[1],
          })
        }
      >
        {markerCoord && (
          <Marker
            latitude={markerCoord.lat}
            longitude={markerCoord.lng}
            offsetLeft={-30}
            offsetTop={-50}
          >
            {/* House main image */}
            <MdPlace style={{ color: "blue", width: 40, height: 50 }} />
          </Marker>
          
        )}
        {/* <Popup
                
                latitude={markerCoord.lat}
                longitude={markerCoord.lng}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
              ></Popup>
         */}
        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
    </div>
  );
}