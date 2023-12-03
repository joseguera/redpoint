import React, { useState, useEffect } from 'react';
import { userReviews } from '../utils';
import PageHeros from '../components/PageHeros';
import ReviewEntry from '../components/ReviewEntry';
import FooterHero from '../components/FooterHero';
import Pagination from '../components/Pagination';
import view from '../images/icons/link-out_svgrepo.com.svg';
import cleanliness from "../images/icons/clean_svgrepo.com.svg";
import accuracy from "../images/icons/fact-check_svgrepo.com.svg";
import check_in from "../images/icons/key-alt_svgrepo.com.svg";
import communication from "../images/icons/communication-bubble-chat-comment-talk-speech-icon_svgrepo.com.svg";
import location from "../images/icons/location-pin_svgrepo.com.svg";
import value from "../images/icons/price-tag-price_svgrepo.com.svg";
import wing1 from '../images/wing1.svg';
import wing2 from '../images/wing2.svg';
import search from '../images/icons/search_svgrepo.com.svg';

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
  const [dataSize, setDataSize] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);

  const scores = [
    { icon: cleanliness, category: "Cleanliness", rating: 4.9 },
    { icon: accuracy, category: "Accuracy", rating: 5.0 },
    { icon: check_in, category: "Check-in", rating: 4.9 },
    { icon: communication, category: "Communication", rating: 5.0 },
    { icon: location, category: "Location", rating: 4.9 },
    { icon: value, category: "Value", rating: 4.9 }
  ];
  const overallRatings = [
    { ratingCategory: 5, ratingTotal: "w-4/5"  },
    { ratingCategory: 4, ratingTotal: "w-1/5"  },
    { ratingCategory: 3, ratingTotal: "w-3/5"  },
    { ratingCategory: 2, ratingTotal: "w-2/5"  },
    { ratingCategory: 1, ratingTotal: "w-0"  },
  ];

  function getReview(user: string) {
    setKeyword(prevKeyword => prevKeyword = user)
  }

  useEffect(() => {
    async function getArticle() {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      try {
      setDataSize(userReviews.length)
      setUsers(userReviews.slice(firstPageIndex, lastPageIndex))
      } catch (error) {
        console.error(error);
      }
    }

    getArticle();
    window.scrollTo(0, 0)
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-center items-center gap-24 pt-16">
      <PageHeros heroImage='reviews-hero' />
      <div className='flex flex-col gap-10'>
        {/* HEADING */}
        <div id="content" className='flex flex-col items-center'>
            <h1 className="text-[45px] font-souvenir">Reviews</h1>
            <p>
              See what our guests are saying.
            </p>
        </div> 
        {/* REVIEWS HOLDER */}
        <div className='flex flex-row items-start justify-center gap-24'>
          {/* COL 1 */}
            <div className='flex flex-col items-center w-[310px] gap-6'>
              <div className='flex flex-row justify-start gap-2'>
                <img src={wing1} alt="wing" className='w-[53.65px] h-[54.85px]' />
                <p className='text-[65px] text-[#272728] font-extrabold -mt-3.5'>4.94</p>
                <img src={wing2} alt="wing" className='w-[53.65px] h-[54.85px]' />
              </div>
              <div className='flex flex-col items-center gap-2'>
                <h3 className='text-[16px] font-extrabold'>Guest Favorite</h3>
                <p className='text-[#717171] text-[16px] text-center'>One of the most loved homes on Airbnb based on ratings, reviews, and reliability</p>
              </div>
              <button className="w-[240px] h-[61px] bg-white border border-[#272728] font-black flex flex-row justify-center items-center gap-3">
                <img src={view} className="w-[16px]" alt="view all" />
                <p>View all reviews</p>
              </button>
              <div className='flex flex-col items-center gap-2'>
                <p className='font-extrabold'>Overall Rating</p>
                {overallRatings.map(rating => {
                  return (
                    <div className='flex flex-row items-center gap-2'>
                      <div className='text-[#9393B0] text-[16px]'>{rating.ratingCategory}</div>
                      <div id="outer-bar" className='w-[245px] h-[4px] bg-[#D9D9D9] rounded-sm'>
                        <div id="inner-bar" className={`${rating.ratingTotal} h-full bg-[#272728] rounded-sm`}></div>
                      </div>
                    </div>
                  )})}
              </div>
              <div>
                {scores.map(score => {
                  return (
                    <div key={score.category} className='w-[279px] h-10 flex flex-row justify-between border-b border-[#DDDDDD]'>
                      <div className='flex -flex-row justify-between gap-4 items-center'>
                        <div className="w-6 h-6"><img src={score.icon} alt={score.category} /></div>
                        <div className='text-[16px]'>{score.category}</div>
                      </div>
                      <div className='text-[16px] flex items-center'>{score.rating}</div>
                    </div>
                  )})}
              </div>
            </div>
          {/* COL 2 */}
          <div className='flex flex-col items-start w-[744px] gap-6'>
            <div className='text-[24px] font-black'>17 Reviews</div>
            {/* FILTER REVIEWS - SEARCH BY KEYWORD */}
            <div className='w-[743px] h-[40px] rounded-full border border-[#272728] px-2 flex flex-row justify-start items-center gap-2'>
              <img src={search} alt="search bar" />
              <input
                className='text-[16px] text-[#717171] w-full'
                placeholder='Search reviews' 
                onChange={(e) => getReview(e.target.value)}
                value={keyword}
              />
            </div>
            <div className='flex flex-col gap-12'>
              {users.filter(user => user.reviewPost.toLowerCase().includes(keyword.toLowerCase())).map(user => {
                return <ReviewEntry user={user} />

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
      <FooterHero image="reviews-footer" title="Start dream journey here" description="Click the button below to begin your memorable experience at Redpoint!" />
    </div>
  )
}
