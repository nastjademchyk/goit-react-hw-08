import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};
const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.search = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
