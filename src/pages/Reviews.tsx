import React from 'react';
import PageHeros from '../components/PageHeros';
import FooterHero from '../components/FooterHero';


export default function Reviews() {
  return (
    <div>
      <PageHeros heroImage='reviews-hero' />
      <FooterHero image="reviews-footer" title="Start dream journey here" description="Click the button below to begin your memorable experience at Redpoint!" />
    </div>
  )
}
