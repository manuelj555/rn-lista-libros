import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useBook } from '../hooks/useBook'
import { Button } from './ui/Button'
import Title from './ui/Title'
import { router } from 'expo-router'

export default function Book({ book }) {
  const { add } = useBook()

  function addToReadingList() {
    add(book)
  }

  return (
    <View style={styles.container}>
      <Title size='sm'>{book.title}</Title>

      <View style={styles.imageAndInfo}>
        <Image resizeMode='cover' src={book.cover} style={styles.image} />

        <View style={styles.infoContainer}>
          <Text>{book.synopsis}</Text>
          <Info label='Páginas' value={book.pages} />
          <Info label='Género' value={book.genre} />
          <Info label='Año' value={book.year} />
          <Info label='Author' value={book.author.name} />
          <View style={styles.buttons}>
            <Button size='xs' onPress={addToReadingList}>Agregar</Button>
          </View>
        </View>
      </View>
    </View>
  )
}

function Info({ label, value }) {
  return (
    <View style={styles.infoItem}>
      <Title size='xs'>{label}:</Title>
      <Text>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 10,
  },
  imageAndInfo: {
    flexDirection: 'row',
    gap: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 6,
  },
  image: {
    width: 120,
    height: 200,
  },
  infoItem: {
    flexDirection: 'row',
    gap: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 6
  }
})
