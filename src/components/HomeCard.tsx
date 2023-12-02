import React from 'react'

interface HomeCardProps {
    image: string;
    title: string;
    body: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ image, title, body }) => {
  return (
    <div className='w-[322px] h-[521px] flex flex-col flex-wrap justify-between items-center '>
        <div>
            <img src={image} alt={title} className='w-[322px]' />
        </div>
        <div className='w-[322px] h-[199px] bg-white text-left p-4'>
            <h3 className='text-[24px] font-black'>{title}</h3>
            <p className='text-[16px]'>{body}</p>
        </div>

    </div>
  )
}

export default HomeCard;
