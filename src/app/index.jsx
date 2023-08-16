import { Stack, router } from 'expo-router'
import React, { Suspense } from 'react'
import { Text } from 'react-native'
import ListOfBooks from '../components/ListOfBooks'
import { Button } from '../components/ui/Button'
import { Loading } from '../components/ui/Loading'

export default function Index() {

  function showReadingList() {
    router.push('reading-list')
  }

  return (
    <>
      <Stack.Screen options={{
        title: 'Lista de Libros',
        headerRight: () => <Button size='xs' variant='secondary' onPress={showReadingList}>Lista de lectura</Button>,
      }} />
      <Suspense fallback={<Loading />}>
        <ListOfBooks />
      </Suspense>
    </>
  )
}
