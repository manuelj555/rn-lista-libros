import React, { useRef } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import Animated, {
  RollOutLeft,
  SequencedTransition,
  useAnimatedGestureHandler, useAnimatedStyle,
  useSharedValue, withSpring,
  ZoomIn
} from 'react-native-reanimated'
import { useSelectBook } from '../store/useSelectedBook'
import { PanGestureHandler } from 'react-native-gesture-handler'

export function ReadingBook({ book }) {
  const selectBook = useSelectBook()
  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const scale = useSharedValue(1)
  const zIndex = useSharedValue(0)

  const containerAnimationStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
      zIndex: zIndex.value
    }
  }, [translateY, translateX, zIndex])

  const gestureHandler = useAnimatedGestureHandler({
    onStart(event, context) {
      context.initialTranslationX = event.translationX
      context.initialTranslationY = event.translationY
      scale.value = withSpring(1.1)
      zIndex.value = 1000
    },
    onActive(event, context) {
      translateX.value = withSpring(event.translationX + context.initialTranslationX)
      translateY.value = withSpring(event.translationY + context.initialTranslationY)
    },
    onFinish() {
      scale.value = withSpring(1)
      translateX.value = withSpring(0)
      translateY.value = withSpring(0)
      zIndex.value = 0
    }
  })

  function handleSelectBook() {
    selectBook(book)
  }

  return (
    // <PanGestureHandler onGestureEvent={gestureHandler}>
    <View
      // style={[styles.container, containerAnimationStyles]}
      style={[styles.container]}
    // entering={ZoomIn}
    // exiting={RollOutLeft}
    // layout={SequencedTransition.duration(400).randomDelay()}
    >
      <Pressable onPress={handleSelectBook} style={{ elevation: 20, padding: 5 }}>
        <Image resizeMode="cover" src={book.cover} style={[styles.image]} />
      </Pressable>
    </View>
    // </PanGestureHandler>
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