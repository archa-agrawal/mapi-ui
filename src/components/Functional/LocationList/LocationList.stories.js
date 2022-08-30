import React from "react";

import LocationList from "./LocationList";
import LocationTypes from "~utils/enums/locationTypes";

export default {
  argTypes: {
    onSelect: {
      action: "on item select",
    },
    onDelete: {
      action: "on item delete",
    },
  },
  title: "Common/Location List",
  component: LocationList,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <LocationList {...args} />;

export const LocationListSample = Template.bind({});
LocationListSample.args = {
  locations: [
    {
      id: 1,
      name: "Ennio's Pizza",
      description: "Fabulous italian place",
      type: LocationTypes.RESTAURANT.name,
      longitude: -79.4512,
      latitude: 43.6568,
    },
    {
      id: 2,
      name: "Barista coffee shop",
      description: "Awesome midtown cafe",
      type: LocationTypes.CAFE.name,
      longitude: -79.4832,
      latitude: 43.6568,
    },
    {
      id: 3,
      name: "Forest Heights Library",
      description: "State of the art library",
      type: LocationTypes.LIBRARY.name,
      longitude: -79.4632,
      latitude: 43.6568,
    },
  ],
  selected: 3,
};
