import { call, put, takeLatest } from "redux-saga/effects";
import { loaded, loaderr, loading } from "./actions";

import { getCards } from "./api";

export function* loadCards() {
  const gen = function* () {
    try {
      const response = yield call(getCards);
      yield put(loaded(response));
    } catch (error) {
      yield put(loaderr(error));
    }
  };

  yield takeLatest(loading, gen);
}
