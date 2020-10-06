/** @jsx jsx */
import { jsx } from 'theme-ui';
// theme-ui tells the compiler -> babel, in this case, of what JSX tool to use to handle JSX in this file. It's the same reason you had to import React in your JSX files.

import Link from 'next/link';

const Nav = () => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    }}
  >
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
      }}
    >
      <Link href="/">
        <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>
          Note App
        </a>
      </Link>

      <Link href="/notes">
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>notes</a>
      </Link>

      <a
        sx={{
          color: 'text',
          fontSize: 3,
          cursor: 'pointer',
        }}
        target="_blank"
        href={process.env.HELP_APP_URL}
      >
        Help
      </a>
    </nav>
  </header>
);

export default Nav;
