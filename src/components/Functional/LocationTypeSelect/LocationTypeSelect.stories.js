import React from "react";
import LocationTypeSelect from "./LocationTypeSelect";
import locationTypes from "~utils/enums/locationTypes";

export default {
  argTypes: {
    onSelect: {
      action: "On location type select",
    },
  },
  title: "Common/Location Type Select",
  component: LocationTypeSelect,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <LocationTypeSelect {...args} />;

export const LocationTypeSelectSample = Template.bind({});

LocationTypeSelectSample.args = {
  value: locationTypes.CAFE.name,
};

export const LocationTypeSelectEmpty = Template.bind({});

LocationTypeSelectEmpty.args = {
  value: undefined,
};
