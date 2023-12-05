import React, { useState, useEffect, useCallback } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import kitchen1 from "../images/about/Kitchen/kitchen_1.webp";
import kitchen2 from "../images/about/Kitchen/kitchen_2.webp";
import kitchen3 from "../images/about/Kitchen/kitchen_3.webp";
import kitchen4 from "../images/about/Kitchen/kitchen_4.webp";
import kitchen5 from "../images/about/Kitchen/kitchen_5.webp";
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
    >
      {/* {newGallery?.length
        ? newGallery.map((gal) => {
            return (
              <div>
                <img src={gal.image} alt="pic" />
              </div>
            );
          })
        : currentGallery.map((gal) => {
            return (
              <div>
                <img src={gal.image} alt="pic" />
              </div>
            );
          })} */}
        {currentGallery.map((gal) => {
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
