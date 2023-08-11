import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Title({ children: title, size = 'md', styles: extraStyles = null }) {
  return (
    <Text style={[styles.title, styles[size] ?? styles.md, extraStyles]}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    flexShrink: 1,
  },
  md: {
    fontSize: 30,
  },
  sm: {
    fontSize: 20,
  },
  xs: {
    fontSize: 16,
  },
})
