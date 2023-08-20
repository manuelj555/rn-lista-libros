import React from 'react'
import { Alert, Pressable, StyleSheet } from 'react-native'
import { useBook } from '../hooks/useBook'
import Animated, { Layout, RollOutLeft, ZoomIn } from 'react-native-reanimated'
import { useSelectBook } from '../store/useSelectedBook'

export function ReadingBook ({ book, position = 0, isSelected, handleSelect }) {
  const { remove } = useBook()
  const selectBook = useSelectBook()

  function removeFromReadingList () {
    if (position === 0 || isSelected) {
      remove(book)
        .catch(() => {
          Alert.alert('Ups, an error has occured and the book cannot be removed')
        })
        .finally(() => handleSelect(null))
    }
  }

  function handleSelectBook () {
    selectBook(book)
    // remove(book)
    // handleSelect(isSelected ? null : book)
  }

  return (
    <Animated.View
      style={[styles.container]}
      entering={ZoomIn}
      exiting={RollOutLeft}
      layout={Layout.springify().delay(700)}
    >
      <Pressable onPress={handleSelectBook} style={{ elevation: 20, padding: 5 }}>
        <Animated.Image resizeMode="cover" src={book.cover} style={[styles.image]}/>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    // width: 300,
    margin: 'auto',
    // borderWidth: 1,
  },
  image: {
    width: 60,
    height: 100,
    borderRadius: 6,
    zIndex: 1,
  },
  removeButton: {
    zIndex: 10,
    position: 'absolute',
    top: 10,
    right: 10,
    borderWidth: 2,
    borderColor: '#78504d',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#66666622',
  }
})