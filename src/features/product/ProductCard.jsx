'use client'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { ResponsiveImage } from '@/features/responsive'

export default function ProductCard({ product }) {
  return (
    <Card variant="outlined">
      <CardMedia>
        <ResponsiveImage images={product.image} fill />
      </CardMedia>
      <CardContent>
        <Typography variant="productTitle">{product.title}</Typography>
        <Typography variant="productDescription">
          {product.description}
        </Typography>
        <Typography variant="productPrice">{product.price}</Typography>
        <Button variant="contained" color="secondary">
          Ver mais
        </Button>
      </CardContent>
    </Card>
  )
}
