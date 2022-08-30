import React from "react";

import Header from "./Header";

export default {
  argTypes: {
    onHeaderUpdate: {
      action: "header updated",
    },
    onDescriptionUpdate: {
      action: "description updated",
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
