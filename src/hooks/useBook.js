import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addToReadingList, removeFromReadingList } from '../services/books'
import { useSelectBook } from '../store/useSelectedBook'

export function useBook () {
  const queryClient = useQueryClient()
  const cleanSelectedBook = useSelectBook()

  const { mutateAsync: add, isLoading: isAdding } = useMutation(book => addToReadingList({ book }), {
    onSuccess (book) {
      cleanSelectedBook()
      setTimeout(() => {
        queryClient.invalidateQueries(['reading-list'])
        queryClient.setQueryData(['reading-list'], (items) => {
          return [...items, book]
        })
      }, 200)
    }
  })

  const { mutateAsync: remove, isLoading: isRemoving } = useMutation(book => removeFromReadingList({ book }), {
    onSuccess (book) {
      cleanSelectedBook()
      setTimeout(() => {
        queryClient.invalidateQueries(['reading-list'])
        // queryClient.setQueryData(['reading-list'], (items) => {
        //   return items.filter(({ title }) => title !== book.title)
        // })
      }, 200)
    }
  })

  return {
    add,
    remove,
    isAdding,
    isRemoving,
  }
}
