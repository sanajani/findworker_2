import React from 'react'
import Messages from './Messages'

const MessangerMessages = () => {
    return (
        <div className='w-full bg-grey-200 col-span-3 py-5 max-h-screen '>
            <div className='h-[80vh] bg-white overflow-x-hidden overflow-scroll w-full shadow-lg my-2'>
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
            <div className='flex bg-white items-center justify-between md:mt-3 shadow-lg'>
                <textarea className='w-[80%] h-24 p-2 border-2 resize-none' placeholder='write somethig... '></textarea>
                <button className='w-20 text-white cursor-pointer h-10 border-none rounded-md bg-blue-500 mr-5'>Send</button>
            </div>
        </div>
    )
}

export default MessangerMessages