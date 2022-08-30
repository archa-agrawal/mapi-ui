import React from "react";

import SiteHeader from "./SiteHeader";

export default {
  argTypes: {
    navigate: {
      action: "navigate to",
    },
    createNewMap: {
      action: "new map created",
    },
  },
  title: "Common/Site Header",
  component: SiteHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <SiteHeader {...args} />;

export const HeaderSample = Template.bind({});
