import { createSlice } from '@reduxjs/toolkit'
import { IProducts, SetProductsActionT } from '../types'

const initialState: IProducts = {
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: SetProductsActionT) => {
      state.products = action.payload.products
    },
  },
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
