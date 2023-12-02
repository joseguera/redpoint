import React from "react";
import quotes from "../images/quotes.svg";
import rating from "../images/rating_stars.svg";
import olivia from "../images/avatar1.png";
import yifan from "../images/avatar2.png";

export default function HomeGuestStories() {
  const users = [
    {
      image: olivia,
      reviewDate: "October 2023",
      reviewerName: "Olivia",
      reviewText:
        "Great place to stay in Yucca Valley! We only stayed one night but would definitely come back for more. The house is very spacious and the yard even more. It has everything you need and is very clean. The surroundings are beautiful and really quiet. The hosts are also very accommodating and communicative!",
    },
    {
      image: yifan,
      reviewDate: "August 2023",
      reviewerName: "Yifan",
      reviewText:
        "Very close to Joshua Tree National Park while the place remains away from noisy traffic and tourist. A great place to enjoy. The room is very clean and organized. Responsive host.",
    },
  ];

  return (
    <div className="flex flex-row justify-between items-center">
      {users.map((user) => {
        return (
          <div className="flex flex-col">
            <img src={quotes} alt="quote symbols" />
            <p>{user.reviewText}</p>
            <div className="flex flex-row justify-between items-center">
              <img src={user.image} alt="user" />
              <div className="flex flex-col justify-between items-center">
                <img src={rating} alt="star rating" /> &#8226; <span>{user.reviewDate}</span>
                <p></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
