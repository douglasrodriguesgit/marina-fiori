import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB238ohuMKrMEk7GaPOWvjpsuWZabC4Shg",
  });

  const position = { lat: -22.926491, lng: -47.019747 };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            maxWidth: "400px",
            minWidth: "150px",
            height: "100px",
            border: "solid 1px #9a9f8d",
            borderRadius: "0.5rem",
          }}
          center={position}
          zoom={11}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Map;
