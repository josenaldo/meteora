'use client'
import {
  purple as primaryColor,
  deepPurple as secondaryColor,
  grey as surficeColor,
} from '@mui/material/colors/'

const palette = {
  mode: 'light',
  primary: {
    main: '#DAFF01',
  },
  secondary: {
    main: '#9353FF',
  },
  white: {
    main: '#FFFFFF',
  },
  black: {
    main: '#000000',
  },
  menu: {
    main: '#343A40',
  },
  surfice: {
    main: '#cccccc',
  },
  background: {
    default: '#FFFFFF',
    paper: '#CCCCCC',
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  banners: {
    banner1: '#EE6471',
    banner2: '#F87F46',
    banner3: '#9353FF',
  },
}

export { primaryColor, secondaryColor, surficeColor }
export default palette
