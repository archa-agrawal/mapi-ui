import React from "react";

import MarkerPin from "./MarkerPin";
import LocationTypes from "../../utils/enums/locationTypes";

export default {
  title: "Common/Marker Pin",
  component: MarkerPin,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <MarkerPin {...args} />;

export const MarkerPinSample = Template.bind({});
MarkerPinSample.args = {};

export const MarkerPinCafe = Template.bind({});
MarkerPinCafe.args = {
  type: LocationTypes.CAFE,
};

export const MarkerPinRestaurant = Template.bind({});
MarkerPinRestaurant.args = {
  type: LocationTypes.RESTAURANT,
};

export const MarkerPinLibrary = Template.bind({});
MarkerPinLibrary.args = {
  type: LocationTypes.LIBRARY,
};
