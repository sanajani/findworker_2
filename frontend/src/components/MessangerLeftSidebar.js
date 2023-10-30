'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const MessangerLeftSidebar = () => {
  const {user} = useSelector((state) => state.isAuthState);
  console.log(user);
  

  return (
    <div className='bg-gray-300 col-span-1 max-h-screen'>
      <h1 className='bg-gray-600 mt-3 py-3 text-center text-lg text-white font-bold'>Your All Friends</h1>
      <div className='pr-2'>
      <input type="text" placeholder='search user' className='px-1 py-3 my-2' />
      </div>
        <ul className='mt-4'>
        <li className='rounded-lg my-2 flex mt-3 cursor-pointer items-center gap-2 bg-white w-full p-2'>
            <div className='w-10 h-10 relative'>
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

export default MessangerLeftSidebar