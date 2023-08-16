import React, { useRef, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useGetReadingList } from '../hooks/useGetReadingList'
import ReadingBook from './ReadingBook'
import Title from './ui/Title'

export function ReadingList() {
  const { readingList, total } = useGetReadingList()
  const [selectedBook, setSelectedBook] = useState(null)
  const selectedBookIndexRef = useRef(-1)
  const previousScroll = useRef(0)

  function handleBookSelected(book) {
    setSelectedBook(book)
    selectedBookIndexRef.current = readingList.findIndex(({ title }) => title === book?.title)
  }

  function handleScroll({ nativeEvent: { contentOffset } }) {
    // const currentIndex = selectedBookIndexRef.current
    // const previousY = previousScroll.current
    // const currentY = contentOffset.y

    // if (previousY > (currentY + 40)) {
    //   selectedBookIndexRef.current = currentIndex - 1
    //   previousScroll.current = currentY
    // } else if (previousY < (currentY - 40)) {
    //   selectedBookIndexRef.current = currentIndex + 1
    //   previousScroll.current = currentY
    // }


    // if (selectedBookIndexRef.current < 0) {
    //   selectedBookIndexRef.current = 0
    // } else if (selectedBookIndexRef.current >= total) {
    //   selectedBookIndexRef.current = total - 1
    // }

    // setSelectedBook(readingList[selectedBookIndexRef.current])
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
          scrollEventThrottle={1000}
          onScroll={handleScroll}
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