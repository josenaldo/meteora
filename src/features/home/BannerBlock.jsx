'use client'

import { ResponsiveImage } from '@/features/responsive'
import images from '@/data/images.json'
import { Caroulsel, Slide } from '@/features/carousel'

export default function BannerBlock() {
  return (
    <Caroulsel>
      <Slide title="Slide 1" backgroundColor="red">
        <ResponsiveImage images={images['banner-carousel-1.png']} fill />
      </Slide>
      <Slide title="Slide 2" backgroundColor="blue">
        <ResponsiveImage images={images['banner-carousel-2.png']} fill />
      </Slide>
      <Slide title="Slide 3" backgroundColor="green">
        <ResponsiveImage images={images['banner-carousel-3.png']} fill />
      </Slide>
    </Caroulsel>
  )
}
