import React from "react";

import InlineEdit from "./InlineEdit";

export default {
  argTypes: {
    onUpdate: {
      action: "text updated",
    },
  },
  title: "Common/Inline edit",
  component: InlineEdit,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <InlineEdit {...args} />;

export const InlineEditSample = Template.bind({});
InlineEditSample.args = {
  value: "test input",
};
