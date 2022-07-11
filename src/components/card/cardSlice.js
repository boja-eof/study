import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
    isLoading: false,
    errorMsg: null,
  },
  reducers: {
    loading: (state) => ({ ...state, isLoading: true, errorMsg: null }),
    loaderr: (state, action) => {
      console.log(action);
      return { ...state, isLoading: false, errorMsg: action.payload };
    },
    loaded: (state, action) => ({ ...state, isLoading: false, items: action.payload }),
  },
});

export const { loading, loaderr, loaded } = cardSlice.actions;

const cardReducer = cardSlice.reducer;
export default cardReducer;
