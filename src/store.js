import cardReducer from "./components/card/actions";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      card: cardReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default createAppStore;
