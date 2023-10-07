import { createTheme } from '@mui/material/styles'
import localFont from 'next/font/local'
import { Colors } from './colors'

export const TTNorms = localFont({
  src: [
    {
      path: '../assets/fonts/TTNorms-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTNorms-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTNorms-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTNorms-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/TTNorms-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.bright_green,
      light: Colors.light_green,
    },
    secondary: {
      main: Colors.bright_orange,
      light: Colors.light_orange,
    },
  },
  typography: {
    fontFamily: TTNorms.style.fontFamily,
  },
})

export default theme
