import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { useEffect } from 'react';
import api from '@/utils/api';

const Conversations = ({conversation,currentUser}) => {
  const [user,setUser] = useState(null)

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id)
    const getUser = async () => {
      try {
        const res = await api.get(`/api/users/all/userId/${friendId}`)
        setUser(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getUser()
  },[currentUser, conversation])

  return (
    <div className='flex items-center p-3 hover:bg-slate-200 mt-2 transition-all cursor-pointer'>
        <Image 
        alt="profiledefalt"
        src='/profiledefalt.png'
        width={50}
        height={50}
        className='object-cover rounded-full mr-4'
        />
        <span className='text-lg font-normal'>{user?.name}</span>
    </div>
  )
}

export default Conversations