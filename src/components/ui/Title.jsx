import React from 'react'
import { Text } from 'react-native'

export function Title ({ children: title, size = 'md', style }) {
  return (
    <Text className={`font-bold flex-shrink ${sizes[size] ?? size.md}`} style={style}>
      {title}
    </Text>
  )
}

const sizes = {
  md: 'text-3xl',
  sm: 'text-xl',
  xs: '',
}
