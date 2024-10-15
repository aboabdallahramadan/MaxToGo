import Hero from '@/components/mainPage/Hero';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <>
      <Hero />
    </>
  );
}
