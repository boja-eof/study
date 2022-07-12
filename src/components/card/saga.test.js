import { call, put } from "redux-saga/effects";
import { error, response } from "../../testData";
import { loaded, loaderr, loading } from "./actions";

import { getCards } from "./api";
import { loadCards } from "./saga";

describe("saga:card", () => {
  const gen = loadCards();
  const yieldObj = gen.next().value;
  const action = yieldObj.payload.args[0];
  const loadSaga = yieldObj.payload.args[1];

  it("fork", () => {
    expect(yieldObj.type).toEqual("FORK");
  });

  it("loading", () => {
    expect(action).toEqual(loading);
  });

  it("call getCards", () => {
    const value = call(getCards);

    const saga = loadSaga();
    expect(saga.next().value).toEqual(value);
  });

  it("put loaded response", () => {
    const value = put(loaded(response));

    const saga = loadSaga();
    saga.next();
    expect(saga.next(response).value).toEqual(value);
  });

  it("put loaderr", () => {
    const value = put(loaderr(error));

    const saga = loadSaga();
    saga.next();
    expect(saga.throw(error).value).toEqual(value);
  });
});
