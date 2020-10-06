/** @jsx jsx */
import { INotes } from 'interfaces';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { jsx } from 'theme-ui';

export default ({ notes }: INotes) => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes &&
          notes.map((note) => (
            <div sx={{ width: '33%', p: 2 }}>
              <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
                <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                  <div sx={{ variant: 'containers.card' }}>
                    <strong>{note.title}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

// next js will run this function at build time you are not even in the browser so you don't have access to any params here -> this is just used for static data
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.END_POINT}/api/note/`);
  const { data } = await res.json();
  console.log(data)
  return {
    props: {
      notes: data,
    },
  };
};
