const baseurl = process.env.NEXT_PUBLIC_API_URL

export default async function getCategories() {
  try {
    const url = `${baseurl}/categories`

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const data = await response.json()

    return data
  } catch (error) {
    return { error: error.message || error }
  }
}
