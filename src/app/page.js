import { Suspense } from 'react'

import { Loading } from '@/features/ui'
import { BannerBlock, Facilidades, Newsletter } from '@/features/home'
import { CategoryList, getCategories } from '@/features/category'
import { ProductList, getProducts } from '@/features/product'

export default async function Home() {
  const categories = await getCategories()
  const products = await getProducts()

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BannerBlock />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CategoryList categories={categories} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProductList products={products} />
      </Suspense>
      <Facilidades />
      <Newsletter />
    </div>
  )
}
