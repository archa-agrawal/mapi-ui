import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React from "react";
import { Marker, Map } from "react-map-gl";
import GeocoderControl from "../GeoCoderControl/GeoCodeControl";
import MarkerPin from "../MarkerPin/MarkerPin";

const TOKEN = process.env.REACT_APP_MAPBOX_KEY;

export default function interactiveMap({ id, markers, selected, onMapClick }) {
  let selectedLocation = {
    longitude: -79.3871,
    latitude: 43.6426,
  };
  if (selected) {
    const foundMarker = markers?.find((marker) => marker.id === selected);
    if (foundMarker) {
      selectedLocation = foundMarker;
    }
  }
  const Markers = markers?.map(({ longitude, latitude, type }) => (
    <Marker
      key={`${longitude}-${latitude}`}
      longitude={longitude}
      latitude={latitude}
    >
      <MarkerPin type={type} />
    </Marker>
  ));
  return (
    <Map
      id={id}
      initialViewState={{
        longitude: selectedLocation.longitude,
        latitude: selectedLocation.latitude,
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
    </Map>
  );
}
