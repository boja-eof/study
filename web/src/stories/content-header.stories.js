import React from "react";
import ContentHeader from "../components/content-header";

export default {
  title: "ContentHeader",
  component: ContentHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => <ContentHeader {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  title: "test",
  data: "data",
};
