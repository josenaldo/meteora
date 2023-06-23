'use client'

import { CategoryList, getCategories } from '@/features/category'

export default async function CategoryBlock() {
  const categories = await getCategories()

  return <CategoryList categories={categories} />
}
