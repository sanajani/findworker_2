import React from 'react'
import EditProfile from '@/components/editProfilePageComponent/EditProfile'
const page = () => {

  return (
    <div className='min-h-screen pt-28 pb-28 px-4 items-center '>
      <div className='bg-blue-500 shadow-lg max-w-[400px] mx-auto text-center rounded-xl font-persionFont'>
        <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-3'>فورم آپدیت کردن</h1>
        <EditProfile />
      </div>
    </div>
  )
}

export default page