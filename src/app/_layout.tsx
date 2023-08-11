import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Stack } from 'expo-router'

export default function Layout() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Stack />
    </QueryClientProvider>
  );
}
