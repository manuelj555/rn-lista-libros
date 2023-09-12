import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export default function StackLayout () {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BottomSheetModalProvider>
        <Stack/>
      </BottomSheetModalProvider>
    </QueryClientProvider>
  )
}
