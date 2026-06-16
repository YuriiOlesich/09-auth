'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api/clientApi';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';
// import css from './NotePreview.module.css'; // якщо потрібно

interface NotePreviewProps {
  id: string;
}

const NotePreview = ({ id }: NotePreviewProps) => {
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading note...</div>;
  if (error || !note) return <div>Note not found</div>;

  return (
    <section>
      <NoteRenderDetails note={note} />
    </section>
  );
};

export default NotePreview;
