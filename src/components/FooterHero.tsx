import React from 'react'

interface FooterHeroProps {
    image: string;
    title: string;
    description: string;
}

const FooterHero: React.FC<FooterHeroProps> = ({ image, title, description }) => {
  return (
    <div className={`${image} text-center text-white w-screen h-[508px] flex flex-col justify-center items-center gap-24`}>
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-[60px] font-souvenir">{title}</h2>
      <p>{description}</p>
    </div>
    <button className="bg-[#D33F3F] text-white border-2 border-white w-[240px] h-[61px]">
      Book Now
    </button>
  </div>
  )
}

export default FooterHero;
