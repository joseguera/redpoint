import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // For go "back to top" button
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <div className="flex flex-col items-center pt-32 w-full">
      <div className="flex flex-col items-center h-full w-full text-center bg-[url('../images/home_heroimage 1.png')]">
        <h1 className="text-6xl">Serene Moments</h1>
        <p className="text-xl">
          Experience tranquility before the holiday rush. Retreat to a cozy
          vacation Airbnb exclusively for yourself during the first half of
          December and savor your getaway!
        </p>
        <button className="bg-[#D33F3F] text-white border-2 border-white w-[240px] h-[61px]">
          Book Now
        </button>
      </div>
      <div className="text-center flex flex-row justify-between items-center">
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
        <div className="w-[868px]">
          <h2 className="text-6xl">What's Redpoint?</h2>
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
      <div className="text-center bg-white w-screen flex flex-row items-center justify-between">
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
        <div id="content">
          <h2 className="text-6xl">Why choose Redpoint?</h2>
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
      {/* 
      // SECTION TEMPLATE
      <div className="text-center bg-white">
        <h2 className="text-6xl"></h2>
        <p></p>
        <div className="flex flex-row"></div>
      </div>
      */}
    </div>
  );
}
