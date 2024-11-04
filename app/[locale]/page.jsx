import About from '@/components/mainPage/About';
import ContactUs from '@/components/mainPage/ContactUs';
import Hero from '@/components/mainPage/Hero';
import Services from '@/components/mainPage/Services';
import LayoutHeader from '@/components/mainPage/LayoutHeader';
import Footer from '@/components/mainPage/Footer';
import PartnersSection from '@/components/mainPage/PartnersSection';
import Slides from '@/components/mainPage/Slides';
import WhyWe from '@/components/mainPage/WhyWe';
import HowItWorks from '@/components/mainPage/HowItWorks';
export default function Home() {
  return (
    <>
      <LayoutHeader/>
      <Hero />
      <Slides />
      <WhyWe />
      <About />
      <Services />
      <PartnersSection />
      <HowItWorks />
      <ContactUs />
      <Footer />
    </>
  );
}
