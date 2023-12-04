import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import CarouselHome from "../components/CarouselHome";
import ModalHome from "../components/ModalHome";
// import HomeGuestStories from "../components/HomeGuestStories";
import FooterHero from "../components/FooterHero";
import img1 from "../images/img1_whatsinyourairbnb_home 1.png";
import img2 from "../images/img2_whatsinyourairbnb_home 1.png";
import img3 from "../images/img3_whatsinyourairbnb_home 1.png";
import img4 from "../images/img4_whatsinyourairbnb_home 1.png";
import img5 from "../images/img5_whatsinyourairbnb_home 1.png";
import img6 from "../images/img6_whatsinyourairbnb_home 1.png";
import img7 from "../images/img7_whatsinyourairbnb_home 1.png";
import img8 from "../images/img8_whatsinyourairbnb_home 1.png";
import kitchen from "../images/icons/kitchen-pack-spoon_svgrepo.com.svg";
import wifi from "../images/icons/wifi_svgrepo.com.svg";
import workspace from "../images/icons/desk_svgrepo.com.svg";
import parking from "../images/icons/car_svgrepo.com.svg";
import tv from "../images/icons/tv-alt_svgrepo.com.svg";
import washer from "../images/icons/washing-machine_svgrepo.com.svg";
import dryer from "../images/icons/washing-machine_svgrepo.com-1.svg";
import air_conditioning from "../images/icons/air-conditioning_svgrepo.com.svg";
import patio from "../images/icons/patio_svgrepo.com.svg";
import security from "../images/icons/security-camera-cctv_svgrepo.com.svg";
import pot from "../images/gifs/RedPiont_ILLU_002.gif";
import swing from "../images/gifs/illustration_001.gif";
import leaves from "../images/gifs/img_gif_home3.svg";
import spark from "../images/gifs/img_gif_home4.svg";
import stars from "../images/gifs/img_gif_home5.svg";
import cypress from "../images/gifs/illustration_003.gif";
import quotes from "../images/quotes.svg";
import rating from "../images/rating_stars.svg";
import olivia from "../images/user-avatars/olivia.png";
import yifan from "../images/user-avatars/yifan.png";

export default function Home() {
  // For go "back to top" button

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const users = [
    {
      image: olivia,
      reviewDate: "October 2023",
      reviewerName: "Olivia",
      reviewText:
        "Great place to stay in Yucca Valley! We only stayed one night but would definitely come back for more. The house is very spacious and the yard even more. It has everything you need and is very clean. The surroundings are beautiful and really quiet. The hosts are also very accommodating and communicative!",
    },
    {
      image: yifan,
      reviewDate: "August 2023",
      reviewerName: "Yifan",
      reviewText:
        "Very close to Joshua Tree National Park while the place remains away from noisy traffic and tourist. A great place to enjoy. The room is very clean and organized. Responsive host.",
    },
  ];

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

  const cards3 = [
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
  ];

  const amenities1 = [
    { icon: kitchen, text: "Kitchen" },
    { icon: workspace, text: "Dedicated workspace" },
    { icon: tv, text: "TV" },
    { icon: dryer, text: "Dryer" },
    { icon: patio, text: "Patio or balcony" },
  ];
  const amenities2 = [
    { icon: wifi, text: "Wifi" },
    { icon: parking, text: "Free parking on premises" },
    { icon: washer, text: "Washer" },
    { icon: air_conditioning, text: "Air conditioning" },
    { icon: security, text: "Security cameras on property" },
  ];

  return (
    <div className="pt-14 flex flex-col justify-center items-center lg:pt-16">
      {/* SERENE MOMENTS */}
      <div className="hero flex flex-col items-center justify-center h-[600px] w-screen text-center gap-24 relative">
        {/* HERO CAROUSEL */}
        <CarouselHome />
        {/* HERO TEXT & BUTTON */}
        <div className=" flex flex-col items-center gap-20 absolute">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl lg:text-3xl font-souvenir text-white">
              Serene Moments
            </h1>
            <p className="text-base lg:text-lg w-[350px] lg:w-[690px] text-white">
              Experience tranquility before the holiday rush. Retreat to a cozy
              vacation Airbnb exclusively for yourself during the first half of
              December and savor your getaway!
            </p>
          </div>
          <a
            href="https://www.airbnb.com/rooms/786240811671591724?source_impression_id=p3_1699644961_8xGAbJ7xCskTo16v&locale=en&_set_bev_on_new_domain=1699646256_ZjY5ZjQ4NTUzOGE2"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#D33F3F] w-[140px] lg:w-[240px] text-white text-base font-black lg:text-lg border-2 border-white h-[61px] flex flex-col justify-center align-center">
              Book Now
            </div>
          </a>
        </div>
      </div>
      {/* WHAT'S REDPOINT */}
      <div className="lg:h-[800px] text-center flex flex-col lg:flex-row justify-between items-center gap-6">
        <img
          src={pot}
          alt="pot on fire"
          className="w-[215px] hidden lg:inline"
        />
        <div className="w-[350px] lg:w-[1103px] py-12 lg:py-0 flex flex-col gap-6">
          <h2 className="text-2xl lg:text-3xl font-souvenir">
            What's Redpoint?
          </h2>
          <p className="text-base lg:text-lg">
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
          <p className="text-base lg:text-lg">
            At Redpoint, we embrace the idea of creating room for more leisure
            time. Conveniently located just a short drive from Joshua Tree
            National Park and other renowned scenic spots, our vacation Airbnb
            serves as your gateway to nature. We offer the expansive open space
            you seek for relaxation and rediscovering the best part of yourself.{" "}
            <Link to="/about" className="text-[#D33F3F] font-bold underline">
              Learn More
            </Link>
          </p>
          <p className="text-base lg:text-lg">
            <span className="text-[#D33F3F] font-bold">$135 per night</span>,
            start your dream trip from Redpoint!
          </p>
        </div>
        <img src={swing} alt="relax swing" className="w-[215px]" />
      </div>
      {/* WHY CHOOSE REDPOINT? */}
      <div className="text-center bg-[#FFFFFF] w-screen py-12 lg:py-0 lg:h-[547px] flex flex-col lg:flex-row justify-center items-center gap-4">
        <img
          src={leaves}
          alt="leaves"
          className="hidden lg:inline w-[86.94px] h-[82.27px]"
        />
        <div
          id="content"
          className="w-[350px] lg:w-[1103px] flex flex-col justify-center items-center text-center gap-6"
        >
          <h2 className="text-2xl lg:text-3xl font-souvenir">
            Why choose Redpoint?
          </h2>
          <p>94% of recent guests think we have great check-in experience!</p>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div className="text-left lg:w-[450px]">
              <ul className="text-base lg:text-lg list-disc pl-5 marker:text-[#D33F3F]">
                <li>1,112 sqft (3 bedrooms, 2 baths, 1 kitchen)</li>
                <li>sanitized, self-check-in (contact-free)</li>
                <li>free parking</li>
                <li>fast & stable wifi</li>
                <li>newly renovated</li>
              </ul>
            </div>
            <div className="text-left lg:w-[450px]">
              <ul className="text-base lg:text-lg list-disc pl-5 marker:text-[#D33F3F]">
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
        <img src={spark} alt="sparkling" className="w-[87.88px] h-[82.88px]" />
      </div>
      {/* WHAT'S IN YOUR AIRBNB */}
      <div className="w-[350px] lg:w-fit text-center flex flex-col py-24 gap-6">
        <h2 className="text-2xl lg:text-3xl font-souvenir">
          What's in Your Airbnb
        </h2>
        <p className="text-base lg:text-lg">
          Our vacation Airbnb provides everything you need for a comfortable
          stay.{" "}
          <Link
            to="/about"
            className="text-base lg:text-lg text-[#D33F3F] font-bold underline"
          >
            View Gallery
          </Link>
        </p>
        <div className="flex flex-row lg:flex-col gap-10 w-full overflow-auto">
          <div className="flex flex-row lg:flex-col gap-4">
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
          <div className="flex flex-row lg:flex-row gap-4">
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
      <div className="py-16 lg:py-0 text-center bg-white w-screen lg:h-[800px] flex flex-col justify-center items-center gap-10 pb-60 lg:pb-0 lg:gap-16 relative">
        <img
          src={stars}
          alt="stars"
          className="hidden lg:inline w-[84px] h-[101.87px] absolute top-16 left-14"
        />
        <img
          src={cypress}
          alt="cypress tree"
          className="w-[215px] absolute bottom-8 lg:right-2"
        />
        <div className="flex flex-col gap-2 w-[350px] lg:w-[1103px]">
          <h2 className="text-2xl lg:text-3xl font-souvenir">
            Redpoint Amenities
          </h2>
          <p className="text-base lg:text-lg">
            Indulge in the luxury of our comprehensive array of 36 amenities
            thoughtfully curated for your convenience during your stay with us.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-4">
            {amenities1.map((amenity) => {
              return (
                <div className="w-[350px] flex flex-row gap-2">
                  <img src={amenity.icon} alt={amenity.text} />
                  <div>{amenity.text}</div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            {amenities2.map((amenity) => {
              return (
                <div className="flex flex-row gap-2">
                  <img src={amenity.icon} alt={amenity.text} />
                  <div>{amenity.text}</div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col"></div>
        </div>
        {/* SHOW ALL 36 AMENITIES MODAL */}
        <ModalHome />
      </div>
      {/* HOW TO BOOK REDPOINT */}
      <FooterHero
        image="home-footer"
        title="How to Book Redpoint"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
      {/* GUEST STORIES */}
      <div className="flex flex-col py-24">
        <div className="text-center flex flex-col gap-12 items-center">
          <h2 className="text-2xl lg:text-3xl font-souvenir">Guest Stories</h2>
          <p className="w-[250px] lg:w-fit text-base lg:text-lg">
            See what our guests are saying.{" "}
            <Link to="/reviews" className="text-[#D33F3F] font-bold underline">
              Read More Reviews
            </Link>
          </p>
      </div>
      <div className="w-[350px] lg:w-fit text-center flex flex-col py-12 lg:py-24 gap-6">
      <div className="flex flex-row lg:flex-col gap-10 w-full overflow-auto">
        <div className="flex flex-row lg:flex-col gap-4">
        <div className="flex flex-row lg:flex-col gap-10 w-full overflow-auto">
      <div className="flex flex-row lg:flex-col lg:flex-row gap-4">
        {users.map((user) => {
          return (
            <div className="flex flex-col lg:w-[605px] h-fit justify-between items-start gap-6 relative">
              <img
                src={quotes}
                alt="quote symbols"
                className="w-[149px] lg:w-[255px] h-[201px] self-start absolute -top-10 lg:-top-28 -left-0 lg:-left-14"
                />
              <p className="w-[350px] lg:w-[486px] text-left">
                {user.reviewText}
              </p>
              <div className="flex flex-row justify-start items-center gap-4">
                <img src={user.image} alt="user" />
                <div className="flex flex-col justify-between items-start">
                  <div className="flex flex-row justify-between items-center gap-2">
                    <img src={rating} alt="star rating" /> <span>&#8226;</span>{" "}
                    <span className="text-[16px]">{user.reviewDate}</span>
                  </div>
                  <p className="font-extrabold">{user.reviewerName}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
        </div>
      </div>
      </div>
      {/* <div className="flex flex-col py-24">
        <div className="text-center flex flex-col gap-12 items-center">
          <h2 className="text-2xl lg:text-3xl font-souvenir">Guest Stories</h2>
          <p className="w-[250px] lg:w-fit text-base lg:text-lg">
            See what our guests are saying.{" "}
            <Link to="/reviews" className="text-[#D33F3F] font-bold underline">
              Read More Reviews
            </Link>
          </p>
        </div>
        <div className="flex flex-row lg:flex-col gap-10 w-full overflow-auto">
          <div className="flex flex-row lg:flex-col lg:flex-row gap-4">
            {users.map((user) => {
              return (
                <div className="flex flex-col lg:w-[605px] h-[350px] justify-between items-start gap-6 relative">
                  <img
                    src={quotes}
                    alt="quote symbols"
                    className="w-[149px] lg:w-[255px] h-[201px] self-start absolute -top-20 lg:-top-28 -left-0 lg:-left-14"
                  />
                  <p className="w-[350px] lg:w-[486px] text-left">
                    {user.reviewText}
                  </p>
                  <div className="flex flex-row justify-start items-center gap-4">
                    <img src={user.image} alt="user" />
                    <div className="flex flex-col justify-between items-start">
                      <div className="flex flex-row justify-between items-center gap-2">
                        <img src={rating} alt="star rating" />{" "}
                        <span>&#8226;</span>{" "}
                        <span className="text-[16px]">{user.reviewDate}</span>
                      </div>
                      <p className="font-extrabold">{user.reviewerName}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {" "}
      </div> */}
    </div>
  );
}
