import React, { useEffect, useRef, useState } from "react";
import PageHeros from "../components/PageHeros";
import FooterHero from "../components/FooterHero";
import { attractions } from '../utils';

export default function Attractions() {
  const allRef = useRef<HTMLButtonElement | null>(null);
  const shoppingRef = useRef<HTMLButtonElement | null>(null);
  const attractionsRef = useRef<HTMLButtonElement | null>(null);
  const [activity, setActivity] = useState("all");

  let allHighlight = allRef.current && allRef.current.innerText.toLowerCase() === activity ? "text-[#FFFFFF] font-black bg-[#D33F3F]" : "text-[#272728] font-normal bg-[#FFFFFF]"; 
  let shoppingHighlight = shoppingRef.current && shoppingRef.current.innerText.toLowerCase() === activity ? "text-[#FFFFFF] font-black bg-[#D33F3F]" : "text-[#272728] font-normal bg-[#FFFFFF]"; 
  let attractionsHighlight = attractionsRef.current && attractionsRef.current.innerText.toLowerCase() === activity ? "text-[#FFFFFF] font-black bg-[#D33F3F]" : "text-[#272728] font-normal bg-[#FFFFFF]"; 

  useEffect(() => {
    setActivity("all")
  }, [])
 
  ///////////////////////////////////////////////////
  ////////// ATTRACTIONS BUTTONS LOGIC //////////////
  ///////////////////////////////////////////////////

  // const words = [
  //   { name: 'spray', clicked: true },
  //   { name: 'elite', clicked: true },
  //   { name: 'exuberant', clicked: true },
  //   { name: 'destruction', clicked: true },
  //   { name: 'present', clicked: false }
  // ];
  
  // function result(name) {
  //   let newWords = [];
  //     words.map(word => {
  //       if (name === word.name) {
  //         word.clicked = true;
  //       } else {
  //         word.clicked = false;
  //       }
  //     })
  //     return words;
  // }
  
  // console.log(result('present'));

  return (
    <div className="flex flex-col justify-center items-center gap-24 pt-16">
      <PageHeros heroImage="attractions-hero" />
      <div id="content" className="w-[690px] flex flex-col justify-center items-center text-center gap-6">
        <h1 className="text-[45px] font-souvenir">Outdoor Bliss</h1>
        <p>
          Redpoint is surrounded by diverse attractions like Joshua Tree
          National Park for hiking, Pioneertown for exploring, Shopping outlets
          like Desert Hills Premium Outlets for shopping.
        </p>
      </div>
      <div className="flex flex-row">
        <button ref={allRef} onClick={() => setActivity('all')} className={`w-[240px] h-[61px] text-[16px] ${allHighlight} border border-[#272728] border-r-0`}>
          All
        </button>
        <button ref={shoppingRef} onClick={() => setActivity('shopping')} className={`w-[240px] h-[61px] text-[16px] ${shoppingHighlight} border border-[#272728]`}>
          Shopping
        </button>
        <button ref={attractionsRef} onClick={() => setActivity('attractions')} className={`w-[240px] h-[61px] text-[16px] ${attractionsHighlight} border border-[#272728] border-l-0`}>
          Attractions
        </button>
      </div>
      {/* ATTRACTION COMPONENT */}
      <div className="flex flex-col items-center justify-center gap-24">
        {activity !== 'all' ? (
          attractions.filter(attraction => attraction.type === activity).map((attraction) => {
            return (
              <div key={attraction.id} className="flex flex-col items-center justify-center text-center gap-6">
                <h3 className="text-[24px] font-black">{attraction.name}</h3>
                <p className="text-[#9393B0] italic">{attraction.location}</p>
                <p className="w-[1103px]" dangerouslySetInnerHTML={{__html: attraction.description}}></p>
                <div className="flex flex-row gap-6">
                  <img src={attraction.images[0]} alt={attraction.name} className="w-[568px]" />
                  <img src={attraction.images[1]} alt={attraction.name} className="w-[568px]" />
                </div>
              </div>
            )})
        ) : (
          attractions.map((attraction) => {
            return (
              <div key={attraction.id} className="flex flex-col items-center justify-center text-center gap-6">
                <h3 className="text-[24px] font-black">{attraction.name}</h3>
                <p className="text-[#9393B0] italic">{attraction.location}</p>
                <p className="w-[1103px]" dangerouslySetInnerHTML={{__html: attraction.description}}></p>
                <div className="flex flex-row gap-6">
                  <img src={attraction.images[0]} alt={attraction.name} className="w-[568px]" />
                  <img src={attraction.images[1]} alt={attraction.name} className="w-[568px]" />
                </div>
              </div>
            )})
        )}
      </div>
      <FooterHero
        image="attractions-footer"
        title="Start dream journey here"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
    </div>
  );
}
