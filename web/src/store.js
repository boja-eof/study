import card from "./components/card/actions";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

const createAppStore = () => {
  const saga = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      card,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
  });

  saga.run(sagas);

  return store;
};

export default createAppStore;
