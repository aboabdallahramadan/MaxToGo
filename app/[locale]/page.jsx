import About from '@/components/mainPage/About';
import ContactUs from '@/components/mainPage/ContactUs';
import Hero from '@/components/mainPage/Hero';
import Services from '@/components/mainPage/Services';
import LayoutHeader from '@/components/mainPage/LayoutHeader';
import Footer from '@/components/mainPage/Footer';
import PartnersSection from '@/components/mainPage/PartnersSection';
import Slides from '@/components/mainPage/Slides';
export default function Home() {
  return (
    <>
      <LayoutHeader/>
      <Hero />
      <Slides />
      <About />
      <Services />
      <PartnersSection />
      <ContactUs />
      <Footer />
    </>
  );
}
