import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../types";

const initialState: ICart = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload: { product, setValue } }) => {
      const isExist = state.items.some((item) => item.id === product.id);

      state.items = isExist
        ? state.items.map((item) =>
            item.id === product.id && item.quantity
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.items, { ...product, quantity: 1 }];

      setValue(state);
    },
    deleteCart: (state, { payload: {id, setValue} }) => {
      state.items = state.items.filter((item) => item.id !== id);

      setValue(state)

    },
    increaseCart: (state, { payload: { id, setValue } }) => {
      state.items = state.items.map((item) =>
        item.id === id && item.quantity
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setValue(state);
    },
    decreaseCart: (state, { payload: { id, setValue } }) => {
      state.items = state.items.map((item) =>
        item.id === id && item.quantity
          ? { ...item, quantity: item.quantity !== 1 ? item.quantity - 1 : 1 }
          : item
      );
      setValue(state);
    },
    updateCart: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setCart, deleteCart, increaseCart, decreaseCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
