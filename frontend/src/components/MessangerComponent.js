import React from 'react'
import MessangerLeftSidebar from './MessangerLeftSidebar'
import MessangerRightSidebar from './MessangerRightSidebar'
import MessangerMessages from './MessangerMessages'

const MessangerComponent = () => {
  return (
    <div className='grid grid-cols-5 mx-auto max-w-6xl md:w-[900px] lg:w-[1100px] overflow-x-hidden max-h-screen'>
        <MessangerLeftSidebar />
        <MessangerMessages />
        <MessangerRightSidebar />
    </div>
  )
}

export default MessangerComponent