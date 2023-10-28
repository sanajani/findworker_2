import React from 'react'
import MessangerLeftSidebar from './MessangerLeftSidebar'
import MessangerRightSidebar from './MessangerRightSidebar'
import MessangerMessages from './MessangerMessages'

const MessangerComponent = () => {
  return (
    <div className='grid grid-cols-5 mx-auto bg-red-700 min-h-full max-w-6xl md:w-[900px] lg:w-[1200px] overflow-x-hidden'>
        <MessangerLeftSidebar />
        <MessangerMessages />
        <MessangerRightSidebar />
    </div>
  )
}

export default MessangerComponent