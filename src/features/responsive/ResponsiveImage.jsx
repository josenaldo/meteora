/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line jsx-a11y/alt-text
'use client'

import Image from 'next/image'
import PropTypes from 'prop-types'

import { useDevice } from '@/features/responsive'
import { Box } from '@mui/material'

export default function ResponsiveImage({ images, fill = false }) {
  const device = useDevice()

  if (!device) {
    return null
  }

  const { url, alt, width, height } = images[device]

  const sxBox = {
    display: 'block',
    position: 'relative',
  }

  const imageProps = {
    src: url,
    alt,
  }

  if (fill) {
    sxBox.width = '100%'
    sxBox.aspectRatio = `${width} / ${height}`
    imageProps.fill = true
  } else {
    sxBox.width = width
    sxBox.height = height
    imageProps.width = width
    imageProps.height = height
  }

  return (
    <Box sx={{ ...sxBox }}>
      <Image {...imageProps} />
    </Box>
  )
}

ResponsiveImage.propTypes = {
  images: PropTypes.shape({
    desktop: PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    tablet: PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    mobile: PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
