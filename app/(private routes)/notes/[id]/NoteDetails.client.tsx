'use client';

import { useRouter } from 'next/navigation';
import NoteRenderDetails from '@/components/NoteRenderDetails/NoteRenderDetails';
import NoteDataLoader from '@/components/NoteRenderDetails/NoteDataLoader';
import css from './NoteDetails.module.css';

const NoteDetailsClient = ({ id }: { id: string }) => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <NoteDataLoader id={id}>
      {note => (
        <section>
          <button
            onClick={goBack}
            className={css.backButton}
          >
            Go Back
          </button>
          <NoteRenderDetails note={note} />
        </section>
      )}
    </NoteDataLoader>
  );
};

export default NoteDetailsClient;
