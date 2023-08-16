import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useGetReadingList } from '../hooks/useGetReadingList'
import ReadingBook from './ReadingBook'
import Title from './ui/Title'

export function ReadingList() {
  const { readingList, total } = useGetReadingList()
  const [selectedBook, setSelectedBook] = useState(null)

  function handleBookSelected(book) {
    setSelectedBook(book)
  }

  return (
    <View style={styles.container}>
      {readingList.length > 0 && (
        <FlatList
          ListHeaderComponent={<Title styles={{ marginLeft: 10 }}>{total} Libros</Title>}
          data={readingList}
          renderItem={({ item, index }) => <ReadingBook
            key={item.title}
            book={item}
            position={total - index - 1}
            isSelected={item === selectedBook}
            handleSelect={handleBookSelected}
          />}
          keyExtractor={book => book.title}
        />
      )}
      {readingList.length === 0 && (
        <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
          <Title>No se han añadido libros a la lista de lectura</Title>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})