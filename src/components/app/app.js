import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./header";
import { header as headerConfig } from "../../settings";
import Routes from "../../routes";
import "./app.css";

const style = {
  marginTop: "5em",
};

const App = () => {
  return (
    <BrowserRouter>
      <AppHeader config={headerConfig} />
      <section style={style}>{Routes()}</section>
    </BrowserRouter>
  );
};

export default App;
