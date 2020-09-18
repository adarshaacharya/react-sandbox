import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const noteId = 2;

export default () => {
  const router = useRouter();

  const notes = new Array(15)
    .fill(1)
    .map((_, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => (
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}
      <button onClick={(e) => router.push(`/notes/[id]`, `/notes/${noteId}`)}>
        Programmatic Router
      </button>
    </div>
  );
};
