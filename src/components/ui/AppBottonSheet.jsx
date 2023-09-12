import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Title } from './Title'
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { ScrollView } from './ScrollView'
import { BlurView } from 'expo-blur'
import Animated, { FadeIn, FadeOut, useSharedValue, withTiming } from 'react-native-reanimated'

export function AppBottomSheet ({ show, handleClose, title, children }) {
  const $modal = useRef(null)
  const [contentHeight, setContentHeight] = useState('50%')

  useEffect(() => {
    if (show) {
      $modal.current?.present()
    } else {
      $modal.current?.dismiss()
    }
  }, [show, $modal])

  function handleOnLayout (event) {
    setContentHeight(Math.round(event.nativeEvent.layout.height + 10))
  }

  return (
    <BottomSheetModal
      ref={$modal}
      snapPoints={[contentHeight, '90%']}
      onDismiss={() => handleClose()}
      style={styles.modal}
      backdropComponent={Backdrop}
    >
      <View onLayout={handleOnLayout}>
        <View className="flex-row items-center justify-between px-2">
          <Title styles={{ padding: 10 }}>{title}</Title>
        </View>
        <ScrollView containerClassName="px-2">
          {children}
        </ScrollView>
      </View>
    </BottomSheetModal>
  )
}

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

function Backdrop ({ animatedIndex, animatedPosition, ...props }) {
  const { dismiss } = useBottomSheetModal()

  return (
    <TouchableWithoutFeedback onPress={() => dismiss()}>
      <AnimatedBlurView
        intensity={10}
        entering={FadeIn}
        exiting={FadeOut.duration(100)}
        {...props}/>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  modal: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
})