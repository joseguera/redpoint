import React, { useState, useEffect, useCallback } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import kitchen1 from "../images/about/Kitchen/kitchen_1.webp";
import kitchen2 from "../images/about/Kitchen/kitchen_2.webp";
import kitchen3 from "../images/about/Kitchen/kitchen_3.webp";
import kitchen4 from "../images/about/Kitchen/kitchen_4.webp";
import kitchen5 from "../images/about/Kitchen/kitchen_5.webp";
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
const ReactDOM = require("react-dom");
const Carousel = require("react-responsive-carousel").Carousel;

interface CarouselAboutProps {
  newGallery?: any[];
}

const CarouselAbout: React.FC<CarouselAboutProps> = ({ newGallery }) => {
  const currentGallery = [
    { image: kitchen1 },
    { image: kitchen2 },
    { image: kitchen3 },
    { image: kitchen4 },
    { image: kitchen5 },
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

  useEffect(() => {
    getWidth();
  }, [width, getWidth]);

  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      transitionTime={2000}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={true}
      centerMode={true}
      centerSlidePercentage={100}
      width={videoDimensions.width}
      thumbWidth={videoDimensions.height}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={80}
      dynamicHeight={true}
    >
        {backyard.map((gal) => {
            return (
              <div>
                <img src={gal.image} alt="pic" />
              </div>
            );
          })}
    </Carousel>
  );
};

export default CarouselAbout;
