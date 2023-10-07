import { createSlice } from '@reduxjs/toolkit'
import { IEvents } from '../types'

const initialState: IEvents = {
  brands: [],
}

const eventsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setEvents: (state, {payload}) => {
      state.brands = payload.events
    },
  },
})

export const { setEvents } = eventsSlice.actions

export default eventsSlice.reducer
