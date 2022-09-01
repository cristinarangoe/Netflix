import React from 'react'


export default function TierCard({name ,info, onClick} ) {
    const {title, description, tier, currentTier, price } = info

  return (
    <div>
    <button>
{tier === currentTier ? <button onClick={onClick} className="block p-6 max-w-xs bg-white rounded-lg border shadow-md hover:bg-gray-100  ">
    <div className='flex flex-row text-black'>
    <div className='w-[90%]'>
    <h5 class="mb-2 text-2xl font-bold tracking-tight  dark:text-red-600 ">{title}</h5>
    </div>
    <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-white self-center"><svg className="w-6 h-6" color={"rgb(29,78,216)"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg></h5>
    </div>
    <p class="font-normal mt-[5%]">{description}.</p>
    <br/>
    <span className=' font-bold'>Price: ${price}/month</span>
    
</button> : 
<button onClick={onClick} className="text-center block p-6 max-w-xs bg-red-500/30 rounded-lg border shadow-md hover:bg-gray-100">
    <div className='flex flex-between'>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{title}</h5>
    </div>
    <p class="font-normal text-gray-700 dark:text-gray-400 mt-[5%]">{description}.</p>
    <br/>
    <span className='text-gray-400 font-bold'>Price: ${price}/month</span>
</button>
  
  }
  </button>
</div>


  )
}
