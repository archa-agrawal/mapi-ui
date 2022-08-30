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

const Template = (args) => (
  <div style={{ height: "500px" }}>
    <InteractiveMap {...args} />
  </div>
);

export const InteractiveMapSample = Template.bind({});
InteractiveMapSample.args = {
  id: 1,
  markers: [
    {
      id: 1,
      longitude: -79.4512,
      latitude: 43.6568,
      type: LocationTypes.CAFE.name,
    },
    {
      id: 2,
      longitude: -79.4632,
      latitude: 43.6568,
      type: LocationTypes.RESTAURANT.name,
    },
  ],
};
