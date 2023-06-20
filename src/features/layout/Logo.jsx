'use client'
import { Box } from '@mui/material'
import Image from 'next/image'
import logoDesktop from '@/assets/images/logo-desktop.png'
import logoMobile from '@/assets/images/logo-mobile.png'
import logoTablet from '@/assets/images/logo-tablet.png'

export default function Logo() {
  return (
    <Box>
      <Box
        component={Image}
        src={logoDesktop}
        alt="logo"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
        }}
      />
      <Box
        component={Image}
        src={logoTablet}
        alt="logo"
        sx={{
          display: { xs: 'none', sm: 'block', md: 'none' },
        }}
      />
      <Box
        component={Image}
        src={logoMobile}
        alt="logo"
        sx={{
          display: { xs: 'block', sm: 'none', md: 'none' },
        }}
      />
    </Box>
  )
}
