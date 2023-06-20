'use client'

import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '17px 23px',
        backgroundColor: 'common.black',
        color: 'common.white',
        width: '100%',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontSize: '13px',
        }}
      >
        2023 &copy; Desenvolvido por Josenaldo de Oliveira Matos Filho | Projeto
        sem fins comerciais
      </Typography>
    </Box>
  )
}
