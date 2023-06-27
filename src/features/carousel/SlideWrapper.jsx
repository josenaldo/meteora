import { Slide as MuiSlide } from '@mui/material'

export default function SlideWrapper({ show, container, children }) {
  console.log('🟢 SlideWrapper', container)

  return (
    <MuiSlide direction="left" in={show} container={container}>
      {children}
    </MuiSlide>
  )
}
