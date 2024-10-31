import About from '@/components/mainPage/About';
import ContactUs from '@/components/mainPage/ContactUs';
import Hero from '@/components/mainPage/Hero';
import Services from '@/components/mainPage/Services';
import {useTranslations} from 'next-intl';
import LayoutHeader from '@/components/mainPage/LayoutHeader';
import Footer from '@/components/mainPage/Footer';
import PartnersSection from '@/components/mainPage/PartnersSection';
export default function Home() {
  const t = useTranslations('home');
  return (
    <>
      <LayoutHeader/>
      <Hero />
      <About />
      <Services />
      <PartnersSection />
      <ContactUs />
      <Footer />
    </>
  );
}
