import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToReadingList, removeFromReadingList } from "../services/books";

export function useBook() {
  const queryClient = useQueryClient()

  const { mutateAsync: add, isLoading: isAdding } = useMutation(book => addToReadingList({ book }), {
    onSuccess() {
      queryClient.invalidateQueries(['reading-list'])
    }
  })

  const { mutateAsync: remove, isLoading: isRemoving } = useMutation(book => removeFromReadingList({ book }), {
    onSuccess() {
      queryClient.invalidateQueries(['reading-list'])
    }
  })

  return {
    add,
    remove,
    isAdding,
    isRemoving,
  }
}
