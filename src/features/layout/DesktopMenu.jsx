'use client'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from '@/features/ui'

const MenuLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
}))

export default function Menu() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/nossas-lojas">Nossas lojas</MenuLink>
      <MenuLink href="/novidades">Novidades</MenuLink>
      <MenuLink href="/promocoes">Promoções</MenuLink>
    </Box>
  )
}
