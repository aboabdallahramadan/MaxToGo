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
import IndividualTasks from '@/components/mainPage/IndividualTasks';
import Faqs from '@/components/mainPage/Faqs';
export default function Home() {
  return (
    <>
      <LayoutHeader/>
      <Hero />
      <Slides />
      <IndividualTasks />
      <WhyWe />
      <About />
      <Services />
      <PartnersSection />
      <HowItWorks />
      <Faqs />
      <ContactUs />
      <Footer />
    </>
  );
}
