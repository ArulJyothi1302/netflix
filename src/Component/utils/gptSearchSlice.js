import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    show: false,
  },
  reducers: {
    toggleSearchPage: (state) => {
      state.show = !state.show;
    },
  },
});
export const { toggleSearchPage } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
