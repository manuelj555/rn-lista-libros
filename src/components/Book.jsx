import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Animated, { BounceInLeft, FadeOut, Layout, SequencedTransition } from 'react-native-reanimated'
import { useSelectBook } from '../store/useSelectedBook'

export function Book({ book }) {
  const selectBook = useSelectBook()

  function handleSelectBook() {
    // add(book)
    selectBook(book)
  }

  return (
    <Animated.View
      style={[styles.container]}
      layout={SequencedTransition.duration(500).randomDelay()}
      entering={BounceInLeft}
      exiting={FadeOut}
    >
      <Pressable onPress={handleSelectBook}>
        <Animated.Image resizeMode="cover" src={book.cover} style={styles.image} />
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20,
  },
  image: {
    width: 160,
    height: 250,
  },
})
