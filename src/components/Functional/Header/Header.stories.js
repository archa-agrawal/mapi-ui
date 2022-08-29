import React from "react";

import Header from "./Header";

export default {
  argTypes: {
    onUpdate: {
      action: "text updated",
    },
  },
  title: "Common/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Header {...args} />;

export const HeaderSample = Template.bind({});
HeaderSample.args = {
  heading: "heading",
  description: "description",
};

export const HeaderEmptySample = Template.bind({});
HeaderEmptySample.args = {};
