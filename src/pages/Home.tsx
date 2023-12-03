import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import HomeGuestStories from "../components/HomeGuestStories";
import FooterHero from '../components/FooterHero';
import img1 from "../images/img1_whatsinyourairbnb_home 1.png";
import img2 from "../images/img2_whatsinyourairbnb_home 1.png";
import img3 from "../images/img3_whatsinyourairbnb_home 1.png";
import img4 from "../images/img4_whatsinyourairbnb_home 1.png";
import img5 from "../images/img5_whatsinyourairbnb_home 1.png";
import img6 from "../images/img6_whatsinyourairbnb_home 1.png";
import img7 from "../images/img7_whatsinyourairbnb_home 1.png";
import img8 from "../images/img8_whatsinyourairbnb_home 1.png";
import kitchen from '../images/icons/kitchen-pack-spoon_svgrepo.com.svg'
import wifi from '../images/icons/wifi_svgrepo.com.svg'
import workspace from '../images/icons/desk_svgrepo.com.svg'
import parking from '../images/icons/car_svgrepo.com.svg'
import tv from '../images/icons/tv-alt_svgrepo.com.svg'
import washer from '../images/icons/washing-machine_svgrepo.com.svg'
import dryer from '../images/icons/washing-machine_svgrepo.com-1.svg'
import air_conditioning from '../images/icons/air-conditioning_svgrepo.com.svg'
import patio from '../images/icons/patio_svgrepo.com.svg'
import security from '../images/icons/security-camera-cctv_svgrepo.com.svg'

export default function Home() {
  // For go "back to top" button
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  const cards1 = [
    {
      image: img1,
      title: "Celestial Backyard",
      body: "Bask in the mesmerizing night sky with friends or family in your backyard, complete with swings, stone paths, a starlit atmosphere, and a wooden fence.",
    },
    {
      image: img2,
      title: "Luxury Bath Amenities",
      body: "Take pleasure in a warm shower in your exclusive bathroom, complete with bath towels and environmentally friendly soap, shampoo, and conditioner.",
    },
    {
      image: img3,
      title: "Cooking Comfort",
      body: "Craft fond memories cooking in the fully-equipped kitchen at Redpoint. Enjoy the convenience and comfort of preparing meals in your home away from home.",
    },
    {
      image: img4,
      title: "Opulent Bed Retreat",
      body: "Indulge in opulent vacation luxury on queen beds with fresh linens and sumptuously plush pillows, creating a serene and inviting haven for unparalleled relaxation.",
    },
  ];

  const cards2 = [
    {
      image: img5,
      title: "Cafe Serenity",
      body: "Relish delightful moments at the cafe and savor leisurely times with your friends, all while basking in the warm glow of sunshine at our luxurious vacation rental.",
    },
    {
      image: img6,
      title: "Nature Embrace",
      body: "Discover modern-rustic charm at this Airbnb. Walls exude elegance, bathed in soft, ancient-style lighting. Wooden floors offer a serene connection to nature.",
    },
    {
      image: img7,
      title: "Grand Comfort",
      body: "The expansive living room offers a generously spacious environment adorned with a fireplace and plush sofas, creating an inviting and luxurious atmosphere.",
    },
    {
      image: img8,
      title: "Desert Escape",
      body: "Immerse yourself in an enchanting sojourn, cocooned by serene desert views, for an experience that seamlessly blends tranquility with natural allure.",
    },
  ];

  const amenities1 = [
    { icon: kitchen, text: "Kitchen" },
    { icon: workspace, text: "Dedicated workspace" },
    { icon: tv, text: "TV" },
    { icon: dryer, text: "Dryer" },
    { icon: patio, text: "Patio or balcony" }
  ];
  const amenities2 = [
    { icon: wifi, text: "Wifi" },
    { icon: parking, text: "Free parking on premises" },
    { icon: washer, text: "Washer" },
    { icon: air_conditioning, text: "Air conditioning" },
    { icon: security, text: "Security cameras on property" }
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-24 pt-16">
      {/* SERENE MOMENTS */}
      <div className="hero flex flex-col items-center justify-center h-[600px] w-full text-center gap-24">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[60px] font-souvenir text-white">Serene Moments</h1>
          <p className="w-[690px] text-white">
            Experience tranquility before the holiday rush. Retreat to a cozy
            vacation Airbnb exclusively for yourself during the first half of
            December and savor your getaway!
          </p>
        </div>
        <button className="bg-[#D33F3F] text-white border-2 border-white w-[240px] h-[61px]">
          Book Now
        </button>
      </div>
      {/* WHAT'S REDPOINT */}
      <div className="text-center flex flex-row justify-between items-center">
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
        <div className="w-[868px]">
          <h2 className="text-[45px] font-souvenir">What's Redpoint?</h2>
          <p>
            We are a luxury vacation Airbnb for rent in Yucca Valley,
            California. Redpoint is 2h drive from Los Angeles, California, so if
            you want to escape from the city life, we are the closest vacation
            spot for you. Redpoint is also 15 min drive from Joshua Tree
            National Park. Experience aserene stay at this 3-bedroom house with
            5-acres of awe-inspiring desert views. We are also providing 2 big
            Metolius crash pads and Tension hanging board if you want to explore
            the climbing area in Joshua Tree National Park. A modern design with
            a rustic touch, this home has an open floor plan perfect for a
            private retreat for family and friends. At Redpoint, you can enjoy
            the spectacular night sky stargazing with your favorite cuppa
            relaxing in the backyard. Don't miss out on staying at this gem!
          </p>
          <p>
            At Redpoint, we embrace the idea of creating room for more leisure
            time. Conveniently located just a short drive from Joshua Tree
            National Park and other renowned scenic spots, our vacation Airbnb
            serves as your gateway to nature. We offer the expansive open space
            you seek for relaxation and rediscovering the best part of yourself.{" "}
            <Link to="/about" className="text-[#D33F3F] font-bold underline">
              Learn More
            </Link>
          </p>
          <p>
            <span className="text-[#D33F3F] font-bold">$135 per night</span>,
            start your dream trip from Redpoint!
          </p>
        </div>
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
      </div>
      {/* WHY CHOOSE REDPOINT? */}
      <div className="text-center bg-white w-screen flex flex-row items-center justify-between">
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
        <div id="content">
          <h2 className="text-[45px] font-souvenir">Why choose Redpoint?</h2>
          <p>94% of recent guests think we have great check-in experience!</p>
          <div className="flex flex-row">
            <div className="text-left">
              <ul className="list-disc pl-5 marker:text-[#D33F3F]">
                <li>1,112 sqft (3 bedrooms, 2 baths, 1 kitchen)</li>
                <li>sanitized, self-check-in (contact-free)</li>
                <li>free parking</li>
                <li>fast & stable wifi</li>
                <li>newly renovated</li>
              </ul>
            </div>
            <div className="text-left">
              <ul className="list-disc pl-5 marker:text-[#D33F3F]">
                <li>
                  desks for remote working which include a monitor in each room
                </li>
                <li>
                  Managed by | Marbella Lane | full-service vacation rental
                  property management | Top performer by AirDNA
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
      </div>
      {/* WHAT'S IN YOUR AIRBNB */}
      <div className="text-center">
        <h2 className="text-[45px] font-souvenir">What's in Your Airbnb</h2>
        <p>
          Our vacation Airbnb provides everything you need for a comfortable
          stay.{" "}
          <span className="text-[#D33F3F] font-bold underline">
            View Gallery
          </span>
        </p>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row gap-4">
            {cards1.map((card) => {
              return (
                <HomeCard
                  image={card.image}
                  title={card.title}
                  body={card.body}
                />
              );
            })}
          </div>
          <div className="flex flex-row gap-4">
            {cards2.map((card) => {
              return (
                <HomeCard
                  image={card.image}
                  title={card.title}
                  body={card.body}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* REDPOINT AMENITIES */}
      <div className="text-center bg-white w-screen">
        <h2 className="text-[45px] font-souvenir">Redpoint Amenities</h2>
        <p>Indulge in the luxury of our comprehensive array of 36 amenities thoughtfully curated for your convenience during your stay with us.</p>
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-col gap-4">
              {amenities1.map(amenity => {
                return (
                  <div className="flex flex-row gap-2">  
                    <img src={amenity.icon} alt={amenity.text} />
                    <div>{amenity.text}</div>
                  </div>
                )})}
          </div>
          <div className="flex flex-col gap-4">
              {amenities2.map(amenity => {
                return (
                  <div className="flex flex-row gap-2">
                    <img src={amenity.icon} alt={amenity.text} />
                    <div>{amenity.text}</div>
                  </div>
                )})}
          </div>
          <div className="flex flex-col"></div>
        </div>
        <button className="w-[240px] h-[61px] bg-white border border-[#272728]">Show all 36 amenities</button>
      </div>
      {/* HOW TO BOOK REDPOINT */}
      <FooterHero image="home-footer" title="How to Book Redpoint" description="Click the button below to begin your memorable experience at Redpoint!" />
      {/* GUEST STORIES */}
      <div className="text-center bg-white w-screen">
        <h2 className="text-[45px] font-souvenir">Guest Stories</h2>
        <p>See what our guests are saying. <Link to="/reviews" className="text-[#D33F3F] font-bold underline">Read More Reviews</Link></p>
        <HomeGuestStories />
      </div>
    </div>
  );
}
