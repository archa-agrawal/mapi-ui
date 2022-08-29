import React from "react";

import LocationListItem from "./LocationListItem";
import LocationTypes from "../../utils/enums/locationTypes";

export default {
  argTypes: {
    onSelect: {
      action: "on item select",
    },
    onDelete: {
      action: "on item delete",
    },
  },
  title: "Common/Location List Item",
  component: LocationListItem,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <LocationListItem {...args} />;

export const LocationListItemRestaurant = Template.bind({});
LocationListItemRestaurant.args = {
  location: {
    id: 1,
    name: "Ennio's Pizza",
    description: "Fabulous italian place",
    type: LocationTypes.RESTAURANT,
  },
};

export const LocationListItemCafe = Template.bind({});
LocationListItemCafe.args = {
  location: {
    id: 1,
    name: "Barista coffee shop",
    description: "Awesome midtown cafe",
    type: LocationTypes.CAFE,
  },
};

export const LocationListItemLibrary = Template.bind({});
LocationListItemLibrary.args = {
  location: {
    id: 1,
    name: "Forest Heights Library",
    description: "State of the art library",
    type: LocationTypes.LIBRARY,
  },
};

export const LocationListItemSelected = Template.bind({});
LocationListItemSelected.args = {
  location: {
    id: 1,
    name: "Forest Heights Library",
    description: "State of the art library",
    type: LocationTypes.LIBRARY,
  },
  selected: 1,
};
