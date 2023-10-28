import React from 'react'
import MessangerLeftSidebar from './MessangerLeftSidebar'
import MessangerRightSidebar from './MessangerRightSidebar'

const MessangerComponent = () => {
  return (
    <div className='flex justify-between mx-auto bg-red-900 max-w-6xl md:w-[900px] overflow-x-hidden'>
        <MessangerLeftSidebar />
        <div className='w-[500px]'>
            <h1>Hello world</h1>
        </div>
        <MessangerRightSidebar />
    </div>
  )
}

export default MessangerComponent