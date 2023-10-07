import { createSlice } from '@reduxjs/toolkit'

export enum LangEnums {
  UZ = 'uz',
  RU = 'ru',
  ENG = 'en',
}

const initialState = {
  lang: LangEnums.UZ,
}

const LanguageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLang: (state, action) => {
      localStorage.setItem('language', action.payload)
      state.lang = action.payload
    },
    setInitialLang: (state, action) => {
        state.lang = action.payload
    }
  },
})

export const { setLang, setInitialLang } = LanguageSlice.actions

export default LanguageSlice.reducer
