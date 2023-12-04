import React from "react";
import kitchen1 from '../images/about/Kitchen/kitchen_1.webp'
import kitchen2 from '../images/about/Kitchen/kitchen_2.webp'
import kitchen3 from '../images/about/Kitchen/kitchen_3.webp'
import kitchen4 from '../images/about/Kitchen/kitchen_4.webp'
import kitchen5 from '../images/about/Kitchen/kitchen_5.webp'
const ReactDOM = require("react-dom");
const Carousel = require("react-responsive-carousel").Carousel;

export default function CarouselAbout() {
  const galleries = [
    { image: kitchen1 },
    { image: kitchen2 },
    { image: kitchen3 },
    { image: kitchen4 },
    { image: kitchen5 }
  ];

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
      width={1312}
      thumbWidth={215}
    //   onChange={onChange}
    //   onClickItem={onClickItem}
    //   onClickThumb={onClickThumb}
    >
        {/* <div>
            <img src={articles[2].image} alt="pic" />
            <p className="legend">Legend 1</p>
          </div> */}
      {galleries.map((gallery) => {
        return (
          <div>
            <img src={gallery.image} alt="pic" className="w-328px lg:w-[1310px]" />
          </div>
        )})}
    </Carousel>
  );
}
