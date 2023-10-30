import React from 'react'
import Image from 'next/image'

const MessangerRightSidebar = () => {
  return (
    <div className='bg-gray-200 max-h-screen'>
      <h1 className='bg-gray-600 mt-3 py-3 text-center text-lg text-white font-bold'>Your Online Friends</h1>
      <ul className='px-1'>
        <li className='rounded-lg cursor-pointer my-2 flex mt-3 items-center gap-2 bg-white w-full p-2'>
            <div className='w-10 h-10 relative'>
              <span className='block w-3 h-3 rounded-full bg-green-500 absolute z-50'></span>
              <Image 
              src='/profiledefalt.png'
              alt="Profile image"
              fill={true}
              />
            </div>
            <span>Sanaullah hadid</span>
        </li>
        </ul>
    </div>
  )
}

export default MessangerRightSidebar