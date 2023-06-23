'use client'

import { Box, Container } from '@mui/material'

import { SectionTitle } from '@/features/ui'
import { CategoryCard } from '@/features/category'

export default function CategoryList({ categories }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 9,
      }}
    >
      <SectionTitle>Busque por Categoria</SectionTitle>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(6, 1fr)',
          },
          gap: 3.5,
        }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </Box>
    </Container>
  )
}
