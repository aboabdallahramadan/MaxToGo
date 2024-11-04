'use client';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from 'next-intl';

const Slides = () => {
  const t = useTranslations('Slides');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
  };

  const slides = [
    {
      title: "Welcome to the Smart Path to Future Collaboration and Growth",
      titleSv: "Välkommen till den smarta vägen för framtida samarbete och tillväxt",
      description: "Reach partners across the EU at no cost with just a few clicks.",
      descriptionSv: "Nå partners i hela EU kostnadsfritt med bara några klick."
    },
    {
      title: "Digital Platform for Business Connection",
      titleSv: "Digital plattform för företagsanslutning",
      description: "We are a digital platform that connects moving, transport, and service companies to enable efficient collaboration, smart growth, and sustainable development.",
      descriptionSv: "Vi är en digital plattform som kopplar samman flytt-, transport- och serviceföretag för att möjliggöra effektivt samarbete, smart tillväxt och hållbar utveckling."
    },
    {
      title: "Uniting Companies Across Borders",
      titleSv: "Förenar företag över gränserna",
      description: "A platform for task sharing that unites moving, transport, and service companies across Sweden and EU countries.",
      descriptionSv: "En plattform för uppgiftsdelning som förenar flytt-, transport- och serviceföretag i Sverige och EU-länder."
    },
    {
      title: "Sustainable Transport Solutions",
      titleSv: "Hållbara transportlösningar",
      description: "We contribute to sustainability by reducing the number of vehicles on the road through coordinated sharing of transport and service tasks between companies.",
      descriptionSv: "Vi bidrar till hållbarhet genom att minska antalet fordon på vägarna genom samordnad delning av transport- och serviceuppdrag mellan företag."
    }
  ];

  return (
    <div className="text-white py-16">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-primary text-2xl font-bold mb-2">
                 {t("SiteTitle")}
                </h2>
                <h3 className="text-4xl font-bold mb-6">
                  {t(`title.${index}`)}
                </h3>
                <p className="text-gray-400 text-xl">
                  {t(`description.${index}`)}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slides;
