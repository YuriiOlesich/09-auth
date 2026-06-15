'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api/clientApi';
import React from 'react';
import { Note } from '@/types/note';

type NoteDataLoaderProps = {
  id: string;
  children: (note: Note) => React.JSX.Element;
};

const NoteDataLoader = ({ id, children }: NoteDataLoaderProps) => {
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait..</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return children(note);
};

export default NoteDataLoader;
