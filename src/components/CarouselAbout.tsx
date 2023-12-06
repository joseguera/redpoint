import React, { useState, useEffect, useCallback } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import kitchen_1 from '../images/about/Kitchen/kitchen_1.webp'
import kitchen_2 from '../images/about/Kitchen/kitchen_2.webp'
import kitchen_3 from '../images/about/Kitchen/kitchen_3.webp'
import kitchen_4 from '../images/about/Kitchen/kitchen_4.webp'
import kitchen_5 from '../images/about/Kitchen/kitchen_5.webp'
import kitchen_6 from '../images/about/Kitchen/kitchen_6.webp'
import backyard_1 from '../images/about/Backyard/backyard_1.webp'
import backyard_2 from '../images/about/Backyard/backyard_2.webp'
import backyard_3 from '../images/about/Backyard/backyard_3.webp'
import backyard_4 from '../images/about/Backyard/backyard_4.webp'
import backyard_5 from '../images/about/Backyard/backyard_5.webp'
import backyard_6 from '../images/about/Backyard/backyard_6.webp'
import backyard_7 from '../images/about/Backyard/backyard_7.webp'
import backyard_8 from '../images/about/Backyard/backyard_8.webp'
import backyard_9 from '../images/about/Backyard/backyard_9.webp'
import backyard_10 from '../images/about/Backyard/backyard_10.webp'
import backyard_11 from '../images/about/Backyard/backyard_11.webp'
import backyard_12 from '../images/about/Backyard/backyard_12.webp'
import backyard_13 from '../images/about/Backyard/backyard_13.webp'
import livingroom_1 from '../images/about/Living_Room/livingroom_1.webp'
import livingroom_2 from '../images/about/Living_Room/livingroom_2.webp'
import livingroom_3 from '../images/about/Living_Room/livingroom_3.webp'
import livingroom_4 from '../images/about/Living_Room/livingroom_4.webp'
import livingroom_5 from '../images/about/Living_Room/livingroom_5.webp'
import livingroom_6 from '../images/about/Living_Room/livingroom_6.webp'
import housefront_1 from '../images/about/House_Front/housefront_1.webp'
import housefront_2 from '../images/about/House_Front/housefront_2.webp'
import housefront_3 from '../images/about/House_Front/housefront_3.webp'
import housefront_4 from '../images/about/House_Front/housefront_4.webp'
import housefront_5 from '../images/about/House_Front/housefront_5.webp'
import housefront_6 from '../images/about/House_Front/housefront_6.webp'
import housefront_7 from '../images/about/House_Front/housefront_7.webp'
import housefront_8 from '../images/about/House_Front/housefront_8.webp'
import housefront_9 from '../images/about/House_Front/housefront_9.webp'
import housefront_10 from '../images/about/House_Front/housefront_10.webp'
import housefront_11 from '../images/about/House_Front/housefront_11.webp'
import housefront_12 from '../images/about/House_Front/housefront_12.webp'
import housefront_13 from '../images/about/House_Front/housefront_13.webp'
import houseback_1 from '../images/about/House_Back/houseback_1.webp'
import houseback_2 from '../images/about/House_Back/houseback_2.webp'
import houseback_3 from '../images/about/House_Back/houseback_3.webp'
import houseback_4 from '../images/about/House_Back/houseback_4.webp'
import houseback_5 from '../images/about/House_Back/houseback_5.webp'
import houseback_6 from '../images/about/House_Back/houseback_6.webp'
import houseback_7 from '../images/about/House_Back/houseback_7.webp'
import houseback_8 from '../images/about/House_Back/houseback_8.webp'
import houseback_9 from '../images/about/House_Back/houseback_9.webp'
import cafe_1 from '../images/about/Cafe/cafe_1.webp'
import cafe_2 from '../images/about/Cafe/cafe_2.webp'
import cafe_3 from '../images/about/Cafe/cafe_3.webp'
import cafe_4 from '../images/about/Cafe/cafe_4.webp'
import cafe_5 from '../images/about/Cafe/cafe_5.webp'
import cafe_6 from '../images/about/Cafe/cafe_6.webp'
import entrance_1 from '../images/about/Entrance/entrance_1.webp'
import bedroom_1_1 from '../images/about/Bedroom_1/bedroom1_1.webp'
import bedroom_1_2 from '../images/about/Bedroom_1/bedroom1_2.webp'
import bedroom_1_3 from '../images/about/Bedroom_1/bedroom1_3.webp'
import bedroom_1_4 from '../images/about/Bedroom_1/bedroom1_4.webp'
import bedroom_1_5 from '../images/about/Bedroom_1/bedroom1_5.webp'
import bedroom_1_6 from '../images/about/Bedroom_1/bedroom1_6.webp'
import bedroom_2_1 from '../images/about/Bedroom_2/bedroom2_1.webp'
import bedroom_2_2 from '../images/about/Bedroom_2/bedroom2_2.webp'
import bedroom_2_3 from '../images/about/Bedroom_2/bedroom2_3.webp'
import bedroom_2_4 from '../images/about/Bedroom_2/bedroom2_4.webp'
import bedroom_2_5 from '../images/about/Bedroom_2/bedroom2_5.webp'
import bedroom_2_6 from '../images/about/Bedroom_2/bedroom2_6.webp'
import bedroom_2_7 from '../images/about/Bedroom_2/bedroom2_7.webp'
import bedroom_2_8 from '../images/about/Bedroom_2/bedroom2_8.webp'
import bedroom_2_9 from '../images/about/Bedroom_2/bedroom2_9.webp'
import bedroom_3_1 from '../images/about/Bedroom_3/bedroom3_1.webp'
import bedroom_3_2 from '../images/about/Bedroom_3/bedroom3_2.webp'
import bedroom_3_3 from '../images/about/Bedroom_3/bedroom3_3.webp'
import bedroom_3_4 from '../images/about/Bedroom_3/bedroom3_4.webp'
import bedroom_3_5 from '../images/about/Bedroom_3/bedroom3_5.webp'
import bedroom_3_6 from '../images/about/Bedroom_3/bedroom3_6.webp'
import bedroom_3_7 from '../images/about/Bedroom_3/bedroom3_7.webp'
import bedroom_3_8 from '../images/about/Bedroom_3/bedroom3_8.webp'
import bedroom_3_9 from '../images/about/Bedroom_3/bedroom3_9.webp'
import bedroom_3_10 from '../images/about/Bedroom_3/bedroom3_10.webp'
import bedroom_3_11 from '../images/about/Bedroom_3/bedroom3_11.webp'
import bedroom_3_12 from '../images/about/Bedroom_3/bedroom3_12.webp'
import bathroom_1_1 from '../images/about/Bathroom_1/bathroom1_1.webp'
import bathroom_1_2 from '../images/about/Bathroom_1/bathroom1_2.webp'
import bathroom_1_3 from '../images/about/Bathroom_1/bathroom1_3.webp'
import bathroom_1_4 from '../images/about/Bathroom_1/bathroom1_4.webp'
import bathroom_1_5 from '../images/about/Bathroom_1/bathroom1_5.webp'
import bathroom_1_6 from '../images/about/Bathroom_1/bathroom1_6.webp'
import bathroom_1_7 from '../images/about/Bathroom_1/bathroom1_7.webp'
import bathroom_1_8 from '../images/about/Bathroom_1/bathroom1_8.webp'
import bathroom_2_1 from '../images/about/Bathroom_2/bathroom2_1.webp'
import bathroom_2_2 from '../images/about/Bathroom_2/bathroom2_2.webp'
import bathroom_2_3 from '../images/about/Bathroom_2/bathroom2_3.webp'
import bathroom_2_4 from '../images/about/Bathroom_2/bathroom2_4.webp'
import bathroom_2_5 from '../images/about/Bathroom_2/bathroom2_5.webp'
const ReactDOM = require("react-dom");
const Carousel = require("react-responsive-carousel").Carousel;

interface CarouselAboutProps {
  currentGallery: string;
}

interface Gallery {
  image: string;
}

const CarouselAbout: React.FC<CarouselAboutProps> = ({ currentGallery }) => {
  const kitchen = [
    { image: kitchen_1 },
    { image: kitchen_2 },
    { image: kitchen_3 },
    { image: kitchen_4 },
    { image: kitchen_5 },
    { image: kitchen_6 },
  ];

  const backyard = [
    { image: backyard_1 },
    { image: backyard_2 },
    { image: backyard_3 },
    { image: backyard_4 },
    { image: backyard_5 },
    { image: backyard_6 },
    { image: backyard_7 },
    { image: backyard_8 },
    { image: backyard_9 },
    { image: backyard_10 },
    { image: backyard_11 },
    { image: backyard_12 },
    { image: backyard_13 }
];

const livingRoom = [
  { image: livingroom_1 },
  { image: livingroom_2 },
  { image: livingroom_3 },
  { image: livingroom_4 },
  { image: livingroom_5 },
  { image: livingroom_6 },

];

const houseFront = [
  { image: housefront_1 },
  { image: housefront_2 },
  { image: housefront_3 },
  { image: housefront_4 },
  { image: housefront_5 },
  { image: housefront_6 },
  { image: housefront_7 },
  { image: housefront_8 },
  { image: housefront_9 },
  { image: housefront_10 },
  { image: housefront_11 },
  { image: housefront_12 },
  { image: housefront_13 },
];

const houseBack = [
  { image: houseback_1 },
  { image: houseback_2 },
  { image: houseback_3 },
  { image: houseback_4 },
  { image: houseback_5 },
  { image: houseback_6 },
  { image: houseback_7 },
  { image: houseback_8 },
  { image: houseback_9 },
];

const cafe = [
  { image: cafe_1 },
  { image: cafe_2 },
  { image: cafe_3 },
  { image: cafe_4 },
  { image: cafe_5 },
  { image: cafe_6 },
];

const entrance = [
  { image: entrance_1 },
];

const bedroom1 = [
  { image: bedroom_1_1 },
  { image: bedroom_1_2 },
  { image: bedroom_1_3 },
  { image: bedroom_1_4 },
  { image: bedroom_1_5 },
  { image: bedroom_1_6 },
];

const bedroom2 = [
  { image: bedroom_2_1 },
  { image: bedroom_2_2 },
  { image: bedroom_2_3 },
  { image: bedroom_2_4 },
  { image: bedroom_2_5 },
  { image: bedroom_2_6 },
  { image: bedroom_2_7 },
  { image: bedroom_2_8 },
  { image: bedroom_2_9 },
];

const bedroom3 = [
  { image: bedroom_3_1 },
  { image: bedroom_3_2 },
  { image: bedroom_3_3 },
  { image: bedroom_3_4 },
  { image: bedroom_3_5 },
  { image: bedroom_3_6 },
  { image: bedroom_3_7 },
  { image: bedroom_3_8 },
  { image: bedroom_3_9 },
  { image: bedroom_3_10 },
  { image: bedroom_3_11 },
  { image: bedroom_3_12 },
];
const bathroom1 = [
  { image: bathroom_1_1 },
  { image: bathroom_1_2 },
  { image: bathroom_1_3 },
  { image: bathroom_1_4 },
  { image: bathroom_1_5 },
  { image: bathroom_1_6 },
  { image: bathroom_1_7 },
  { image: bathroom_1_8 },
];
const bathroom2 = [
  { image: bathroom_2_1 },
  { image: bathroom_2_2 },
  { image: bathroom_2_3 },
  { image: bathroom_2_4 },
  { image: bathroom_2_5 },
];

const all = [
  ...kitchen, 
  ...backyard, 
  ...livingRoom, 
  ...houseBack, 
  ...houseFront, 
  ...cafe, 
  ...entrance, 
  ...bedroom1, 
  ...bedroom2, 
  ...bedroom3, 
  ...bathroom1, 
  ...bathroom2
]




  const [newGallery, setNewGallery] = useState<Gallery[]>(kitchen)
  const [videoDimensions, setVideoDimensions] = useState({
    width: 980,
    height: 551.25,
  });
  const { height, width } = useWindowDimensions();

  // sm => DONE
  // lg => DONE

  // 'md': '768px',
  // => @media (min-width: 768px) { ... }

  // 'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  // '2xl': '1366px',

  // '3xl': '1536px',
  // => @media (min-width: 1536px) { ... }

  // '4xl': '2560px'

  const getWidth = useCallback(() => {
    if (width <= 640) {
      setVideoDimensions({ width: 382, height: 96 });
    } else if (width <= 768) {
      setVideoDimensions({ width: 550, height: 90 });
      // } else if (width <= 1024) {
    } else if (width <= 1280) {
      setVideoDimensions({ width: 900, height: 147 });
    } else {
      setVideoDimensions({ width: 1312, height: 215 });
    }
    // else if (width <= 1280) {
    //   setVideoDimensions({ width: 950, height: 534 })
    // }
  }, [width]);

  const getCurrentGellery = useCallback(() => {
    let newList: Gallery[] = [];
    if (currentGallery === 'all') {
      newList = all;
    } else if (currentGallery === "kitchen") {
      newList = kitchen;
    } else if (currentGallery === "backyard") {
      newList = backyard;
    } else if (currentGallery === "living room") {
      newList = livingRoom;
    } else if (currentGallery === "house front") {
      newList = houseFront;
    } else if (currentGallery === "house back") {
      newList = houseBack;
    } else if (currentGallery === "cafe") {
      newList = cafe;
    } else if (currentGallery === "entrance") {
      newList = entrance;
    } else if (currentGallery === "bedroom 1") {
      newList = bedroom1;
    } else if (currentGallery === "bedroom 2") {
      newList = bedroom2;
    } else if (currentGallery === "bedroom 3") {
      newList = bedroom3;
    } else if (currentGallery === "bathroom 1") {
      newList = bathroom1;
    } else if (currentGallery === "bathroom 2") {
      newList = bathroom2;
    }
    setNewGallery(newList);
  }, [currentGallery, all, kitchen, backyard, livingRoom, houseFront, houseBack, cafe, entrance, bedroom1, bedroom2, bedroom3, bathroom1, bathroom2])

  useEffect(() => {
    getCurrentGellery();
    getWidth();
  }, [width, getWidth, getCurrentGellery, bathroom1]);

  

  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      transitionTime={2000}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={true}
      showIndicators={false}
      centerMode={false}
      centerSlidePercentage={100}
      width={videoDimensions.width}
      thumbWidth={videoDimensions.height}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={80}
      dynamicHeight={false}
    >
        {newGallery.map((gal) => {
            return (
              <div>
                <img src={gal.image} alt={currentGallery} />
              </div>
            );
          })}
    </Carousel>
  );
};

export default CarouselAbout;
