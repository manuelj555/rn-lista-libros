const apiUrl = 'https://raw.githubusercontent.com/midudev/pruebas-tecnicas/main/pruebas/01-reading-list/books.json'

export async function getBooks() {
  const response = await fetch(apiUrl)
  const books = await response.json()

  return (books?.library ?? []).map(({ book }) => book)
}