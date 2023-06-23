import { CategoryList } from '@/features/category'

async function getCategories() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`
  console.log('🟢 URL', url)

  const response = await fetch(url)
  console.log('🟢 Response', response)

  if (!response.ok) {
    console.log('🔴 Response not ok', response)
    throw new Error(response.statusText)
  }

  const data = await response.json()
  console.log('🟢 Data', data)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}

export default async function CategoryBlock() {
  const categories = await getCategories()

  // return <CategoryList categories={categories} />
  return (
    <ul>
      {categories.map((cat) => (
        <li key={cat.name}>{cat.name}</li>
      ))}
    </ul>
  )
}
