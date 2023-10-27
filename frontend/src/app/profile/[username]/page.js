'use client'
import React from 'react'
import Image from 'next/image'
import AboutUser from '../../../components/AboutUser'
import useSWR from 'swr'
import { fetcher } from '@/helper/fetcher'
import { useParams } from 'next/navigation'



const Profile = () => {
    const {username} = useParams()
    const {data, isLoading, error} = useSWR(`/api/users/all/${username}`,fetcher)

    if(isLoading) return <h1>Loading...</h1>


    return (
        <main className='min-h-screen pt-24 w-full md:max-w-[1200px] mx-auto border-2'>
            <div className='flex items-center flex-col md:flex-row'>
                <div className=''>
                    <div className='rounded-full relative md:h-56 md:w-56 h-28 w-28'>
                        {/* {console.log(data?.profileImage)} */}
                        <Image
                            placeholder="blur"
                            blurDataURL={'/profiledefalt.png'}
                            // src={!data?.profileImage ? '/profiledefalt.png' : data?.profileImage}
                            src='/profiledefalt.png'
                            alt='userProfile'
                            fill={true}
                            className='rounded-full overflow-hidden absolute object-cover'
                        />
                    </div>
                </div>
                <div className='overflow-auto rounded-lg shadow md:h-fit md:m-8 my-7 hidden md:block'>
                    <table className=''>
                        <thead className='bg-black text-white text-sm font-persionFont'>
                            <tr className=''>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تجربه</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>2 شماره</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>1 شماره</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>نام خاص</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>وظیفه</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>موقعیت</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>تخلص</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>نام</th>
                                <th className='py-3 px-4 text-center whitespace-nowrap font-thin tracking-wide'>شماره آیدی</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-300 font-persionFont'>
                            <tr>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.experiance}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.phoneNumber2}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.phoneNumber1}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.username}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.job}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.province}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.lastName}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.name}</td>
                                <td className='py-2 px-4 text-center whitespace-nowrap'>{data?.id}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='grid grid-cols-1 md:hidden my-3 w-[90%] mx-auto'>
                    <div className='bg-gray-200 p-4 rounded-lg shadow '>
                        <div className='flex items-center space-x-2 text-sm flex-col font-medium'>
                            <div className='text-2xl my-2'>{data?.experiance}</div>
                            <div className='text-xl my-2'>{data?.phoneNumber2}</div>
                            <div className='text-xl my-2'>{data?.phoneNumber1}</div>
                            <div className='text-xl my-2'>{data?.username}</div>
                            <div className='text-2xl my-2'>{data?.job}</div>
                            <div className='text-2xl my-2'>{data?.province}</div>
                            <div className='text-2xl my-2'>{data?.lastName}</div>
                            <div className='text-2xl my-2'>{data?.name}</div>
                            <div className='text-xl my-2'>{data?.id}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about that user */}
            <div>
                <AboutUser name={data?.name} personalInfo={data?.personalInfo} />
            </div>
        </main>
    )
}

export default Profile