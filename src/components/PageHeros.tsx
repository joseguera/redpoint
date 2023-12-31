import React from 'react'

interface PageHerosProps {
    heroImage: string;
}

const PageHeros: React.FC<PageHerosProps> = ({ heroImage }) => {
  return (
    <div className={`${heroImage} flex flex-col items-center justify-center h-[320px] w-full text-center gap-24`}></div>
  )
}

export default PageHeros;
