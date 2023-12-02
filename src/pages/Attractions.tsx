import React from 'react';
import PageHeros from '../components/PageHeros';
import FooterHero from '../components/FooterHero';

export default function Attractions() {
  return (
    <div>
      <PageHeros heroImage='attractions-hero' />
      <FooterHero image="attractions-footer" title="Start dream journey here" description="Click the button below to begin your memorable experience at Redpoint!" />
    </div>
  )
}
