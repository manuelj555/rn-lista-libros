import React from 'react'
import { Text, View } from 'react-native'
import { useBook } from '../hooks/useBook'
import { Button } from './ui/Button'
import Animated from 'react-native-reanimated'
import { Title } from './ui/Title'
import { useGetReadingList } from '../hooks/useGetReadingList'

export function BookDetail ({ book }) {
  const { add, isAdding, remove, isRemoving } = useBook()
  const { readingList } = useGetReadingList()
  const isInReadingList = readingList.some(({ title }) => title === book.title)

  function addToReadingList () {
    add(book)
  }

  function removeFromReadingList () {
    remove(book)
  }

  return (
    <View style={{ gap: 10 }} className="py-5 items-start flex-row justify-between">
      <Animated.Image resizeMode="cover" source={{ uri: book.cover }} className="mt-0 w-[160px] h-[260px]"/>

      <View style={{ gap: 6 }} className="flex-1">
        <View className="justify-center items-end mb-2" style={{ gap: 4 }}>
          {!isInReadingList && (
            <Button
              onPress={addToReadingList}
              isLoading={isAdding}
              loadingText="Agregando"
            >Agregar</Button>
          )}
          {isInReadingList && (
            <Button
              variant="danger"
              size="xs"
              onPress={removeFromReadingList}
              isLoading={isRemoving}
              loadingText="Quitando"
            >Quitar de la lista de lectura</Button>
          )}
        </View>
        <Text>{book.synopsis}</Text>
        <Info label="Páginas" value={book.pages}/>
        <Info label="Género" value={book.genre}/>
        <Info label="Año" value={book.year}/>
        <Info label="Author" value={book.author.name}/>
      </View>
    </View>
  )
}

function Info ({ label, value }) {
  return (
    <View style={{ gap: 3 }} className="flex-row items-center justify-between">
      <Title size="xs">{label}:</Title>
      <Text>{value}</Text>
    </View>
  )
}
