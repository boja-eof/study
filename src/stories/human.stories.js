import React from "react";
import Human, { TYPE_MEN } from "./../components/human";

export default {
  title: "Human",
  component: Human,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <Human {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  type: TYPE_MEN,
};
