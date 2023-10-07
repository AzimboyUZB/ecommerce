import { createSlice } from '@reduxjs/toolkit'
import { IProductCard } from '../types'

const initialState: IProductCard = {
  direction: 'row',
}
const cardDirection = createSlice({
  name: 'cardDirection',
  initialState,
  reducers: {
    setDirection: (state, action) => {
      state.direction = action.payload.direction
    },
  },
})

export const { setDirection } = cardDirection.actions
export default cardDirection.reducer
