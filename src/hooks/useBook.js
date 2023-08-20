import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addToReadingList, removeFromReadingList } from '../services/books'
import { useSelectBook } from '../store/useSelectedBook'

export function useBook () {
  const queryClient = useQueryClient()
  const cleanSelectedBook = useSelectBook()

  const { mutateAsync: add, isLoading: isAdding } = useMutation(book => addToReadingList({ book }), {
    onSuccess () {
      cleanSelectedBook()
      queryClient.invalidateQueries(['reading-list'])
    },
    onMutate (book) {
      // queryClient.setQueryData(['reading-list'], (items) => {
      //   return [...items, book]
      // })
    }
  })

  const { mutateAsync: remove, isLoading: isRemoving } = useMutation(book => removeFromReadingList({ book }), {
    onSuccess () {
      cleanSelectedBook()
      queryClient.invalidateQueries(['reading-list'])
    },
    onMutate (book) {
      // queryClient.setQueryData(['reading-list'], (items) => {
      //   return items.filter(({ title }) => title !== book.title)
      // })
    }
  })

  return {
    add,
    remove,
    isAdding,
    isRemoving,
  }
}
