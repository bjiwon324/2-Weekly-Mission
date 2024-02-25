import Footer from '@/Components/sharing/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/shared">shared</Link>
      <br />
      <Link href="/folder">folder</Link>
      <br />
      <Link href="/Auth/signin">signin</Link>
      <br />
      <Link href="/Auth/signup">signup</Link>
    </>
  );
}
