'use client'

import { ResponsiveImage } from '@/features/responsive'
import { SectionTitle } from '@/features/ui'
import { Box, Container, Typography } from '@mui/material'

import images from '@/data/images.json'

const facilities = [
  {
    title: 'PAGUE PELO PIX',
    description: 'Ganhe 5% OFF em pagamentos via PIX',
    icon: images['icones/diamond.png'],
  },

  {
    title: 'TROCA GRÁTIS',
    description: 'Fique livre para trocar em até 30 dias.',
    icon: images['icones/repeat.png'],
  },

  {
    title: 'SUSTENTABILIDADE',
    description: 'Moda responsável, que respeita o meio ambiente.',
    icon: images['icones/flower.png'],
  },
]

export default function FacilitiesBlock() {
  return (
    <Box
      sx={{
        backgroundColor: 'common.black',
        color: 'common.white',
        mt: 9,
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle color="common.white">Facilidades</SectionTitle>

        <Box
          sx={{
            color: 'common.white',
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: '1fr 1fr 1fr',
            },
            gap: 3,
            justifyItems: 'center',
            width: '100%',
          }}
        >
          {facilities.map((facility) => (
            <Facility key={facility.title} facility={facility} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}

function Facility({ facility }) {
  return (
    <Box
      key={facility.title}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 3,
        maxWidth: '300px',
      }}
    >
      <ResponsiveImage images={facility.icon} />
      <Box>
        <Typography
          color="primary"
          sx={{
            fontSize: '1rem',
            fontWeight: '700',
            display: 'block',
            marginBottom: '1rem',
            color: 'primary.main',
          }}
        >
          {facility.title}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.8rem',
          }}
        >
          {facility.description}
        </Typography>
      </Box>
    </Box>
  )
}
