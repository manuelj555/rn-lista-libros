import React from 'react'
import { Image, Pressable } from 'react-native'
import Animated, { BounceInLeft, FadeOut, SequencedTransition } from 'react-native-reanimated'
import { useSelectBook } from '../store/useSelectedBook'

export function Book ({ book }) {
  const selectBook = useSelectBook()

  function handleSelectBook () {
    // add(book)
    selectBook(book)
  }

  return (
    <Animated.View
      layout={SequencedTransition.randomDelay()}
      entering={BounceInLeft}
      exiting={FadeOut}
    >
      <Pressable onPress={handleSelectBook}>
        <Image resizeMode="cover" source={{ uri: book.cover }} className="w-[160px] h-[250px]"/>
      </Pressable>
    </Animated.View>
  )
}
