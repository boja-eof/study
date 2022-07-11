import React from "react";
import Card from "../components/card";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => {
  return (
    <BrowserRouter>
      <Card {...args} />
    </BrowserRouter>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  name: "Belt for Women",
  slug: "belt-for-women",
  description: "A very nice belt for women.",
  image: "/images/stock/belt-female.jpg",
};
