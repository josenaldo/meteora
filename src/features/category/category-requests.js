const baseurl = process.env.NEXT_PUBLIC_API_URL

export default async function getCategories() {
  const url = `${baseurl}/categories`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}
