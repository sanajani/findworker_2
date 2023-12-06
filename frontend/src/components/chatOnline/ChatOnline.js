import Image from 'next/image'
import React from 'react'

const ChatOnline = () => {
  return (
    // chat online
    <div className='my-3'>
                    {/* chat online friends */}
        <div className='flex items-center font-medium cursor-pointer'>
            <div className='relative'>
            {/* chat online image container */}
            <Image 
                alt="profiledefalt"
                src='/profiledefalt.png'
                width={50}
                height={50}
                className='object-cover rounded-full mr-4 border-2 border-green-400'
            />
                {/* chat online badge */}
                <div className='absolute top-0 left-0 w-3 h-3 block bg-green-400 rounded-full'></div>
            </div>
            <span>Sanaullah Hadid</span>
        </div>
    </div>
  )
}

export default ChatOnline