'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api/clientApi';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';
import css from './NoteDetails.module.css';

interface NoteDetailsClientProps {
  id: string;
}

const NoteDetailsClient = ({ id }: NoteDetailsClientProps) => {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    enabled: !!id,
  });

  const goBack = () => router.back();

  if (isLoading) return <div>Loading note...</div>;
  if (error || !note) return <div>Note not found</div>;

  return (
    <section>
      <button
        onClick={goBack}
        className={css.backButton}
      >
        Go Back
      </button>
      <NoteRenderDetails note={note} />
    </section>
  );
};

export default NoteDetailsClient;
