import React from "react";
import PageHeros from "../components/PageHeros";
import FooterHero from "../components/FooterHero";
import { attractions } from "../utils";

export default function Attractions() {
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
        <button className="w-[240px] h-[61px] text-[16px] text-[#FFFFFF] font-black bg-[#D33F3F] border border-[#272728] border-r-0">
          All
        </button>
        <button className="w-[240px] h-[61px] text-[16px] font-black border border-[#272728]">
          Shopping
        </button>
        <button className="w-[240px] h-[61px] text-[16px] font-black border border-[#272728] border-l-0">
          Attractions
        </button>
      </div>
      {/* ATTRACTION COMPONENT */}
      <div className="flex flex-col items-center justify-center gap-24">
        {attractions.map((attraction) => {
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
          );
        })}
      </div>
      <FooterHero
        image="attractions-footer"
        title="Start dream journey here"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
    </div>
  );
}
