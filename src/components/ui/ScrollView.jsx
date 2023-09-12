import React from 'react'
import { ScrollView as RNScrollView } from 'react-native'
import { styled } from 'nativewind'
import Animated from 'react-native-reanimated'

function ScrollViewWrapper ({ containerClassName, contentContainerStyle, showScroll, ...props }) {
  return <RNScrollView contentContainerStyle={[
    containerClassName,
    contentContainerStyle,
  ]} {...props} showsVerticalScrollIndicator={showScroll} showsHorizontalScrollIndicator={showScroll} />
}

export const ScrollView = styled(ScrollViewWrapper, {
  props: {
    containerClassName: true,
  }
})

export const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)