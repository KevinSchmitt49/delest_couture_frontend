import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;
