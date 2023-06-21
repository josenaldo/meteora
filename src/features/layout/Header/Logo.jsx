'use client'
import { ResponsiveImage } from '@/features/responsive'
import images from '@/data/images.json'

export default function Logo() {
  return <ResponsiveImage images={images['logo.png']} />
}
