import React from 'react';
import PageHeros from '../components/PageHeros';
import ReviewEntry from '../components/ReviewEntry';
import FooterHero from '../components/FooterHero';


export default function Reviews() {
  const reviews = [
    { name: "", location: "", image: "", rating: "", reviewDate: "", reviewPost: "" }
  ]
  return (
    <div>
      <PageHeros heroImage='reviews-hero' />
      <div id="content">
          <h2 className="text-[45px] font-souvenir">Reviews</h2>
          <p>
            See what our guests are saying.
          </p>
      </div> 
       {/* REVIEWS HOLDER */}
       <div>
        {/* COL 1 */}
          <div>
            <div>4.94</div>
            <div>
              <h3>Guest Favorite</h3>
              <p>See what our guests are saying.</p>
            </div>
            <div><p>icon</p> View all reviews</div>
            <div>
              Overall Rating
              <div>5</div>
              <div>4</div>
              <div>3</div>
              <div>2</div>
              <div>1</div>
            </div>
            <div>
              <div>
                <div>
                  <div>icon</div>
                  <div>text</div>
                </div>
                <div>Score</div>
              </div>
            </div>
          </div>
        {/* COL 2 */}
        <div>
          <div>17 Reviews</div>
          <input />
          <div>
            {/* Map through array of reviews passing props to ReviewEntry */}
            <ReviewEntry />
          </div>
          <div>{`< 1 2 >`}</div>
        </div>
       </div>
      <FooterHero image="reviews-footer" title="Start dream journey here" description="Click the button below to begin your memorable experience at Redpoint!" />
    </div>
  )
}
