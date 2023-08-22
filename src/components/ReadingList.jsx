import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useGetReadingList } from '../hooks/useGetReadingList'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'
import { ReadingBook } from './ReadingBook'
import { Title } from './ui/Title'

export function ReadingList () {
  const { readingList, total } = useGetReadingList()
  const screenWidth = Math.round(Dimensions.get('screen').width)

  return (
    <View style={styles.container}>
      <Title size="sm">Lista de lectura ({total})</Title>
      {readingList.length > 0 && (
        <Animated.ScrollView horizontal contentContainerStyle={[
          styles.scrollView,
          { minWidth: screenWidth - ((styles.scrollView.padding ?? 0) * 2) },
        ]}>
          {readingList.map((book) => (
            <ReadingBook key={book.title} book={book}/>
          ))}
        </Animated.ScrollView>
      )}
      {readingList.length === 0 && (
        <Animated.View style={{ paddingVertical: 20 }} entering={SlideInRight} exiting={SlideOutRight}>
          <Text>No hay libros en la lista de lectura</Text>
        </Animated.View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c9f0ff',
    margin: -20,
    padding: 20,
    paddingBottom: 10,
  },
  scrollView: {
    gap: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})