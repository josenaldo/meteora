import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const devices = {
  xs: 'mobile',
  sm: 'tablet',
  md: 'desktop',
  lg: 'desktop',
  xl: 'desktop',
}

export default function useDevice() {
  const theme = useTheme()

  const matches = {
    xs: useMediaQuery(theme.breakpoints.up('xs')),
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    md: useMediaQuery(theme.breakpoints.up('md')),
    lg: useMediaQuery(theme.breakpoints.up('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl')),
  }

  const keys = Object.keys(matches).reverse()

  const width =
    keys.reduce((output, key) => {
      if (matches[key] && !output) {
        output = devices[key]
      }
      return output
    }, null) || 'desktop'

  return width
}
