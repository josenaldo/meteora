'use client'

import { Roboto } from 'next/font/google'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '@/styles'
import '@/styles/globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function BaseLayout({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <body className={roboto.className} id="__next">
          <CssBaseline />
          {children}
        </body>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
