import "../components/app/css/reset.css";
import "../components/app/css/fonts.css";
import "../components/app/css/common.css";

import { BrowserRouter } from "react-router-dom";
import Header from "../components/app/header";
import React from "react";

export default {
  title: "Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => {
  return (
    <BrowserRouter>
      <Header {...args} />
    </BrowserRouter>
  );
};

export const Basic = Template.bind({});

Basic.args = {
  config: {
    title: "test",
    items: {
      "/item-1": "item1",
      "/item-2": "item2",
    },
    actions: {
      "/action-1": "action1",
      "/action-2": "action2",
    },
  },
};
