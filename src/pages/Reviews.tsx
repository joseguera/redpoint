import React, { useState, useEffect } from "react";
import { userReviews, scores, overallRatings } from "../utils";
import PageHeros from "../components/PageHeros";
import ReviewEntry from "../components/ReviewEntry";
import FooterHero from "../components/FooterHero";
import Pagination from "../components/Pagination";
import view from "../images/icons/link-out_svgrepo.com.svg";
import wing1 from "../images/wing1.svg";
import wing2 from "../images/wing2.svg";
import search from "../images/icons/search_svgrepo.com.svg";

interface UserEntry {
  name: string;
  location: string;
  image: string;
  rating: string;
  reviewDate: string;
  notes: string;
  reviewPost: string;
}

export default function Reviews() {
  let PageSize = 10;
  const [keyword, setKeyword] = useState("");
  const [users, setUsers] = useState<UserEntry[]>([]);
  const [dataSize, setDataSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function getReview(user: string) {
    setKeyword((prevKeyword) => (prevKeyword = user));
  }

  useEffect(() => {
    async function getArticle() {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      try {
        setDataSize(userReviews.length);
        setUsers(userReviews.slice(firstPageIndex, lastPageIndex));
      } catch (error) {
        console.error(error);
      }
    }

    getArticle();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-center items-center gap-24 pt-14">
      <PageHeros heroImage="reviews-hero" />
      <div className="flex flex-col gap-10">
        {/* HEADING */}
        <div id="content" className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-3xl font-souvenir">Reviews</h1>
          <p className="text-base text-lg">See what our guests are saying.</p>
        </div>
        {/* REVIEWS HOLDER */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-24">
          {/* COL 1 */}
          <div className="flex flex-col items-center w-[310px] gap-6">
            <div className="flex flex-row justify-start gap-2">
              <img src={wing1} alt="wing" className="w-[53.65px] h-[54.85px]" />
              <p className="text-[65px] text-[#272728] font-extrabold -mt-3.5">
                4.94
              </p>
              <img src={wing2} alt="wing" className="w-[53.65px] h-[54.85px]" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-[16px] font-extrabold">Guest Favorite</h3>
              <p className="text-[#717171] text-[14px] text-center">
                One of the most loved homes on Airbnb based on ratings, reviews,
                and reliability
              </p>
            </div>
            {/* MODAL FOR VIEW ALL REVIEWS */}
            <a
              href="https://www.airbnb.com/rooms/786240811671591724/reviews?source_impression_id=p3_1699644961_8xGAbJ7xCskTo16v&locale=en&_set_bev_on_new_domain=1699646256_ZjY5ZjQ4NTUzOGE2"
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-[350px] lg:w-[240px] h-[61px] bg-white border border-[#272728] font-black flex flex-row justify-center items-center gap-3">
                <img src={view} className="w-[16px]" alt="view all" />
                <p>View all reviews</p>
              </div>
            </a>
            <div className="md:hidden lg:hidden w-[265px] text-center flex flex-col py-12 gap-6">
              <div className="flex flex-row lg:flex-col gap-10 w-full overflow-auto">
                <div className="flex flex-row lg:flex-col">
                  <div className="flex flex-col items-center gap-2 border-[#DDDDDD] border-r-2 pr-8">
                    <p className="font-extrabold">Overall Rating</p>
                    {overallRatings.map((rating) => {
                      return (
                        <div className="flex flex-row items-center gap-2">
                          <div className="text-[#9393B0] text-base">
                            {rating.ratingCategory}
                          </div>
                          <div
                            id="outer-bar"
                            className="w-[245px] h-[4px] bg-[#D9D9D9] rounded-sm"
                          >
                            <div
                              id="inner-bar"
                              className={`${rating.ratingTotal} h-full bg-[#272728] rounded-sm`}
                            >
                              
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* MOBILE SCORES */}
                  <div className="flex flex-row gap-4 px-4">
                    {scores.map((score) => {
                      return (
                        <div
                          key={score.category}
                          className="w-[265px] flex flex-col justify-between items-center border-[#DDDDDD] border-r-2 pr-4"
                        >
                          <div className="flex flex-col justify-between gap-8 items-center">
                            <div className="text-base">{score.category}</div>
                            <div className="text-base flex items-center">
                              {score.rating}
                            </div>
                            <div className="w-6 h-6">
                              <img src={score.icon} alt={score.category} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* DESKTOP SCORES */}
              <div className="hidden md:inline lg:inline">
                {scores.map((score) => {
                  return (
                    <div
                      key={score.category}
                      className="w-[279px] h-10 flex flex-row justify-between"
                    >
                      <div className="flex flex-row justify-between gap-4 items-center">
                        <div className="w-6 h-6">
                          <img src={score.icon} alt={score.category} />
                        </div>
                        <div className="text-[16px]">{score.category}</div>
                      </div>
                      <div className="text-[16px] flex items-center">
                        {score.rating}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* COL 2 */}
          <div className="flex flex-col items-start w-[350px] lg:w-[744px] gap-6">
            <div className="text-[24px] font-black">
              {userReviews.length} Reviews
            </div>
            {/* FILTER REVIEWS - SEARCH BY KEYWORD */}
            <div className="w-[350px] lg:w-[743px] h-[40px] rounded-full border border-[#272728] px-2 flex flex-row justify-start items-center gap-2">
              <img src={search} alt="search bar" />
              <input
                className="text-[16px] text-[#717171] w-full"
                placeholder="Search reviews"
                onChange={(e) => getReview(e.target.value)}
                value={keyword}
              />
            </div>
            <div className="flex flex-col gap-12">
              {users
                .filter((user) =>
                  user.reviewPost.toLowerCase().includes(keyword.toLowerCase())
                )
                .map((user) => {
                  return <ReviewEntry user={user} />;
                })}
            </div>
            <Pagination
              currentPage={currentPage}
              totalCount={dataSize}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </div>
      </div>
      <FooterHero
        image="reviews-footer"
        title="Start dream journey here"
        description="Click the button below to begin your memorable experience at Redpoint!"
      />
    </div>
  );
}
