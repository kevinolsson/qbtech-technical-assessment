import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${workSans.className}`}>
      <main>Hello World</main>
    </div>
  );
}
