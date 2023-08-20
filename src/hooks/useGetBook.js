import { useQuery } from '@tanstack/react-query'
import { getBook, getBooks, getReadingList } from '../services/books'
import { useGetReadingList } from './useGetReadingList'

export function useGetBook (title) {
  const { data: book } = useQuery(['book', title], () => getBook({ title }), { suspense: true })

  return book
}
