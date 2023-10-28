'use client'
import React from 'react'
import Image from 'next/image'

const MessangerLeftSidebar = () => {
  return (
    <div className='bg-gray-300 col-span-1'>
        <input type="text" placeholder='search user' />
        <ul className='mt-4'>
          <li className='flex items-center gap-4 my-4 mx-2 '>
            <Image 
            src='/profiledefalt.png'
            alt="Profile image"
            width={35}
            height={35}
            />
            <span>Sanaullah hadid</span>
          </li>
          <li className='flex items-center gap-4 my-4 mx-2'>
            <Image 
            src='/profiledefalt.png'
            alt="Profile image"
            width={35}
            height={35}
            />
            <span>Sanaullah hadid</span>
          </li>
          <li className='flex items-center gap-4 my-4 mx-2'>
            <Image 
            src='/profiledefalt.png'
            alt="Profile image"
            width={35}
            height={35}
            />
            <span>Sanaullah hadid</span>
          </li>
        </ul>
    </div>
  )
}

export default MessangerLeftSidebar