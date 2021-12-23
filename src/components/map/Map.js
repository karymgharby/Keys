import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker,NavigationControl,Popup } from "react-map-gl";
import './Map.css'

import {MdPlace} from 'react-icons/md'
export default function Map() {
  const [markerCoord, setMarkerCoord] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  

  const navControlStyle= {
    right: 10,
    bottom: 30
  };

  const [viewport, setViewport] = useState({
     width: "30vw",
    height: "100vh",
    latitude: 36.710161050637595,
    longitude: 10.428860882171598,
    zoom: 12
  });

  useEffect(() => {
    //get user location
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
         width: "30vw",
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

            {/* Show Popup Card */}

         <Popup
          latitude={36.710161050637595}
          longitude={10.428860882171598}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="left" >
          <div className="card">
                <img height="40px" alt="Keys" className="card__image"
                 src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2FBeautiful-luxury-home-exterior-at-twilight%2F960x0.jpg%3Ffit%3Dscale"/>
                 <p>🚩</p>
                </div>
        </Popup>
        <Popup
          latitude={36.5}
          longitude={10.4}
          closeButton={true}
          className="card"
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="left" >
          <div className="card_info">
            <img height="40px" alt="Keys" className="card__image" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2FBeautiful-luxury-home-exterior-at-twilight%2F960x0.jpg%3Ffit%3Dscale"/>
          </div>
          <div className="triangle"/>
        </Popup>
        <Popup
          latitude={36.4}
          longitude={10.3}
          closeButton={true}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="left" >
          <div className="card">
                <img height="40px" alt="Keys" className="card__image"
                 src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2FBeautiful-luxury-home-exterior-at-twilight%2F960x0.jpg%3Ffit%3Dscale"/>
                 <p>🚩</p>
                </div>
        </Popup>
        {/* <Popup
                
                latitude={36}
                longitude={10}
                closeButton={true}
                closeOnClick={false}
               
                anchor="bottom"
              >
                <div className="card">
                <img height="60px"alt="Keys" className="card__image"
                 src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1026205392%2FBeautiful-luxury-home-exterior-at-twilight%2F960x0.jpg%3Ffit%3Dscale"/>
                 <h1>aa</h1>
                </div>
              </Popup> */}
        
        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
    </div>
  );
}