import Footer from '@/Components/sharing/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/shared">shared</Link>
      <Link href="/folder">folder</Link>
      <Link href="/signin">signin</Link>
    </>
  );
}
