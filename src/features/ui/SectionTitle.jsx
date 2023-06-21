import { Typography } from '@mui/material'

export default function SectionTitle({ children }) {
  return (
    <Typography
      variant="h2"
      sx={{
        textAlign: 'center',
        mb: 4,
      }}
    >
      {children}
    </Typography>
  )
}
