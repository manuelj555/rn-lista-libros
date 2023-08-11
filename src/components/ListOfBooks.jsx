import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { getBooks } from '../services/books'
import Book from './Book'
import Title from './ui/Title'

export default function ListOfBooks() {
  const { data: books } = useQuery(['books'], () => getBooks(), { suspense: true })
  const booksCount = books.length

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Title styles={{ marginLeft: 10 }}>{booksCount} Libros disponibles</Title>}
        data={books}
        renderItem={({ item }) => <Book key={item.title} book={item} />}
        keyExtractor={book => book.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})
