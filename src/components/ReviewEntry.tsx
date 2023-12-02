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
    <div className='flex flex-col'>
        <div className='flex flex-row'>
            <div><img src={image} alt={name} /></div>
            <div className='flex flex-col'> 
                <div>{name}</div>
                <div>{location}</div>
            </div>
        </div>
        <div><img src={rating} alt="star rating" /> - <span>{reviewDate}</span>{notes && ` - ${notes}`}</div>
        <div>{reviewPost}</div>
    </div>
  )
}

export default ReviewEntry;