import { NextResponse } from 'next/server'
import images from '@/data/images.json'

const products = [
  {
    title: 'Camiseta Conforto',
    description:
      'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
    price: 'R$ 70,00',

    image: images['cards/camiseta.png'],
  },
  {
    title: 'Calça Alfaiataria',
    description:
      'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
    price: 'R$ 180,00',
    image: images['cards/calca.png'],
  },
  {
    title: 'Tênis Chunky',
    description:
      'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
    price: 'R$ 250,00',
    image: images['cards/tenis.png'],
  },
  {
    title: 'Jaqueta Jeans',
    description:
      'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
    price: 'R$ 150,00',
    image: images['cards/jaqueta.png'],
  },
  {
    title: 'Óculos Redondo',
    description:
      'Armação metálica em grafite com lentes arredondadas. Sem erro!',
    price: 'R$ 120,00',
    image: images['cards/oculos.png'],
  },
  {
    title: 'Bolsa coringa',
    description:
      'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
    price: 'R$ 120,00',
    image: images['cards/bolsa.png'],
  },
]

export async function GET(request) {
  return NextResponse.json(products)
}
