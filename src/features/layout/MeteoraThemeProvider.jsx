'use client'

import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { theme } from '@/styles'

export default function MeteoraThemeProvider({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
