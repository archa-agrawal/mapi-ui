import React from "react";

import MapCard from "./MapCard";

export default {
  title: "Common/Map card",
  component: MapCard,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <MapCard {...args} />;

export const MapCardSample = Template.bind({});
MapCardSample.args = {
  user: {
    name: "Vibhor",
  },
  heading: "Test Map",
  description: "This is a test map",
  date: "27 Sept 2022",
  theme: "bar1",
};
