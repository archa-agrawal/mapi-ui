import React from "react";

import InteractiveMap from "./InteractiveMap";
import LocationTypes from "../../../utils/enums/locationTypes";

export default {
  argTypes: {
    onMapClick: { action: "map clicked" },
  },
  title: "Common/Interactive Map",
  component: InteractiveMap,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <InteractiveMap {...args} />;

export const InteractiveMapSample = Template.bind({});
InteractiveMapSample.args = {
  markers: [
    {
      longitude: -79.4512,
      latitude: 43.6568,
      type: LocationTypes.CAFE,
    },
    {
      longitude: -79.4632,
      latitude: 43.6568,
      type: LocationTypes.RESTAURANT,
    },
  ],
  selected: {
    longitude: -79.4512,
    latitude: 43.6568,
  },
};
