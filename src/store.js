import cardReducer from "./components/card/cardSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    card: cardReducer,
  },
});
