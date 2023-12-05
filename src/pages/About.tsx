import React, { useEffect, useState } from "react";
import PageHeros from "../components/PageHeros";
import CarouselAbout from "../components/CarouselAbout";
import FooterHero from "../components/FooterHero";
import images from "../images/about/index";
import butterfly1 from "../images/gifs/img_gif_about1.svg";
import butterfly2 from "../images/gifs/img_gif_about2.svg";
import backyard_1 from '../images/about/Backyard/backyard_1.webp';
//   backyard_2: require("./Backyard/backyard_2.webp"),
//   backyard_3: require("./Backyard/backyard_3.webp"),
//   backyard_4: require("./Backyard/backyard_4.webp"),
//   backyard_5: require("./Backyard/backyard_5.webp"),
//   backyard_6: require("./Backyard/backyard_6.webp"),
//   backyard_7: require("./Backyard/backyard_7.webp"),
//   backyard_8: require("./Backyard/backyard_8.webp"),
//   backyard_9: require("./Backyard/backyard_9.webp"),
//   backyard_10: require("./Backyard/backyard_10.webp"),
//   backyard_11: require("./Backyard/backyard_11.webp"),
//   backyard_12: require("./Backyard/backyard_12.webp"),
//   backyard_13: require("./Backyard/backyard_13.webp"),

// const bathroom_1 = {
// bathroom_1_1: require("./Bathroom_1/bathroom1_1.webp"),
// bathroom_1_2: require("./Bathroom_1/bathroom1_2.webp"),
// bathroom_1_3: require("./Bathroom_1/bathroom1_3.webp"),
// bathroom_1_4: require("./Bathroom_1/bathroom1_4.webp"),
// bathroom_1_5: require("./Bathroom_1/bathroom1_5.webp"),
// bathroom_1_6: require("./Bathroom_1/bathroom1_6.webp"),
// bathroom_1_7: require("./Bathroom_1/bathroom1_7.webp"),
// bathroom_1_8: require("./Bathroom_1/bathroom1_8.webp"),

// };
// const bathroom_2 = {
// bathroom_2_1: require("./Bathroom_2/bathroom2_1.webp"),
// bathroom_2_2: require("./Bathroom_2/bathroom2_2.webp"),
// bathroom_2_3: require("./Bathroom_2/bathroom2_3.webp"),
// bathroom_2_4: require("./Bathroom_2/bathroom2_4.webp"),
// bathroom_2_5: require("./Bathroom_2/bathroom2_5.webp"),

// };
// const bedroom_1 = {
// bedroom_1_1: require("./Bedroom_1/bedroom1_1.webp"),
// bedroom_1_2: require("./Bedroom_1/bedroom1_2.webp"),
// bedroom_1_3: require("./Bedroom_1/bedroom1_3.webp"),
// bedroom_1_4: require("./Bedroom_1/bedroom1_4.webp"),
// bedroom_1_5: require("./Bedroom_1/bedroom1_5.webp"),
// bedroom_1_6: require("./Bedroom_1/bedroom1_6.webp"),

// };
// const bedroom_2 = {
// bedroom_2_1: require("./Bedroom_2/bedroom2_1.webp"),
// bedroom_2_2: require("./Bedroom_2/bedroom2_2.webp"),
// bedroom_2_3: require("./Bedroom_2/bedroom2_3.webp"),
// bedroom_2_4: require("./Bedroom_2/bedroom2_4.webp"),
// bedroom_2_5: require("./Bedroom_2/bedroom2_5.webp"),
// bedroom_2_6: require("./Bedroom_2/bedroom2_6.webp"),
// bedroom_2_7: require("./Bedroom_2/bedroom2_7.webp"),
// bedroom_2_8: require("./Bedroom_2/bedroom2_8.webp"),
// bedroom_2_9: require("./Bedroom_2/bedroom2_9.webp"),

// };
// const bedroom_3 = {
// bedroom_3_1: require("./Bedroom_3/bedroom3_1.webp"),
// bedroom_3_2: require("./Bedroom_3/bedroom3_2.webp"),
// bedroom_3_3: require("./Bedroom_3/bedroom3_3.webp"),
// bedroom_3_4: require("./Bedroom_3/bedroom3_4.webp"),
// bedroom_3_5: require("./Bedroom_3/bedroom3_5.webp"),
// bedroom_3_6: require("./Bedroom_3/bedroom3_6.webp"),
// bedroom_3_7: require("./Bedroom_3/bedroom3_7.webp"),
// bedroom_3_8: require("./Bedroom_3/bedroom3_8.webp"),
// bedroom_3_9: require("./Bedroom_3/bedroom3_9.webp"),
// bedroom_3_10: require("./Bedroom_3/bedroom3_10.webp"),
// bedroom_3_11: require("./Bedroom_3/bedroom3_11.webp"),
// bedroom_3_12: require("./Bedroom_3/bedroom3_12.webp"),

// };
// const cafe = {
//   cafe_1: require("./Cafe/cafe_1.webp"),
//   cafe_2: require("./Cafe/cafe_2.webp"),
//   cafe_3: require("./Cafe/cafe_3.webp"),
//   cafe_4: require("./Cafe/cafe_4.webp"),
//   cafe_5: require("./Cafe/cafe_5.webp"),
//   cafe_6: require("./Cafe/cafe_6.webp"),

// };
// const entrance = {
//   entrance_1: require("./Entrance/entrance_1.webp"),

// };
// const house_back = {
//   houseback_1: require("./House_Back/houseback_1.webp"),
//   houseback_2: require("./House_Back/houseback_2.webp"),
//   houseback_3: require("./House_Back/houseback_3.webp"),
//   houseback_4: require("./House_Back/houseback_4.webp"),
//   houseback_5: require("./House_Back/houseback_5.webp"),
//   houseback_6: require("./House_Back/houseback_6.webp"),
//   houseback_7: require("./House_Back/houseback_7.webp"),
//   houseback_8: require("./House_Back/houseback_8.webp"),
//   houseback_9: require("./House_Back/houseback_9.webp"),

// };
// const house_front = {
//   housefront_1: require("./House_Front/housefront_1.webp"),
//   housefront_2: require("./House_Front/housefront_2.webp"),
//   housefront_3: require("./House_Front/housefront_3.webp"),
//   housefront_4: require("./House_Front/housefront_4.webp"),
//   housefront_5: require("./House_Front/housefront_5.webp"),
//   housefront_6: require("./House_Front/housefront_6.webp"),
//   housefront_7: require("./House_Front/housefront_7.webp"),
//   housefront_8: require("./House_Front/housefront_8.webp"),
//   housefront_9: require("./House_Front/housefront_9.webp"),
//   housefront_10: require("./House_Front/housefront_10.webp"),
//   housefront_11: require("./House_Front/housefront_11.webp"),
//   housefront_12: require("./House_Front/housefront_12.webp"),
//   housefront_13: require("./House_Front/housefront_13.webp"),

// };
// const kitchen = {
//   kitchen_1: require("./Kitchen/kitchen_1.webp"),
//   kitchen_2: require("./Kitchen/kitchen_2.webp"),
//   kitchen_3: require("./Kitchen/kitchen_3.webp"),
//   kitchen_4: require("./Kitchen/kitchen_4.webp"),
//   kitchen_5: require("./Kitchen/kitchen_5.webp"),
//   kitchen_6: require("./Kitchen/kitchen_6.webp"),

// };
// const living_room = {
//   livingroom_1: require("./Living_Room/livingroom_1.webp"),
//   livingroom_2: require("./Living_Room/livingroom_2.webp"),
//   livingroom_3: require("./Living_Room/livingroom_3.webp"),
//   livingroom_4: require("./Living_Room/livingroom_4.webp"),
//   livingroom_5: require("./Living_Room/livingroom_5.webp"),
//   livingroom_6: require("./Living_Room/livingroom_6.webp"),

// };

export default function About() {
  const [currentGallery, setCurrentGallery] = useState([])
  const [gallery, setGallery] = useState([
    { name: "All", images: [

    ], selected: true },
    { name: "Living Room", images: [
      images.living_room.livingroom_1,
      images.living_room.livingroom_2,
      images.living_room.livingroom_3,
      images.living_room.livingroom_4,
      images.living_room.livingroom_5,
      images.living_room.livingroom_6,
    ], selected: false },
    { name: "House Front", image: [
      images.house_front.housefront_1,
      images.house_front.housefront_2,
      images.house_front.housefront_3,
      images.house_front.housefront_4,
      images.house_front.housefront_5,
      images.house_front.housefront_6,
      images.house_front.housefront_7,
      images.house_front.housefront_8,
      images.house_front.housefront_9,
      images.house_front.housefront_10,
      images.house_front.housefront_11,
      images.house_front.housefront_12,
      images.house_front.housefront_13,
    ], selected: false },
    { name: "House Back", images: [
      images.house_back.houseback_1,
      images.house_back.houseback_2,
      images.house_back.houseback_3,
      images.house_back.houseback_4,
      images.house_back.houseback_5,
      images.house_back.houseback_6,
      images.house_back.houseback_7,
      images.house_back.houseback_8,
      images.house_back.houseback_9,
    ], selected: false },
    { name: "Entrance", images: [
      images.entrance.entrance_1
    ], selected: false },
    { name: "Cafe", images: [
      images.cafe.cafe_1,
      images.cafe.cafe_2,
      images.cafe.cafe_3,
      images.cafe.cafe_4,
      images.cafe.cafe_5,
      images.cafe.cafe_6,
    ], selected: false },
    { name: "Bedroom 1", images: [
      images.bedroom_1.bedroom_1_1,
      images.bedroom_1.bedroom_1_2,
      images.bedroom_1.bedroom_1_3,
      images.bedroom_1.bedroom_1_4,
      images.bedroom_1.bedroom_1_5,
      images.bedroom_1.bedroom_1_6,
    ], selected: false },
    { name: "Bedroom 2", images: [
      images.bedroom_2.bedroom_2_1,
      images.bedroom_2.bedroom_2_2,
      images.bedroom_2.bedroom_2_3,
      images.bedroom_2.bedroom_2_4,
      images.bedroom_2.bedroom_2_5,
      images.bedroom_2.bedroom_2_6,
      images.bedroom_2.bedroom_2_7,
      images.bedroom_2.bedroom_2_8,
      images.bedroom_2.bedroom_2_9,
    ], selected: false },
    { name: "Bedroom 3", images: [
      images.bedroom_3.bedroom_3_1,
      images.bedroom_3.bedroom_3_2,
      images.bedroom_3.bedroom_3_3,
      images.bedroom_3.bedroom_3_4,
      images.bedroom_3.bedroom_3_5,
      images.bedroom_3.bedroom_3_6,
      images.bedroom_3.bedroom_3_7,
      images.bedroom_3.bedroom_3_8,
      images.bedroom_3.bedroom_3_9,
      images.bedroom_3.bedroom_3_10,
      images.bedroom_3.bedroom_3_11,
      images.bedroom_3.bedroom_3_12,
    ], selected: false },
    { name: "Bathroom 1", images: [
      images.bathroom_1.bathroom_1_1,
      images.bathroom_1.bathroom_1_2,
      images.bathroom_1.bathroom_1_3,
      images.bathroom_1.bathroom_1_4,
      images.bathroom_1.bathroom_1_5,
      images.bathroom_1.bathroom_1_6,
      images.bathroom_1.bathroom_1_7,
      images.bathroom_1.bathroom_1_8,
    ], selected: false },
    { name: "Bathroom 2", images: [
      images.bathroom_2.bathroom_2_1,
      images.bathroom_2.bathroom_2_2,
      images.bathroom_2.bathroom_2_3,
      images.bathroom_2.bathroom_2_4,
      images.bathroom_2.bathroom_2_5
    ], selected: false },
    { name: "Backyard", images: [images.backyard.backyard_1,
      images.backyard.backyard_2,
      images.backyard.backyard_3,
      images.backyard.backyard_4,
      images.backyard.backyard_5,
      images.backyard.backyard_6,
      images.backyard.backyard_7,
      images.backyard.backyard_8,
      images.backyard.backyard_9,
      images.backyard.backyard_10,
      images.backyard.backyard_11,
      images.backyard.backyard_12,
      images.backyard.backyard_13], selected: false },
    { name: "Kitchen", images: [
      images.kitchen.kitchen_1, 
      images.kitchen.kitchen_2, 
      images.kitchen.kitchen_3, 
      images.kitchen.kitchen_4, 
      images.kitchen.kitchen_5, 
      images.kitchen.kitchen_6, 
    ], selected: false }
  ]);

  function getSelection(name: string) {
    setGallery(
      gallery.map((photo) =>
        photo.name === name
          ? { ...photo, selected: true }
          : { ...photo, selected: false }
      )
    );
  }

  function printImages() {
    gallery.map(gal => {
      console.log(gal.images)
    })
  }

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
          className="w-[83px] absolute bottom-10 lg:bottom-10 lg:right-10 xl:bottom-20 xl:right-32"
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
                {gallery.map((button) => {
                  return (
                    <div
                      key={button.name}
                      onClick={() => {getSelection(button.name); printImages()}}
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
        <CarouselAbout newGallery={gallery.map(gal => gal.selected && gal.images)}  />
        <FooterHero
          image="about-footer"
          title="Start dream journey here"
          description="Click the button below to begin your memorable experience at Redpoint!"
        />
      </div>
    </div>
  );
}
