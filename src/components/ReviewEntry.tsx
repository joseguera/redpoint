import React from 'react';

interface ReviewEntryProps {
    name: string; 
    location: string; 
    image: string; 
    rating: string; 
    reviewDate: string;
    reviewPost: string;
}

export default function ReviewEntry() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row'>
            <div>user image</div>
            <div className='flex flex-col'> 
                <div>user name</div>
                <div>user location</div>
            </div>
        </div>
        <div>stars - date</div>
        <div>review text</div>
    </div>
  )
}
