'use client';

import { useRouter } from 'next/navigation';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';
import Modal from '@/components/Modal/Modal';
import NoteDataLoader from '@/components/NoteRenderDetails/NoteDataLoader';

const NotePreview = ({ id }: { id: string }) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <NoteDataLoader id={id}>
      {note => (
        <Modal onClose={close}>
          <NoteRenderDetails note={note} />
        </Modal>
      )}
    </NoteDataLoader>
  );
};

export default NotePreview;
