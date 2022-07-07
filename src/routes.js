import React from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";
import Home from "./components/home";
import Men from "./components/men";
import Women from "./components/women";
import WhatNews from "./components/what-news";
import HowItWorks from "./components/how-it-works";
import Login from "./components/login";
import Signup from "./components/signup";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/men" element={<Men />}></Route>
      <Route path="/women" element={<Women />}></Route>
      <Route path="/how-it-works" element={<HowItWorks />}></Route>
      <Route path="/whats-new" element={<WhatNews />}></Route>
      <Route path="/user/login" element={<Login />}></Route>
      <Route path="/user/signup" element={<Signup />}></Route>
    </ReactRoutes>
  );
};

export default Routes;
