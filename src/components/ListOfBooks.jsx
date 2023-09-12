import React from 'react'
import { View } from 'react-native'
import { useGetBooks } from '../hooks/useGetBooks'
import { Book } from './Book'
import { Title } from './ui/Title'
import { AnimatedScrollView } from './ui/ScrollView'

export function ListOfBooks () {
  const { books, booksCount } = useGetBooks()

  return (
    <View className="flex-1 mt-4">
      <Title className="my-2">{booksCount} Libros disponibles</Title>

      <AnimatedScrollView
        showScroll={false}
        containerClassName="flex-row flex-wrap items-center justify-between p-2"
        contentContainerStyle={{
          gap: 10,
        }}>
        {books.map(book => (
          <Book key={book.title} book={book}/>
        ))}
      </AnimatedScrollView>
    </View>
  )
}
