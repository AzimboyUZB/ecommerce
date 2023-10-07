import { createSlice } from "@reduxjs/toolkit";
import { Ilayout } from "../types";

const initialState: Ilayout = {
  hoverMenuIsOpen: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleHoverMenu: (state) => {
      state.hoverMenuIsOpen = !state.hoverMenuIsOpen;
    },
  },
});

export const { toggleHoverMenu } = layoutSlice.actions;

export default layoutSlice.reducer;
