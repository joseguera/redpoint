import React from 'react';
import PageHeros from '../components/PageHeros';
import FooterHero from '../components/FooterHero';

export default function Attractions() {
  return (
    <div>
      <PageHeros heroImage='attractions-hero' />
      <div id="content">
          <h2 className="text-[45px] font-souvenir">Outdoor Bliss</h2>
          <p>
            Redpoint is surrounded by diverse attractions like Joshua Tree National Park for hiking, Pioneertown for exploring, Shopping outlets like Desert Hills Premium Outlets for shopping.
          </p>
      </div>
      <div className='flex flex-row'>
        <button className="w-[240px] h-[61px] bg-[#D33F3F] border border-[#272728]">All</button>
        <button className="w-[240px] h-[61px] border border-[#272728]">Shopping</button>
        <button className="w-[240px] h-[61px] border border-[#272728]">Attractions</button>
      </div>
      {/* ATTRACTION COMPONENT */}
      <div>
        <h3>Title</h3>
        <p>distance</p>
        <p>description</p>
        <div className='flex flex-row'>
          <img src="" alt="image1" />
          <img src="" alt="image2" />
        </div>
      </div>
      <FooterHero image="attractions-footer" title="Start dream journey here" description="Click the button below to begin your memorable experience at Redpoint!" />
    </div>
  )
}
