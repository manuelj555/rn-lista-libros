import React, { Suspense } from 'react'
import ListOfBooks from '../components/ListOfBooks'
import { Stack } from 'expo-router'
import { Text } from 'react-native'

export default function Index() {
  return (
    <>
      <Stack.Screen options={{
        title: 'Lista de Libros'
      }} />
      <Suspense fallback={<Text>Loading books!</Text>}>
        <ListOfBooks />
      </Suspense>
    </>
  )
}
