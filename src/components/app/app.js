import "./css/reset.css";
import "./css/fonts.css";
import "./css/common.css";
import "./css/app.css";

import AppHeader from "./header";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Routes from "../../routes";
import { Header as headerConfig } from "../../settings";

const routes = Routes();

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader config={headerConfig} />
      <section>{routes}</section>
    </BrowserRouter>
  );
};

export default App;
