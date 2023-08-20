// const apiUrl = 'https://raw.githubusercontent.com/midudev/pruebas-tecnicas/main/pruebas/01-reading-list/books.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import data from '../../data/books.json'

export async function getBooks () {
  const books = data

  return (books?.library ?? []).map(({ book }) => book)
}

export async function getReadingList () {
  const data = await AsyncStorage.getItem('reading-list')

  return data ? JSON.parse(data) : []
}

export async function getBook ({ title }) {
  const books = await getBooks()

  return books?.find(book => book.title === title) ?? null
}

const delay = async (seconds) => new Promise(resolve => {
  setTimeout(resolve, seconds * 1000)
})

async function updateReadingList (newData) {
  const data = JSON.stringify(newData)

  // await delay(3)

  await AsyncStorage.setItem('reading-list', data)
}

export async function addToReadingList ({ book }) {
  const items = await getReadingList()

  if (!book || items.some(({ title }) => title === book.title)) {
    return
  }

  items.push(book)

  await updateReadingList(items)
}

export async function removeFromReadingList ({ book }) {
  const items = await getReadingList()

  if (!book) {
    return
  }

  // throw new Error('Test remove error')

  // await updateReadingList([])
  await updateReadingList(items.filter(({ title }) => title !== book.title))
}