import { useState } from 'react'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, IconButton } from '@mui/material'

export default function Carousel({ children }) {
  const [index, setIndex] = useState(0)

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1

    const numSlides = children.length
    const newIndex = (index + increment + numSlides) % numSlides

    setIndex(newIndex)
  }
  return (
    <div>
      <h1>Carousel</h1>
      <h2>Index: {index}</h2>
      <Box>
        <Arrow direction="left" onClick={() => onArrowClick('left')} />
        <Arrow direction="right" onClick={() => onArrowClick('right')} />
      </Box>
      {children[index]}
    </div>
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
