const baseurl = process.env.NEXT_PUBLIC_API_URL

export default async function getCategories() {
  const url = `${baseurl}/categories`

  const response = await fetch(url)
  console.log('🔴 Response', response)

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
