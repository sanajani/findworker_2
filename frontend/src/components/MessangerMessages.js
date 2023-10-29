import React from 'react'
import Messages from './Messages'

const MessangerMessages = () => {
    return (
        <div className='w-full bg-white col-span-3 p-5 max-h-screen'>
            <div className='h-[80vh] overflow-x-hidden overflow-scroll shadow-lg my-2'>
                <Messages />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
                <Messages />
                <Messages />
                <Messages own={true} />
                <Messages />
            </div>
            <div className='flex items-center justify-between md:mt-3 shadow-lg'>
                <textarea className='w-[80%] h-24 p-2 border-2 resize-none' placeholder='write somethig... '></textarea>
                <button className='w-20 text-white cursor-pointer h-10 border-none rounded-md bg-blue-500'>Send</button>
            </div>
        </div>
    )
}

export default MessangerMessages