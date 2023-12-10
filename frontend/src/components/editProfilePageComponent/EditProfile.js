"use client"
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import api from '@/utils/api'
// import axios from 'axios'
console.log(process.env.NEXT_PUBLIC_API_URL);

const EditProfile = () => {
    const { user } = useSelector((state) => state.isAuthState)
    console.log(user);
    const fileRef = useRef(null)
    const [inputValue,setInputValue] = useState({
      name: user?.name,
      lastName: user?.lastName,
      username: user?.username,
      job: user?.job,
      profileImage: user?.profileImage,
      experiance : user?.experiance,
      phoneNumber1: user?.phoneNumber1,
      phoneNumber2 : user?.phoneNumber2,
      province : user?.province,
      personalInfo: user?.personalInfo,

    })

    // console.log("hello world",user);

    const handleChange = (e) => {
      setInputValue({...inputValue, [e.target.name]: e.target.value})
    }

    const handleButtonClick = () => {
      // Trigger the click event on the file input
      if (fileRef.current) {
        fileRef.current.click();
      }
    };
    const handleFileChange = async (event) => {
      try {
      // Handle the selected file
      const selectedFile = event.target.files[0];
      const formData = new FormData();
      formData.set("file",selectedFile)
      console.log(formData.get('file'));
      // setInputValue({...inputValue,profileImage: selectedFile}/)
        const res = await api.put(`/api/user/${user._id}`,formData)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    const updateUser = async (e) => {
      e.preventDefault();
      try {
        const {profileImage, ...rest} = inputValue;
      const res = await api.put(`/api/user/${user._id}`,rest)
      console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(`${user}`)

    return (
    <div>
      <form className='max-w-6xl mx-auto bg-blue-500 p-4 flex flex-col gap-5 '>

        <div className='text-center mx-auto w-32 h-32 relative'>
          <input 
            type="file" 
            hidden
            accept='image/*'
            ref={fileRef}
            // id='fileUpload'
            name='file'
            onChange={handleFileChange}
          />

          <Image
          // src={inputValue.profileImage}
          src={`${process.env.NEXT_PUBLIC_API_URL}/${inputValue.profileImage}`}
          
          alt='this is profile '
          // name='fileUpload'
          fill={true}
          className='rounded-full object-cover absolute cursor-pointer bg-red-400'
          onClick={handleButtonClick}
          loading='lazy'
          blurDataURL='/profiledefalt.png'
          quality={50}
          priority={false}
          placeholder = 'blur'

          />
        </div>

        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="name" className='text-white text-right'>نام</label>
          <input
          name='name'
          onChange={handleChange}
          value={inputValue.name}
          className='px-3 outline-none border-gray-300 border rounded-md text-right'
          type="text" 
          placeholder='نام' />
        </div>

       <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="lastname" className='text-white text-right'>تخلص</label>
          <input
          name='lastName'
          onChange={handleChange}
          value={inputValue.lastName}
           className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='تخلص' />
        </div>

        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="username" className='text-white text-right'>نام خاص</label>
          <input
          name='username'
          onChange={handleChange}
          value={inputValue.username}
           className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='نام خاص' />
        </div>

        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="phoneNumber1" className='text-white text-right'>شماره تماس یک</label>
          <input
          name='phoneNumber1'
          onChange={handleChange}
          value={inputValue.phoneNumber1}
          className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='شماره تماس یک' />
        </div>

        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="phoneNumber2" className='text-white text-right'>شماره تماس دو </label>
          <input
          name='phoneNumber2'
          onChange={handleChange}
          value={inputValue.phoneNumber2}
           className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='شماره تماس دو' />
        </div>

        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="job" className='text-white text-right'>وظیفه</label>
          <input
          name='job'
          onChange={handleChange}
          value={inputValue.job}
          className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='وظیفه' />
        </div>

        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="province" className='text-white text-right'>ولایت</label>
          <input
          name='province'
          onChange={handleChange}
          value={inputValue.province}
           className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='ولایت' />
        </div>

        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="personalInfo" className='text-white text-right'>لطفا درمورد خود بنویسید</label>
          <input
          name='personalInfo'
          onChange={handleChange}
          value={inputValue.personalInfo}
       className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='لطفا درمورد خود بنویسید' />
        </div>


        <div className='gap-1 flex  mx-auto text-lg flex-col '>
          <label htmlFor="experiance" className='text-white text-right'>تجربه </label>
          <input
          name='experiance'
          value={inputValue.experiance}
          onChange={handleChange}
         className='px-3 outline-none border-gray-300 border rounded-md text-right' type="text" placeholder='تجربه' />
        </div>
        <button onClick={updateUser} type='submit' className='w-fit mb-4 bg-blue-800 mx-auto px-8 py-2 text-sm md:text-base rounded-lg text-white md:font-bold tracking-wide'>
            آپدیت کردن پروفایل شما
        </button>
      </form>
    </div>
  )
}

export default EditProfile