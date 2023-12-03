import React from "react";
import image1 from "../images/page-heros/about_topimage 1.png";
import image2 from "../images/page-heros/attractions_topimage 1.png";
import image3 from "../images/page-heros/contactus_topimage 1.png";
import image4 from "../images/page-heros/reviews_topimage 1.png";
var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;

export default function CarouselHome() {
  const articles = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
  ];

  return (
    <Carousel
      showArrows={false}
      autoplay={true}
    //   onChange={onChange}
    //   onClickItem={onClickItem}
    //   onClickThumb={onClickThumb}
    >
        {/* <div>
            <img src={articles[2].image} alt="pic" />
            <p className="legend">Legend 1</p>
          </div> */}
          <div>
            <img src={articles[0].image} alt="pic" />
          </div>
          <div>
            <img src={articles[1].image} alt="pic" />
          </div>
          <div>
            <img src={articles[2].image} alt="pic" />
          </div>
          <div>
            <img src={articles[3].image} alt="pic" />
          </div>

    </Carousel>
  );
}
