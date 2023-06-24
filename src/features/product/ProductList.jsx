'use client'

import { Box, Container } from '@mui/material'

import { SectionTitle } from '@/features/ui'
import { ProductCard } from '@/features/product'

export default function ProductList({ products }) {
  console.log(products)
  if (!products || products.error) return null

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 9,
      }}
    >
      <SectionTitle>Produtos que estão bombando!</SectionTitle>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 3.5,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </Box>
    </Container>
  )
}
