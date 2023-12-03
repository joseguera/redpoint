import React, { useState } from "react";
import ReviewEntry from "./ReviewEntry";
import { userReviews, scores, overallRatings } from "../utils";
import view from "../images/icons/link-out_svgrepo.com.svg";
import x_closer from "../images/icons/x-closer.svg";
import wing1 from "../images/wing1.svg";
import wing2 from "../images/wing2.svg";
import search from "../images/icons/search_svgrepo.com.svg";

interface Props {}

const ModalReviews: React.FC<Props> = () => {
  const [showModal, setShowModal] = useState(false);
  const [keyword, setKeyword] = useState("");

  function getReview(user: string) {
    setKeyword((prevKeyword) => (prevKeyword = user));
  }

  return (
    <>
      <button
        className="w-[240px] h-[61px] bg-white border border-[#272728] font-black flex flex-row justify-center items-center gap-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img src={view} className="w-[16px]" alt="view all" />
        <p>View all reviews</p>
      </button>
      {showModal ? (
        <>
          {/* MODAL BACKGROUND */}
          <div
            className="flex justify-center items-center fixed inset-0 z-20 outline-none focus:outline-none bg-[#00000085]"
          >
            {/* MODAL CONTAINER */}
            <div className="relative w-11/12 h-[700px] my-6 mx-auto max-w-5xl">
              {/* MODAL BODY */}
              <div className="border-0 rounded-[30px] shadow-lg relative w-full bg-white outline-none focus:outline-none overflow-hidden z-30">
                  {/* X CLOSER */}
                  <div className="bg-white py-6 flex justify-start items-center px-6 rounded-[30px]">
                    <button
                      className="bg-transparent border-0 float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <img src={x_closer} alt="close modal" />
                    </button>
                  </div>
                <div className="h-[700px] flex flex-col items-start justify-between p-6 gap-7">
                  {/* REVIEWS HOLDER */}
                  <div className="flex flex-row items-start justify-center gap-8">
                    {/* COL 1 */}
                    <div className="flex flex-col items-center w-1/3 gap-6 h-[700px] position-sticky overflow-scroll">
                      <div className="flex flex-row justify-start gap-2">
                        <img
                          src={wing1}
                          alt="wing"
                          className="w-[53.65px] h-[54.85px]"
                        />
                        <p className="text-[65px] text-[#272728] font-extrabold -mt-3.5">
                          4.94
                        </p>
                        <img
                          src={wing2}
                          alt="wing"
                          className="w-[53.65px] h-[54.85px]"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <h3 className="text-[16px] font-extrabold">
                          Guest Favorite
                        </h3>
                        <p className="text-[#717171] text-[16px] text-center">
                          One of the most loved homes on Airbnb based on
                          ratings, reviews, and reliability
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <p className="font-extrabold">Overall Rating</p>
                        {overallRatings.map((rating) => {
                          return (
                            <div className="flex flex-row items-center gap-2">
                              <div className="text-[#9393B0] text-[16px]">
                                {rating.ratingCategory}
                              </div>
                              <div
                                id="outer-bar"
                                className="w-[245px] h-[4px] bg-[#D9D9D9] rounded-sm"
                              >
                                <div
                                  id="inner-bar"
                                  className={`${rating.ratingTotal} h-full bg-[#272728] rounded-sm`}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {scores.map((score) => {
                          return (
                            <div
                              key={score.category}
                              className="w-[279px] h-10 flex flex-row justify-between border-b border-[#DDDDDD]"
                            >
                              <div className="flex -flex-row justify-between gap-4 items-center">
                                <div className="w-6 h-6">
                                  <img src={score.icon} alt={score.category} />
                                </div>
                                <div className="text-[16px]">
                                  {score.category}
                                </div>
                              </div>
                              <div className="text-[16px] flex items-center">
                                {score.rating}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* COL 2 */}
                    <div className="flex flex-col items-start w-2/3 gap-6 h-screen overflow-scroll">
                      <div className="border-b border-[#717171] pb-4 flex flex-col gap-6 fixed bg-white">
                        <div className="text-[24px] font-black">
                          {userReviews.length} Reviews
                        </div>
                        {/* FILTER REVIEWS - SEARCH BY KEYWORD */}
                        <div className="w-[743px] h-[40px] rounded-full border border-[#272728] p-5 flex flex-row justify-start items-center sticky">
                          <img src={search} alt="search bar" />
                          <input
                            className="text-[16px] text-[#717171] w-full px-2 py-10"
                            placeholder="Search reviews"
                            onChange={(e) => getReview(e.target.value)}
                            value={keyword}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-12 pb-60 pt-[180px]">
                        {userReviews
                          .filter((user) =>
                            user.reviewPost
                              .toLowerCase()
                              .includes(keyword.toLowerCase())
                          )
                          .map((user) => {
                            return <ReviewEntry user={user} />;
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ModalReviews;
