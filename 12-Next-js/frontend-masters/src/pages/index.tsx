/** @jsx jsx */
import { jsx } from 'theme-ui';

const IndexPage = ({ content }: { content: { title: string } }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>
        This is a really dope note taking app.
        {content.title}
      </h1>
    </div>
  </div>
);

export function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho',
      },
    },
  };
}
export default IndexPage;
