import { createSlice } from '@reduxjs/toolkit'
import { ICategorySlice } from '../types'

const initialState: ICategorySlice = {
  categories: [],
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload.categories
    },
  },
})

export const { setCategories } = categorySlice.actions

export default categorySlice.reducer
