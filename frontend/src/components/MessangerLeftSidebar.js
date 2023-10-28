'use client'
import React from 'react'
import Image from 'next/image'

const MessangerLeftSidebar = () => {
  return (
    <div>
        <input type="text" placeholder='search user' />
        <ul>
          <li>
            <Image 
            src='/profiledefalt.png'
            alt="Profile image"
            width={100}
            height={100}
            />
            <span>Sanaullah hadid</span>
          </li>
          <li>
            <Image 
            src='/profiledefalt.png'
            alt="Profile image"
            width={100}
            height={100}
            />
            <span>Sanaullah hadid</span>
          </li>
          <li>
            <Image 
            src='/profiledefalt.png'
            alt="Profile image"
            width={100}
            height={100}
            />
            <span>Sanaullah hadid</span>
          </li>
        </ul>
    </div>
  )
}

export default MessangerLeftSidebar