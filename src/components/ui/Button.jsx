import React, { useState } from 'react'
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'

export function Button ({
  children: title,
  variant = 'primary',
  size = 'sm',
  onPress,
  isLoading = false,
  loadingText = null,
}) {
  const [isPressed, setPressed] = useState(false)

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={isLoading}
    >
      <View style={[
        containerStyles.container,
        isPressed && containerStyles.pressed,
        isLoading && containerStyles.loadingState,
        containerStyles[variant] ?? containerStyles.primary,
        containerStyles[size] ?? containerStyles.sm,
      ]}>
        {isLoading && (
          <ActivityIndicator size="small" style={textStyles.loading}/>
        )}
        <Text style={[
          textStyles.text,
          textStyles[variant] ?? textStyles.primary,
          textStyles[size] ?? null,
        ]}>
          {isLoading && loadingText ? loadingText : title}
        </Text>
      </View>
    </Pressable>
  )
}

const containerStyles = StyleSheet.create({
  container: {
    gap: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
  loadingState: {
    opacity: 0.8,
  },
  pressed: {
    opacity: 0.7,
  },
  primary: {
    backgroundColor: '#3273a8',
  },
  secondary: {
    backgroundColor: '#a3bce6',
  },
  danger: {
    backgroundColor: '#e86e6e',
  },
  sm: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  xs: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
})

const textStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    paddingVertical: 2,
  },
  loading: {
    // fontSize: 14,
  },
  primary: {
    color: 'white',
    fontWeight: '500'
  },
  secondary: {
    color: '#121212',
    fontWeight: '500'
  },
  danger: {
    color: '#ffffff',
    fontWeight: '600'
  },
  xs: {
    fontSize: 13,
  },
})
