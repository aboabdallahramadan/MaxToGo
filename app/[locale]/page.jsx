import About from '@/components/mainPage/About';
import ContactUs from '@/components/mainPage/ContactUs';
import Hero from '@/components/mainPage/Hero';
import Services from '@/components/mainPage/Services';
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ContactUs />
    </>
  );
}
