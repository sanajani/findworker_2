import React from 'react'
import Image from 'next/image'

const Message = ({own}) => {
  return (
    // <div className={'flex flex-col my-4' + !own ?'': 'items-end bg-red-600'}>
    <div className={`flex flex-col my-4 ${own && 'items-end'}`}>
        {/* message top */}
        <div className='flex flex-row  items-center'>
            <Image 
                alt="profiledefalt"
                src='/profiledefalt.png'
                width={30}
                height={30}
                className='object-cover rounded-full mr-2'
            />
            <p className={`p-3 rounded-3xl lg:text-base max-w-[300px] ${own ? 'bg-gray-300 text-black':'bg-blue-700 text-white'}`}>Hello this is a message Hello this is a message Hello this </p>
        </div>
        {/* message bottom */}
        <span className='text-sm mt-2'>1 hour ago</span>
    </div>
  )
}

export default Message