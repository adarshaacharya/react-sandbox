import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Index Page</h1>
      <Link href="notes">
        <a>Visit Notes</a>
      </Link>
    </>
  );
}
