import App from "./components/app";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { loading as cardLoading } from "./components/card/actions";
import createAppStore from "./store";

const store = createAppStore();

store.dispatch(cardLoading());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
