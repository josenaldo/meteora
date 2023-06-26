import { Box } from '@mui/material'

export default function Slide({ children, title, backgroundColor }) {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        width: '100%',
      }}
    >
      <h1>{title}</h1>
      {children}
    </Box>
  )
}
