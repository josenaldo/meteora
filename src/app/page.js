'use client'

import { Banner, Categorias, Facilidades, Produtos } from '@/features/home'
import { Box, Button, Grid, Stack } from '@mui/material'

export default function Home() {
  return (
    <Stack>
      <Banner />
      <Categorias />
      <Produtos />
      <Facilidades />
    </Stack>
  )
}
