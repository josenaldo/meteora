'use client'
import { Box } from '@mui/material'
import Image from 'next/image'

import { useDevice } from '@/features/hooks'

const logoSizes = {
  desktop: {
    width: 132,
    height: 32,
  },
  tablet: {
    width: 100,
    height: 24,
  },
  mobile: {
    width: 126,
    height: 18,
  },
}

export default function Logo() {
  const device = useDevice()

  const { width, height } = logoSizes[device]

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Image
        src={`/assets/images/${device}/logo.png`}
        alt="logo"
        width={width}
        height={height}
      />
    </Box>
  )
}
