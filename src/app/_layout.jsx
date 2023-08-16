import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

export default function Layout() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        {/* <Stack.Screen
          name='reading-list/index'
          options={{
            presentation: 'modal',
          }}
        /> */}
      </Stack>
    </QueryClientProvider>
  );
}
