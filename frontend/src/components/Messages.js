import React from 'react'
import Image from 'next/image'


const Messages = ({own}) => {
    return (
        <>
            {/* own class sender */}
            <div className={own ? 'own' : 'sender'}>
                {/* ownimageparadev class senderimageparadev */}
                <div className={own ? 'ownimageparadev' : 'senderimageparadev'}>
                    <Image
                        src='/profiledefalt.png'
                        alt='This is Image'
                        width={40}
                        height={40}
                       className={own ? 'own' : 'senderImage'}
                        />
                    {/* ownPara class ownPara */}
                    <p className={own ? 'ownPara' : 'senderPara'}>Hell this is a message</p>
                </div>
                <span className={own ? 'ownMessageTime' : 'senderMessageTime'}>1 hour ago</span>
                {/* <span className=''>1 hour ago</span> */}
            </div>
        </>
    )
}

export default Messages