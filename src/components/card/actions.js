import { createSlice } from "@reduxjs/toolkit";

export const {
  reducer: card,
  actions: { loading, loaderr, loaded },
} = createSlice({
  name: "card",
  initialState: {
    items: [],
    isLoading: false,
    errorMsg: null,
  },
  reducers: {
    loading: (state) => ({ ...state, isLoading: true, errorMsg: null }),
    loaded: (state, action) => ({ ...state, isLoading: false, items: action.payload }),
    loaderr: (state, action) => ({ ...state, isLoading: false, errorMsg: action.payload }),
  },
});

export default card;
