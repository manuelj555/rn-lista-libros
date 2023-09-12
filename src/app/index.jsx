import { Stack } from 'expo-router'
import React, { Suspense, useRef } from 'react'
import { Loading } from '../components/ui/Loading'
import { View } from 'react-native'
import { ReadingList } from '../components/ReadingList'
import { ListOfBooks } from '../components/ListOfBooks'
import { useGetSelectedBook, useSelectBook } from '../store/useSelectedBook'
import { BookDetail } from '../components/BookDetail'
import { AppBottomSheet } from '../components/ui/AppBottonSheet'

export default function Home () {
  const selectedBook = useGetSelectedBook()
  const unselectBook = useSelectBook()
  const lastSelectedBookRef = useRef(selectedBook)

  if (selectedBook) {
    lastSelectedBookRef.current = selectedBook
  }

  return (
    <>
      <Stack.Screen options={{ title: 'My App de libros' }}/>
      <Suspense fallback={<Loading/>}>
        <View className="flex-1 pt-[10px] px-[20px]">
          <ReadingList/>
          <ListOfBooks/>
        </View>
      </Suspense>
      <AppBottomSheet show={!!selectedBook} title={selectedBook?.title} handleClose={() => unselectBook()}>
        {lastSelectedBookRef.current && <BookDetail book={lastSelectedBookRef.current}/>}
      </AppBottomSheet>
    </>
  )
}
