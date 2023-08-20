import { create } from 'zustand'

export const useSelectedBook = create((set) => ({
  selectedBook: null,
  setSelectedBook (bookOrNull) {
    set({ selectedBook: bookOrNull ?? null })
  }
}))

export const useGetSelectedBook = () => useSelectedBook((state) => state.selectedBook)
export const useSelectBook = () => useSelectedBook((state) => state.setSelectedBook)