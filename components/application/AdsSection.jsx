"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick"; // Import the slider component
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import Spinner from "@/components/Spinner";

const AdsSection = () => {
    const [isLoading,setIsLoading] = useState(false);
    const [time, setTime] = useState(3000);
    const [ads, setAds] = useState([
    {
      "imagePath": "/images/ad.jpg",
      "link": "https://example.com"
    },
    {
        "imagePath": "/images/ad.jpg",
        "link": "https://example.com"
      },
      {
        "imagePath": "/images/ad.jpg",
        "link": "https://example.com"
      },
      {
        "imagePath": "/images/ad.jpg",
        "link": "https://example.com"
      }
  ]);

  // Fetch data from API
  useEffect(() => {
    const fetchAds = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("YOUR_API_ENDPOINT"); // Replace with your API endpoint
        const ApiTime = await response.json().time;
        setTime(ApiTime);
        const data = await response.json().ads;
        setAds(data); // Assuming the data is an array of objects with {imagePath, link}
      } catch (error) {
        console.error("Error fetching ads:", error);
      } finally {
        setIsLoading(false)
      }
    };

    // fetchAds(); // Uncomment this line to fetch real data from your API
  }, []);

  // Slider settings (you can customize this)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: time,
  };

  return (
    <section className="pt-24">
        {isLoading ? (
            <Spinner/>
        ) : (
            <div className="container">
            {ads.length > 0 ? (
            ads.length === 1 ? (
                // Render the ad without the slider if there is only one ad
                <div>
                <a
                    href={ads[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-center bg-no-repeat bg-cover h-64 sm:h-[30rem] block rounded-2xl"
                    style={{ backgroundImage: `url(${ads[0].imagePath})` }}
                />
                </div>
            ) : (
                // Render the slider if there are multiple ads
                <Slider {...settings}>
                {ads.map((ad, index) => (
                    <div key={index}>
                    <a
                        href={ad.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-center bg-no-repeat bg-cover h-64 sm:h-[30rem] block rounded-2xl"
                        style={{ backgroundImage: `url(${ad.imagePath})` }}
                    />
                    </div>
                ))}
                </Slider>
            )
            ) : (
            <div></div>
            )}
        </div>
        )}
        
    </section>
  );
};

export default AdsSection;
