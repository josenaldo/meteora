'use client'

import { ResponsiveImage } from '@/features/responsive'
import images from '@/data/images.json'

export default function BannerBlock() {
  return <ResponsiveImage images={images['banner-carousel-1.png']} fill />
}
