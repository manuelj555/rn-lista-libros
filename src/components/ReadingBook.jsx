import React, { useEffect, useRef } from 'react'
import { Alert, Animated, Image, Pressable, StyleSheet, Text } from 'react-native'
import { useBook } from '../hooks/useBook'

export default function ReadingBook({ book, position = 0, isSelected, handleSelect }) {
  const { remove } = useBook()
  const scaleAnimation = useRef(new Animated.Value(1))
  const heightAnimation = useRef(new Animated.Value(30))

  useEffect(() => {
    Animated.spring(heightAnimation.current, {
      toValue: isSelected ? 300 : 30,
      duration: 600,
      useNativeDriver: false,
    }).start()
  }, [isSelected, heightAnimation])

  useEffect(() => {
    Animated.spring(scaleAnimation.current, {
      toValue: isSelected ? 1 : 1 - (position * 0.04),
      duration: 600,
      useNativeDriver: false,
    }).start()
  }, [isSelected, position, scaleAnimation])

  const scaleStyles = {
    transform: [{ scale: scaleAnimation.current }]
  }

  function removeFromReadingList() {
    if (position === 0 || isSelected) {
      Animated.parallel([
        Animated.timing(scaleAnimation.current, {
          toValue: 0,
          useNativeDriver: false,
          duration: 400,
        }),
        Animated.timing(heightAnimation.current, {
          toValue: 0,
          useNativeDriver: false,
          duration: 400,
        }),
      ]).start(() => {
        remove(book)
          .catch(() => {
            Alert.alert('Ups, an error has occured and the book cannot be removed')
          })
          .finally(() => handleSelect(null))
      })
    }
  }

  return (
    <Animated.View style={[styles.container, position > 0 && { height: heightAnimation.current }, scaleStyles]}>
      <Pressable onPress={() => handleSelect(book)}>
        <Image resizeMode='cover' src={book.cover} style={[styles.image]} />
      </Pressable>
      <Pressable style={styles.removeButton} onPress={removeFromReadingList}>
        <Text>X</Text>
      </Pressable>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingX: 20,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  image: {
    width: 300,
    height: 600,
    borderRadius: 6,
    zIndex: 1,
  },
  removeButton: {
    zIndex: 10,
    position: 'absolute',
    top: 5,
    right: 50,
    borderWidth: 2,
    borderColor: '#78504d',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#66666622',
  }
})