'use client'

import { ResponsiveImage } from '@/features/responsive'
import images from '@/data/images.json'
import { Caroulsel, CarouselItem } from '@/features/carousel'

export default function BannerBlock() {
  return (
    <Caroulsel>
      <CarouselItem title="Slide 1" backgroundColor="red">
        <ResponsiveImage images={images['banner-carousel-1.png']} fill />
      </CarouselItem>
      <CarouselItem title="Slide 2" backgroundColor="blue">
        <ResponsiveImage images={images['banner-carousel-2.png']} fill />
      </CarouselItem>
      <CarouselItem title="Slide 3" backgroundColor="green">
        <ResponsiveImage images={images['banner-carousel-3.png']} fill />
      </CarouselItem>
    </Caroulsel>
  )
}
