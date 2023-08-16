import { Link, Stack, router } from 'expo-router'
import React, { Suspense } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Loading } from '../../components/ui/Loading';
import { ReadingList } from '../../components/ReadingList';

export default function ReadingListPage() {

  const isPresented = router.canGoBack();

  return (
    <>
      <Stack.Screen options={{
        title: 'Lista de Lectura',
        // headerRight: () => <Button size='xs' variant='secondary' onPress={showReadingList}>Lista de lectura</Button>,
      }} />
      <Suspense fallback={<Loading />}>
        <ReadingList />
      </Suspense>
    </>
  )
}
