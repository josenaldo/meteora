import { Box } from '@mui/material'

export default function CarouselItem({ title, backgroundColor, children }) {
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
