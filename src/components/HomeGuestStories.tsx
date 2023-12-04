import React from "react";
import quotes from "../images/quotes.svg";
import rating from "../images/rating_stars.svg";
import olivia from "../images/user-avatars/olivia.png";
import yifan from "../images/user-avatars/yifan.png";

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
    <div className="flex flex-row justify-center items-start gap-4">
      {users.map((user) => {
        return (
          <div className="flex flex-col lg:w-[605px] h-[350px] justify-between items-start gap-6 relative">
            <img
              src={quotes}
              alt="quote symbols"
              className="w-[249px] lg:w-[255px] h-[201px] self-start absolute -top-28 -left-0 lg:-left-14"
            />
            <p className="w-[350px] lg:w-[486px] text-left">{user.reviewText}</p>
            <div className="flex flex-row justify-start items-center gap-4">
              <img src={user.image} alt="user" />
              <div className="flex flex-col justify-between items-start">
                <div className="flex flex-row justify-between items-center gap-2">
                  <img src={rating} alt="star rating" /> <span>&#8226;</span>{" "}
                  <span className="text-[16px]">{user.reviewDate}</span>
                </div>
                <p className="font-extrabold">{user.reviewerName}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
