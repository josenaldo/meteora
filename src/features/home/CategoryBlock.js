'use client'

import { CategoryList } from '@/features/category'

export default async function CategoryBlock({ categories }) {
  return <CategoryList categories={categories} />
}
