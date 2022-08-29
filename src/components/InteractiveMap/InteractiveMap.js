import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React from "react";
import InteractiveMap, { Marker } from "react-map-gl";
import GeocoderControl from "../GeoCoderControl/GeoCodeControl";
import MarkerPin from "../MarkerPin/MarkerPin";

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

export default function interactiveMap({
  markers,
  selected: { latitude, longitude },
  onMapClick,
}) {
  const Markers = markers.map(({ longitude, latitude, type }) => (
    <Marker
      key={`${longitude}-${latitude}`}
      longitude={longitude}
      latitude={latitude}
    >
      <MarkerPin type={type} />
    </Marker>
  ));
  return (
    <div style={{ height: "500px" }}>
      <InteractiveMap
        initialViewState={{
          longitude,
          latitude,
          zoom: 13,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={TOKEN}
        onClick={(e) =>
          onMapClick({ longitude: e.lngLat.lng, latitude: e.lngLat.lat })
        }
      >
        {Markers}
        <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
      </InteractiveMap>
    </div>
  );
}
