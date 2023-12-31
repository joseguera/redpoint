import React, { useEffect, useRef, useState } from "react";
import PageHeros from "../components/PageHeros";
import FooterHero from "../components/FooterHero";
import { attractions } from '../utils';
import dropdown_arrow from '../images/icons/dropdown_arrow.svg'

export default function Attractions() {
  const allRef = useRef<HTMLButtonElement | null>(null);
  const shoppingRef = useRef<HTMLButtonElement | null>(null);
  const attractionsRef = useRef<HTMLButtonElement | null>(null);
  const [activity, setActivity] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let allHighlight = allRef.current && allRef.current.innerText.toLowerCase() === activity ? "text-[#FFFFFF] font-black bg-[#D33F3F]" : "text-[#272728] font-normal bg-[#FFFFFF]"; 
  let shoppingHighlight = shoppingRef.current && shoppingRef.current.innerText.toLowerCase() === activity ? "text-[#FFFFFF] font-black bg-[#D33F3F]" : "text-[#272728] font-normal bg-[#FFFFFF]"; 
  let attractionsHighlight = attractionsRef.current && attractionsRef.current.innerText.toLowerCase() === activity ? "text-[#FFFFFF] font-black bg-[#D33F3F]" : "text-[#272728] font-normal bg-[#FFFFFF]"; 

  useEffect(() => {
    setActivity("all")
      window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col justify-start items-center gap-24 pt-14 static">
      <PageHeros heroImage="attractions-hero" />
      <div
        id="content"
        className="w-[350px] lg:w-[690px] flex flex-col justify-center items-center text-center gap-10"
      >
        <h1 className="text-2xl lg:text-3xl font-souvenir">Outdoor Bliss</h1>
        <p className="text-base lg:text-lg">
          Redpoint is surrounded by diverse attractions like Joshua Tree
          National Park for hiking, Pioneertown for exploring, Shopping outlets
          like Desert Hills Premium Outlets for shopping.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-20 lg:gap-6">
        <div className="hidden lg:flex flex-col lg:flex-row lg:pb-10">
          <button
            ref={allRef}
            onClick={() => setActivity("all")}
            className={`w-[240px] h-[61px] text-base ${allHighlight} border border-[#272728] border-r-0`}
          >
            All
          </button>
          <button
            ref={shoppingRef}
            onClick={() => setActivity("shopping")}
            className={`w-[240px] h-[61px] text-base ${shoppingHighlight} border border-[#272728]`}
          >
            Shopping
          </button>
          <button
            ref={attractionsRef}
            onClick={() => setActivity("attractions")}
            className={`w-[240px] h-[61px] text-base ${attractionsHighlight} border border-[#272728] border-l-0`}
          >
            Attractions
          </button>
        </div>
        {/* MOBILE DROPDOWN MENU */}
        <div className="lg:hidden dropdown text-base">
          <div onClick={() => setDropdownOpen(!dropdownOpen)} className="dropbtn w-[350px] h-[60px] border border-[#272728] flex flex-row justify-between items-center">
            <div className="w-3/4 flex flex-row justify-center pl-16">
              <span className="self-end">{activity.charAt(0).toUpperCase() + activity.substring(1)}</span>
            </div>
            <div className="w-1/4 flex flex-row justify-center">
              <img className={``} src={dropdown_arrow} alt="arrow" />
            </div>
          </div>
          <div className={`${dropdownOpen ? "inline" : "hidden"}`}>
            {/* old className dropdownOpen */}
            <div onClick={() => {setDropdownOpen(false); setActivity("all")}} className={` ${dropdownOpen ? "inline" : "hidden"} w-[350px] h-[60px] border border-t-0 border-b-0 border-[#272728] flex justify-center items-center hover:bg-white`}>All</div>
            <div onClick={() => {setDropdownOpen(false); setActivity("shopping")}} className={` ${dropdownOpen ? "inline" : "hidden"}w-[350px] h-[60px] border border-b-0 border-[#272728] flex justify-center items-center hover:bg-white`}>Shopping</div>
            <div onClick={() => {setDropdownOpen(false); setActivity("attractions")}} className={` ${dropdownOpen ? "inline" : "hidden"}w-[350px] h-[60px] border border border-[#272728] flex justify-center items-center hover:bg-white`}>Attractions</div>
          </div>
        </div>
        {/* ATTRACTION COMPONENT */}
        <div className="flex flex-col items-center justify-start gap-24 h-full">
          {activity !== "all"
            ? attractions
                .filter((attraction) => attraction.type === activity)
                .map((attraction) => {
                  return (
                    <div
                      key={attraction.id}
                      className="flex flex-col items-center justify-center text-center gap-6"
                    >
                      <h3 className="text-lg lg:text-ml w-[350px] font-black">
                        {attraction.name}
                      </h3>
                      <p className="text-base lg:text-lg text-[#9393B0] italic">
                        {attraction.location}
                      </p>
                      <p
                        className="text-base lg:text-lg w-[350px] lg:w-[650px] xl:w-[1103px]"
                        dangerouslySetInnerHTML={{
                          __html: attraction.description,
                        }}
                      ></p>
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
                        <img
                          src={attraction.images[0]}
                          alt={attraction.name}
                          className="w-[382px] lg:w-[568px]"
                        />
                        <img
                          src={attraction.images[1]}
                          alt={attraction.name}
                          className="w-[382px] lg:w-[568px]"
                        />
                      </div>
                    </div>
                  );
                })
            : attractions.map((attraction) => {
                return (
                  <div
                    key={attraction.id}
                    className="flex flex-col items-center justify-center text-center gap-6"
                  >
                    <h3 className="text-lg lg:text-ml w-[350px] font-black">
                      {attraction.name}
                    </h3>
                    <p className="text-base lg:text-lg text-[#9393B0] italic">
                      {attraction.location}
                    </p>
                    <p
                      className="text-base lg:text-lg w-[350px] md:w-[600px] lg:w-[850px] xl:w-[1103px]"
                      dangerouslySetInnerHTML={{ __html: attraction.description }}
                    ></p>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
                      <img
                        src={attraction.images[0]}
                        alt={attraction.name}
                        className="w-[382px] md:w-[500px] xl:w-[568px]"
                      />
                      <img
                        src={attraction.images[1]}
                        alt={attraction.name}
                        className="w-[382px] md:w-[500px] xl:w-[568px]"
                      />
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <FooterHero
        image="attractions-footer"
        title="Start dream journey here"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
    </div>
  );
}
