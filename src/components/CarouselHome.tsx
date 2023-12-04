import React from "react";
import image1 from "../images/home_heroimage_1.png";
import image2 from "../images/home_heroimage_2.png";
import image3 from "../images/home_heroimage_3.png";
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;

export default function CarouselHome() {
  const articles = [{ image: image1 }, { image: image2 }, { image: image3 }];

  return (
    <Carousel
      showArrows={false}
      autoPlay={true}
      interval={3000}
      transitionTime={2000}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
    >
      <div>
        <img src={articles[0].image} alt="pic" className="h-[600px]" />
      </div>
      <div>
        <img src={articles[1].image} alt="pic" className="h-[600px]" />
      </div>
      <div>
        <img src={articles[2].image} alt="pic" className="h-[600px]" />
      </div>
    </Carousel>
  );
}
