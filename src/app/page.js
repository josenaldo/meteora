import { getCategories } from '@/features/category'
import {
  BannerBlock,
  CategoryBlock,
  Facilidades,
  Newsletter,
  Produtos,
} from '@/features/home'
import { Loading } from '@/features/ui'
import { Suspense } from 'react'

export default async function Home() {
  const categories = await getCategories()

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BannerBlock />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CategoryBlock categories={categories} />
      </Suspense>
      <Produtos />
      <Facilidades />
      <Newsletter />
    </div>
  )
}
