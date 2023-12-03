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
    <a className="bg-[#D33F3F] text-white border-2 border-white w-[240px] h-[61px] flex items-center justify-center" href="https://www.airbnb.com/rooms/786240811671591724?source_impression_id=p3_1699644961_8xGAbJ7xCskTo16v&locale=en&_set_bev_on_new_domain=1699646256_ZjY5ZjQ4NTUzOGE2" target="_blank" rel="noreferrer">
      Book Now
    </a>
  </div>
  )
}

export default FooterHero;
