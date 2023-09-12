import React, { forwardRef } from 'react'
import { ScrollView as RNScrollView } from 'react-native'
import { styled } from 'nativewind'
import Animated from 'react-native-reanimated'

const ScrollViewWrapper = forwardRef(({ containerClassName, contentContainerStyle, showScroll, ...props }, ref) => {
  return <RNScrollView ref={ref} contentContainerStyle={[
    containerClassName,
    contentContainerStyle,
  ]} {...props} showsVerticalScrollIndicator={showScroll} showsHorizontalScrollIndicator={showScroll}/>
})

export const ScrollView = styled(ScrollViewWrapper, {
  props: {
    containerClassName: true,
  }
})

export const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)