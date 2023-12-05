import React, { useEffect } from "react";
import PageHeros from "../components/PageHeros";
import CarouselAbout from "../components/CarouselAbout";
import FooterHero from "../components/FooterHero";
import mainImage from "../images/photo-gallery/13.png";
import butterfly1 from "../images/gifs/img_gif_about1.svg";
import butterfly2 from "../images/gifs/img_gif_about2.svg";

export default function About() {
  const galleryButtons = [
    { name: "All", images: "", selected: true },
    { name: "Living Room", images: [], selected: false },
    { name: "House Front", image: [], selected: false },
    { name: "House Back", images: [], selected: false },
    { name: "Entrance", images: [], selected: false },
    { name: "Cafe", images: [], selected: false },
    { name: "Bedroom 1", images: [], selected: false },
    { name: "Bedroom 2", images: [], selected: false },
    { name: "Bedroom 3", images: [], selected: false },
    { name: "Bathroom 1", images: [], selected: false },
    { name: "Bathroom 2", images: [], selected: false },
    { name: "Backyard", images: [], selected: false },
    { name: "Kitchen", images: [], selected: false }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-14 flex flex-col justify-center items-center lg:pt-16">
      <PageHeros heroImage="about-hero" />
      {/* REDPOINT'S STORY */}
      <div className="text-center w-screen flex flex-row items-center justify-center py-12 pb-36 lg:py-24 relative">
        <img
          src={butterfly1}
          alt="butterfly 1"
          className="hidden lg:inline w-[109px] absolute lg:top-28 lg:left-24"
        />
        <img
          src={butterfly2}
          alt="butterfly 2"
          className="w-[83px] absolute bottom-10 lg:bottom-20 lg:right-32"
        />
        <div
          id="content"
          className="w-[350px] lg:w-[690px] flex flex-col justify-center items-center text-center gap-6"
        >
          <h1 className="text-2xl lg:text-3xl font-souvenir">
            Redpoint's Story
          </h1>
          <p className="text-base lg:text-lg">
            Daisy, the founder of the vacation Airbnb known as Redpoint, drew
            inspiration from her passion for bouldering when choosing the name.
            Redpoint, a haven for travelers, reflects Daisy's commitment to
            providing a unique and adventurous lodging experience. The name is a
            testament to the adventurous spirit that permeates every aspect of
            the accommodations offered at Redpoint.
          </p>
        </div>
      </div>
      {/* PHOTO GALLERY BUTTONS */}
      <div
        id="content"
        className="bg-white w-screen flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center gap-10 py-10 lg:pt-24">
          <h2 className="text-2xl lg:text-3xl font-souvenir">Photo Gallery</h2>

          <div className="w-[350px] lg:w-fit text-center flex flex-col py-12 gap-6 lg:items-center">
            <div className="flex flex-row gap-10 xl:pl-[40px] 2xl:pl-[60px] w-full lg:w-11/12 overflow-auto">
              <div className="flex flex-row lg:flex-wrap gap-2 lg:gap-4">
                {galleryButtons.map((button) => {
                  return (
                    <div
                      key={button.name}
                      className={`rounded-[21.5px] w-[168.01px] h-[43px] ${button.selected ? "bg-[#D33F3F] text-white" : "bg-[#FFFFFF] text-[#272728] border-2 border-[#272728]" } flex justify-center items-center hover:cursor-pointer`}
                    >
                      {button.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* PHOTO GALLERY */}
        <CarouselAbout />
        <FooterHero
          image="about-footer"
          title="Start dream journey here"
          description="Click the button below to begin your memorable experience at Redpoint!"
        />
      </div>
    </div>
  );
}
