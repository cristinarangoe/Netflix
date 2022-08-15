import React from 'react';

export default function MediaItem({name, image}) {
  return (
    <div className="transition-all w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
        <img src={image} className='w-full h-auto block' alt={name}/>
    </div>
  )
}
