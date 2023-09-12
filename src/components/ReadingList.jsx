import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { useGetReadingList } from '../hooks/useGetReadingList'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'
import { ReadingBook } from './ReadingBook'
import { Title } from './ui/Title'
import { ScrollView } from './ui/ScrollView'

export function ReadingList () {
  const { readingList, total } = useGetReadingList()
  const screenWidth = Math.round(Dimensions.get('screen').width)

  return (
    <View className="-m-5 p-5 pb-2 bg-[#c9f0ff]">
      <Title size="sm">Lista de lectura ({total})</Title>
      {readingList.length > 0 && (
        <ScrollView horizontal containerClassName="p-2" contentContainerStyle={{
          minWidth: screenWidth - 16,
        }}>
          {readingList.map((book) => (
            <ReadingBook key={book.title} book={book}/>
          ))}
        </ScrollView>
      )}
      {readingList.length === 0 && (
        <Animated.View className="py-5" entering={SlideInRight} exiting={SlideOutRight}>
          <Text>No hay libros en la lista de lectura</Text>
        </Animated.View>
      )}
    </View>
  )
}