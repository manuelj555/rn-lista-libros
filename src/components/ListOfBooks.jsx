import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useGetBooks } from '../hooks/useGetBooks'
import Animated, { Layout } from 'react-native-reanimated'
import { Book } from './Book'
import { Title } from './ui/Title'

export function ListOfBooks () {
  const { books, booksCount } = useGetBooks()

  return (
    <View style={styles.container}>
      <Title styles={{ marginVertical: 10 }}>{booksCount} Libros disponibles</Title>
      <Animated.ScrollView contentContainerStyle={styles.booksContainer}>
        {books.map(book => (
          <Book key={book.title} book={book}/>
        ))}
      </Animated.ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  booksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})
