import { SectionTitle } from '@/features/ui'
import { Box, Container, Typography } from '@mui/material'
import images from '@/data/images.json'
import { ResponsiveImage } from '@/features/responsive'

const categorias = [
  {
    name: 'Camisetas',
    image: images['categorias/camisetas.png'],
  },
  {
    name: 'Bolsas',
    image: images['categorias/bolsas.png'],
  },
  {
    name: 'Calçados',
    image: images['categorias/calcados.png'],
  },
  {
    name: 'Calças',
    image: images['categorias/calcas.png'],
  },
  {
    name: 'Casacos',
    image: images['categorias/casacos.png'],
  },
  {
    name: 'Óculos',
    image: images['categorias/oculos.png'],
  },
]

export default function Categorias() {
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
        {categorias.map((categoria) => (
          <CategoryCard key={categoria.name} categoria={categoria} />
        ))}
      </Box>
    </Container>
  )
}

function CategoryCard({ categoria }) {
  return (
    <Box key={categoria.name}>
      <ResponsiveImage images={categoria.image} fill />
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: 'common.black',
          color: 'common.white',
          textAlign: 'center',
          py: 1,
        }}
      >
        <Typography>{categoria.name}</Typography>
      </Box>
    </Box>
  )
}
