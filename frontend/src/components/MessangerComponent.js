import React from 'react'
import MessangerLeftSidebar from './MessangerLeftSidebar'
import MessangerRightSidebar from './MessangerRightSidebar'
import MessangerMessages from './MessangerMessages'

const MessangerComponent = () => {
  return (
    <div className='grid gap-4 grid-cols-5 mx-auto max-w-7xl md:w-[900px] lg:w-[1200px] overflow-x-hidden max-h-screen'>
        <MessangerLeftSidebar />
        <MessangerMessages />
        <MessangerRightSidebar />
    </div>
  )
}

export default MessangerComponent