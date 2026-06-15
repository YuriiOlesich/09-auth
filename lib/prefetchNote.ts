import { QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from './api/serverApi';

// Функція, яка бере id, робить префетч та повертає готовий queryClient
export async function getPrefetchedNoteClient(id: string) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return queryClient;
}
