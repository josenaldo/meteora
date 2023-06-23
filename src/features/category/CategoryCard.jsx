'use client'

import { Box, Typography } from '@mui/material'

import { ResponsiveImage } from '@/features/responsive'

export default function CategoryCard({ category }) {
  return (
    <Box key={category.name}>
      <ResponsiveImage images={category.image} fill />
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: 'common.black',
          color: 'common.white',
          textAlign: 'center',
          py: 1,
        }}
      >
        <Typography>{category.name}</Typography>
      </Box>
    </Box>
  )
}
