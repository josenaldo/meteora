'use client'

import {
  Banner,
  Categorias,
  Facilidades,
  Newsletter,
  Produtos,
} from '@/features/home'
import { Box, Button, Grid, Stack } from '@mui/material'

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0',
        margin: '0',
        padding: '0',
      }}
    >
      <Banner />
      <Categorias />
      <Produtos />
      <Facilidades />
      <Newsletter />
    </Box>
  )
}
