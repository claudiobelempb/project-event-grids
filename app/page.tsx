import { CountDown } from '@/components/CountDown';
import { HeaderDefault } from '@/components/HeaderDefault';

export default function Home() {
  return (
    <>
      <main className='container'>
        <HeaderDefault />
        <CountDown />
      </main>
    </>
  );
}
