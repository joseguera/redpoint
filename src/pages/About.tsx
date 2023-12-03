import React from "react";
import PageHeros from "../components/PageHeros";
import FooterHero from "../components/FooterHero";
import mainImage from '../images/photo-gallery/13.png'

export default function About() {

  const galleryButtons = [
    { name: "All", image: "" },
    { name: "Living Room", image: "" },
    { name: "House Front", image: "" },
    { name: "House Back", image: "" },
    { name: "Entrance", image: "" },
    { name: "Cafe", image: "" },
    { name: "Bedroom 1", image: "" },
    { name: "Bedroom 2", image: "" },
    { name: "Bedroom 3", image: "" },
    { name: "Backyard", image: "" },
    { name: "Kitchen", image: "" }
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-24 pt-16">
      <PageHeros heroImage="about-hero" />
      {/* REDPOINT'S STORY */}
      <div className="text-center bg-white w-screen flex flex-row items-center justify-between">
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
        <div id="content">
          <h1 className="text-[45px] font-souvenir">Redpoint's Story</h1>
          <p>
            Daisy, the founder of the vacation Airbnb known as Redpoint, drew
            inspiration from her passion for bouldering when choosing the name.
            Redpoint, a haven for travelers, reflects Daisy's commitment to
            providing a unique and adventurous lodging experience. The name is a
            testament to the adventurous spirit that permeates every aspect of
            the accommodations offered at Redpoint.
          </p>
        </div>
        <div id="gif" className="w-12 h-12 bg-[#D33F3F]">
          gif
        </div>
      </div>
      {/* PHOTO GALLERY BUTTONS */}
      <div id="content">
          <h2 className="text-[45px] font-souvenir">Redpoint's Story</h2>
          <div className="flex flex-row justify-start items-center">
            {galleryButtons.map(button => {
              return <div key={button.name} className="rounded-[21.5px] w-[168.01px] h-[43px] bg-[#D33F3F] flex justify-center items-center">{button.name}</div>

            })}
          </div>
      </div>
      {/* PHOTO GALLERY */}
      <div>
        <div className="w-[1312px] h-[872px]">
          <img src={mainImage} alt="living room"/>
        </div>
        <div>Carousel Goes here</div>
      </div>
      <FooterHero
        image="about-footer"
        title="Start dream journey here"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
    </div>
  );
}
