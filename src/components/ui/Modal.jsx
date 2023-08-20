import React from 'react'
import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { BlurView } from 'expo-blur'
import { Title } from './Title'
import Animated from 'react-native-reanimated'

export function Modal ({ show, handleClose, title, children }) {
  return (
    <ReactNativeModal
      isVisible={show}
      // onModalHide={handleClose}
      onBackdropPress={handleClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      // animationInTiming={1000}
      animationOutTiming={400}
      backdropOpacity={1}
      backdropTransitionOutTiming={0}
      customBackdrop={
        <TouchableWithoutFeedback onPress={handleClose}>
          <BlurView intensity={20} style={styles.modalBackdrop}/>
        </TouchableWithoutFeedback>
      }
      swipeDirection="down"
      onSwipeComplete={handleClose}
      style={styles.modalContainer}
    >
      <View style={styles.modal}>
        <View style={styles.header}>
          <Title styles={{ padding: 10 }}>{title}</Title>
          <Pressable onPress={handleClose}>
            <Text style={styles.close}>x</Text>
          </Pressable>
        </View>
        <Animated.ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
          {children}
        </Animated.ScrollView>
      </View>
    </ReactNativeModal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    flex: 1,
  },
  modal: {
    marginTop: 120,
    elevation: 15,
    paddingTop: 5,
    // padding: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    // shadowOffset: { width: 0, height: -10 },
    // shadowColor: '#AAAAAA',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  close: {
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(187,187,187,0.32)',
    color: 'rgba(114,114,114,0.8)',
  },
})