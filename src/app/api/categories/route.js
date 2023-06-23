import { NextResponse } from 'next/server'
import images from '@/data/images.json'

const categorias = [
  {
    name: 'Camisetas',
    image: images['categorias/camisetas.png'],
  },
  {
    name: 'Bolsas',
    image: images['categorias/bolsas.png'],
  },
  {
    name: 'Calçados',
    image: images['categorias/calcados.png'],
  },
  {
    name: 'Calças',
    image: images['categorias/calcas.png'],
  },
  {
    name: 'Casacos',
    image: images['categorias/casacos.png'],
  },
  {
    name: 'Óculos',
    image: images['categorias/oculos.png'],
  },
]

export async function GET(request) {
  // console.log('🔵 REQUESTING CATEGORIES', request)
  return NextResponse.json(categorias)
}
