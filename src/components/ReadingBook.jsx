import React from 'react'
import { Image, Pressable } from 'react-native'
import Animated, {
  RollOutLeft,
  SequencedTransition,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  ZoomIn
} from 'react-native-reanimated'
import { useSelectBook } from '../store/useSelectedBook'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

export function ReadingBook ({ book }) {
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

  const gestureHandler = Gesture.Pan()
    .onStart(event => {
      // context.initialTranslationX = event.translationX
      // context.initialTranslationY = event.translationY
      scale.value = withSpring(1.1)
      zIndex.value = 1000
    })
    .onUpdate(event => {
      translateX.value = withSpring(event.translationX)
      translateY.value = withSpring(event.translationY)
    })
    .onEnd(() => {
      scale.value = withSpring(1)
      translateX.value = withSpring(0)
      translateY.value = withSpring(0)
      zIndex.value = withTiming(0)
    })

  function handleSelectBook () {
    selectBook(book)
  }

  return (
    <GestureDetector gesture={gestureHandler}>
      <Animated.View
        className="self-center items-start relative"
        style={[containerAnimationStyles]}
        entering={ZoomIn}
        exiting={RollOutLeft}
        layout={SequencedTransition.duration(400).randomDelay()}
      >
        <Pressable onPress={handleSelectBook} style={{ elevation: 20, padding: 5 }}>
          <Image className="w-[60px] h-[100px] rounded-md z-1" resizeMode="cover" source={{ uri: book.cover }}/>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  )
}