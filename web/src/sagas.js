import { fork } from "redux-saga/effects";
import { loadCards } from "./components/card/saga";

function* sagas() {
  yield fork(loadCards);
}

export default sagas;
