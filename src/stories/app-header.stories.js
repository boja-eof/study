import React from "react";
import AppHeader from "../components/app/header";
import { BrowserRouter } from "react-router-dom";

import "../components/app/css/fonts.css";
import "../components/app/css/reset.css";
import "../components/app/css/common.css";

export default {
  title: "AppHeader",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => {
  return (
    <BrowserRouter>
      <AppHeader {...args} />
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
