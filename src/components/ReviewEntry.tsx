import React from 'react';

interface UserEntry {
    name: string; 
    location: string; 
    image: string; 
    rating: string; 
    reviewDate: string;
    notes: string;
    reviewPost: string;
}

interface ReviewEntryProps {
    user: UserEntry;
}

const ReviewEntry: React.FC<ReviewEntryProps> = ({user: { name, location, image, rating, reviewDate, notes, reviewPost }}) => {
  return (
    <div className='flex flex-col gap-3'>
        <div className='flex flex-row gap-4'>
            <div><img src={image} alt={name} className='w-[51px]' /></div>
            <div className='flex flex-col'> 
                <div className='font-extrabold'>{name}</div>
                <div className='text-[#717171] text-[16px]'>{location}</div>
            </div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <img src={rating} alt="star rating" /> <span>•</span> <span className='text-[16px]'>{reviewDate}</span>{notes && <div> <span>•</span> <span className='font-light text-[16px] text-[#717171]'>{notes}</span></div>}
        </div>
        <div>{reviewPost}</div>
    </div>
  )
}

export default ReviewEntry;