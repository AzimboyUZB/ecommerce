import { createSlice } from '@reduxjs/toolkit'


const initialState: any = {
  brands: [],
}

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setBrands: (state, { payload }) => {
      state.brands = payload.brands
    },
  },
})

export const { setBrands } = brandsSlice.actions

export default brandsSlice.reducer
