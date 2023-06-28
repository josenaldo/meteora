'use client'

import { Box } from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

import Carousel from 'react-material-ui-carousel'

import { ResponsiveImage } from '@/features/responsive'
import images from '@/data/images.json'

export default function BannerBlock() {
  return (
    <Box
      sx={{
        mt: '-3px',
      }}
    >
      <Carousel
        animation="slide"
        NextIcon={<PlayArrowIcon />}
        PrevIcon={
          <PlayArrowIcon
            sx={{
              transform: 'scaleX(-1)',
            }}
          />
        }
        navButtonsAlwaysVisible
        navButtonsProps={{
          style: {
            backgroundColor: 'transparent',
          },
        }}
        IndicatorIcon={<HorizontalRuleIcon size="large" />}
        indicatorContainerProps={{
          style: {
            position: 'relative',
            top: '-50px',
            zIndex: 100,
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'white',
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: 'rgba(255, 255, 255, 0.5)',
          },
        }}
        autoPlay={false}
      >
        <ResponsiveImage images={images['banner-carousel-1.png']} fill />
        <ResponsiveImage images={images['banner-carousel-2.png']} fill />
        <ResponsiveImage images={images['banner-carousel-3.png']} fill />
      </Carousel>
    </Box>
  )
}
