'use client'
import { Box, Button, Grid, Stack } from '@mui/material'

export default function Home() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Stack direction="row" columnGap={1}>
        <Box>CArroussel</Box>
        <Button variant="text" className="text-red-500">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Grid>
  )
}
