import { useQuery } from "@tanstack/react-query"
import { getReadingList } from "../services/books"

export function useGetReadingList() {
  const { data: readingList } = useQuery(['reading-list'], () => getReadingList(), { suspense: true })

  return {
    readingList,
    total: readingList.length,
  }
}
