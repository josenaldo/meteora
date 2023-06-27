import { useState, useRef } from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, IconButton, Slide as MuiSlide } from '@mui/material'

export default function Carousel({ children }) {
  const [index, setIndex] = useState(0)
  const containerRef = useRef(null)

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1

    const numSlides = children.length
    const newIndex = (index + increment + numSlides) % numSlides

    setIndex(newIndex)
  }

  return (
    <Box>
      <h1>Carousel</h1>
      <h2>Index: {index}</h2>
      <Box>
        <Arrow direction="left" onClick={() => onArrowClick('left')} />
        <Arrow direction="right" onClick={() => onArrowClick('right')} />
      </Box>
      <Box ref={containerRef}>
        <Box sx={{ width: '100%' }}>
          {Array.isArray(children) ? (
            children.map((child, i) => {
              return (
                <MuiSlide
                  direction="left"
                  key={`carousel-item${i}`}
                  container={containerRef.current}
                  in={index === i}
                >
                  <Box>{child}</Box>
                </MuiSlide>
              )
            })
          ) : (
            <MuiSlide direction="up" container={containerRef.current} in={true}>
              <Box>{children}</Box>
            </MuiSlide>
          )}
        </Box>
      </Box>
    </Box>
  )
}

function Arrow({ direction, onClick }) {
  const icon = direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />

  return (
    <IconButton size="large" onClick={onClick}>
      {icon}
    </IconButton>
  )
}
