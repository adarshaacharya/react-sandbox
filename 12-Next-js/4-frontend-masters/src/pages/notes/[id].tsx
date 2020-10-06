/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { INote } from 'interfaces';

export default ({ note }: { note: INote }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>
        {note.title} with id {id}{' '}
      </h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, res } = context;
  const response = await fetch(`${process.env.END_POINT}/api/note/${params?.id}`);

  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: '/notes' });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  return {
    props: { note: data },
  };
};
