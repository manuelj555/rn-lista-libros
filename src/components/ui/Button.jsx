import React, { useState } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export function Button({
  children: title,
  variant = 'primary',
  size = 'sm',
  onPress
}) {
  const [isPressed, setPressed] = useState(false)

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <Text style={[
        styles.text,
        isPressed && styles.pressed,
        styles[variant] ?? size.primary,
        styles[size] ?? styles.sm,
      ]}>
        {title}
      </Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    borderRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  primary: {
    backgroundColor: '#3273a8',
    color: 'white',
    fontWeight: '500'
  },
  secondary: {
    backgroundColor: '#a3bce6',
    color: '#121212',
    fontWeight: '500'
  },
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  xs: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 13,
  },
})
