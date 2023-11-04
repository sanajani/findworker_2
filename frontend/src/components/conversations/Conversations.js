import React from 'react'
import Image from 'next/image'

const Conversations = () => {
  return (
    <div className='flex items-center p-3 hover:bg-slate-200 mt-2 transition-all cursor-pointer'>
        <Image 
        alt="profiledefalt"
        src='/profiledefalt.png'
        width={50}
        height={50}
        className='object-cover rounded-full mr-4'
        />
        <span className='text-lg font-normal'>Sana Mobini</span>
    </div>
  )
}

export default Conversations