import { Facilidades, Newsletter, Produtos } from '@/features/home'

export default async function Home() {
  return (
    <div>
      <Produtos />
      <Facilidades />
      <Newsletter />
    </div>
  )
}
