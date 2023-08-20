import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useBook } from '../hooks/useBook'
import { Button } from './ui/Button'
import Animated from 'react-native-reanimated'
import { Title } from './ui/Title'
import { useSelectBook } from '../store/useSelectedBook'
import { useGetReadingList } from '../hooks/useGetReadingList'

export function BookDetail ({ book }) {
  const { add, isAdding, remove, isRemoving } = useBook()
  const cleanSelectedBook = useSelectBook()
  const { readingList } = useGetReadingList()
  const isInReadingList = readingList.some(({ title }) => title === book.title)

  function addToReadingList () {
    cleanSelectedBook()
    setTimeout(() => {
      add(book)
    }, 200)
  }

  function removeFromReadingList () {
    cleanSelectedBook()
    setTimeout(() => {
      remove(book)
    }, 200)
  }

  return (<View style={styles.container}>
    <Animated.Image resizeMode="cover" src={book.cover} style={styles.image}/>

    <View style={styles.infoContainer}>
      <View style={styles.buttons}>
        {!isInReadingList && (
          <Button
            onPress={addToReadingList}
            isLoading={isAdding}
            loadingText="Agregando"
          >Agregar</Button>
        )}
        {isInReadingList && (
          <Button
            variant='danger'
            size='xs'
            onPress={removeFromReadingList}
            isLoading={isRemoving}
            loadingText="Agregando"
          >Quitar de la lista de lectura</Button>
        )}
      </View>
      <Text>{book.synopsis}</Text>
      <Info label="Páginas" value={book.pages}/>
      <Info label="Género" value={book.genre}/>
      <Info label="Año" value={book.year}/>
      <Info label="Author" value={book.author.name}/>
    </View>
  </View>)
}

function Info ({ label, value }) {
  return (<View style={styles.infoItem}>
    <Title size="xs">{label}:</Title>
    <Text>{value}</Text>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    // overflow: 'scroll',
    paddingVertical: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  infoContainer: {
    flexDirection: 'column',
    gap: 6,
    flex: 1,
  },
  image: {
    marginTop: 0,
    width: 160,
    height: 260,
  },
  infoItem: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'column',
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 4,
    marginBottom: 10,
  }
})
