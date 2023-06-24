'use client'

import { SectionTitle } from '@/features/ui'
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material'

export default function Newsletter() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: {
          xs: 4,
          sm: 4,
          md: 5,
          lg: 8,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          padding: {
            xs: 2,
            sm: 5,
          },
          maxWidth: '730px',
          border: '1px solid',
          borderColor: 'common.black',
        }}
      >
        <Typography fontSize="20px" textAlign="center">
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            maxWidth: '496px',
            width: '100%',
          }}
        >
          <TextField
            placeholder="Placeholder"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Button variant="contained" color="secondary" size="large">
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
