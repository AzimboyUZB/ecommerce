import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../types";

const initialState: ICart = {
  items: [],
};


const favouriteCartSlice = createSlice({
    name: "favouriteCart",
    initialState,
    reducers: {
      setFavouriteCart: (state, { payload: {product, setValue} }) => {
        const isExist = state.items.some((item) => item.id === product.id);
  
        state.items = isExist
          ? state.items.map((item) =>
              item.id === product.id && item.quantity
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
  
          : [...state.items, { ...product, quantity: 1 }];

        setValue(state)

      },
      deleteFavouriteCart: (state, {payload: {id, setValue}}) => {
        state.items = state.items.filter((item) => item.id !== id);

      setValue(state)
      },
      updateFavouriteCart: (state, {payload}) => {
        state.items = payload
      },

    },
  });
  
  export const { setFavouriteCart,deleteFavouriteCart, updateFavouriteCart } =
  favouriteCartSlice.actions;
  
  export default favouriteCartSlice.reducer;