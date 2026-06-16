'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api/clientApi';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';
import Modal from '@/components/Modal/Modal';

interface NotePreviewProps {
  id: string;
}

const NotePreview = ({ id }: NotePreviewProps) => {
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
    <Modal onClose={goBack}>
      <section>
        <button
          onClick={goBack}
          className="backButton"
        >
          Go Back
        </button> 

        <NoteRenderDetails note={note} />
      </section>
    </Modal>
  );
};

export default NotePreview;
