'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersSection = () => {
    const t = useTranslations('Partners');
    
    const partners = [
        {
            id: 1,
            name: 'Moving Co',
            image: '/images/profile.jpg',
            description: 'Professional moving services',
            rating: 4.8
        },
        {
            id: 2,
            name: 'Storage Plus',
            image: '/images/profile.jpg',
            description: 'Secure storage solutions',
            rating: 4.9
        },
        {
            id: 16,
            name: 'Moving Co',
            image: '/images/profile.jpg',
            description: 'Professional moving services',
            rating: 4.8
        },
        {
            id: 25,
            name: 'Storage Plus',
            image: '/images/profile.jpg',
            description: 'Secure storage solutions',
            rating: 4.9
        },
        {
            id: 14,
            name: 'Moving Co',
            image: '/images/profile.jpg',
            description: 'Professional moving services',
            rating: 4.8
        },
        {
            id: 23,
            name: 'Storage Plus',
            image: '/images/profile.jpg',
            description: 'Secure storage solutions',
            rating: 4.9
        },
        {
            id: 12,
            name: 'Moving Co',
            image: '/images/profile.jpg',
            description: 'Professional moving services',
            rating: 4.8
        },
        {
            id: 21,
            name: 'Storage Plus',
            image: '/images/profile.jpg',
            description: 'Secure storage solutions',
            rating: 4.9
        },
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: partners.length > 4 ? 4 : partners.length,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="bg-background py-16">
            <div className="container">
                <h2 className="text-4xl font-bold text-center text-primary mb-12">
                    {t('OurPartners')}
                </h2>
                    <Slider {...settings}>
                        {partners.map((partner) => (
                            <div key={partner.id} className="p-4">
                                <div className="border border-primary rounded-lg p-6 shadow-lg">
                                    <div className="relative h-48 mb-4">
                                        <Image
                                            src={partner.image}
                                            alt={partner.name}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">
                                        {partner.name}
                                    </h3>
                                    <p className="text-foreground mb-4">
                                        {partner.description}
                                    </p>
                                    <div className="flex items-center">
                                        <div className="flex text-primary">
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index}>
                                                    {index < Math.floor(partner.rating) ? '★' : '☆'}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="ml-2 text-foreground">
                                            {partner.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
            </div>
        </section>
    );
};

export default PartnersSection;
