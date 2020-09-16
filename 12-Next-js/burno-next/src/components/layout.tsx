import Link from 'next/link';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          padding: '2rem .5rem',
          background: '#f5f5',
        }}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Us</a>
        </Link>
        <Link href="/list">
          <a>List</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout;
