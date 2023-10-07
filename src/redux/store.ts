import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";
import cartSlice from "./slices/cartSlice";
import favouriteCartSlice from "./slices/favouriteCartSlice";
import productCardSlice from "./slices/cardDirectionSlice";
import productsSlice from "./slices/productsSlice";
import categorySlice from "./slices/categorySlice";
import brandsSlice from "./slices/brandsSlice";
import eventSlice from "./slices/eventSlice";
import LanguageSlice from './slices/languageSlice';

const store = configureStore({
  reducer: {
    layout: layoutSlice,
    cart: cartSlice,
    favouriteCart: favouriteCartSlice,
    cardDirection: productCardSlice,
    products: productsSlice,
    categories: categorySlice,
    brands: brandsSlice,
    events: eventSlice,
    language: LanguageSlice
  },
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;
export default store;

