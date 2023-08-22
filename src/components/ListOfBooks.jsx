import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { useGetBooks } from '../hooks/useGetBooks'
import Animated, { Layout } from 'react-native-reanimated'
import { Book } from './Book'
import { Title } from './ui/Title'

export function ListOfBooks() {
  const { books, booksCount } = useGetBooks()

  return (
    <View style={styles.container}>
      <Title styles={{ marginVertical: 10 }}>{booksCount} Libros disponibles</Title>
      <Animated.ScrollView contentContainerStyle={styles.booksContainer}>
        {books.map(book => (
          <Book key={book.title} book={book} />
        ))}
      </Animated.ScrollView>
      <ScrollView contentContainerStyle={[styles.booksContainer, {
        flexDirection: 'column',
        paddingTop: 30,
      }]}>
        {books.map(book => (
          <View key={book.title} style={{
            borderWidth: 2,
            borderColor: 'green',
            padding: 10,
            gap: 10,
            flexDirection: 'row',
          }}>
            <Image resizeMode="cover" src={book.cover} style={{ width: 100, height: 160 }} />
            <Image src={book.cover} style={{ width: 100, height: 160 }} />
          </View>
        ))}
      </ScrollView>
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
