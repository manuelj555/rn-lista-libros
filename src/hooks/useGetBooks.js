import { useQuery } from "@tanstack/react-query"
import { getBooks, getReadingList } from "../services/books"
import { useGetReadingList } from "./useGetReadingList"

export function useGetBooks() {
  const { data: books } = useQuery(['books'], () => getBooks(), { suspense: true })
  const { readingList } = useGetReadingList()

  const filteredBooks = books.filter(book => !readingList.some(reading => reading.title === book.title))

  const booksCount = filteredBooks.length

  return {
    books: filteredBooks,
    booksCount,
    readingList,
  }
}
