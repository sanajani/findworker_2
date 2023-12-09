"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const EditProfile = () => {
    const { isAuth,user } = useSelector((state) => state.isAuthState)
    console.log(isAuth);

    console.log("hello world",user);
    return (
    <div>
        hello
    </div>
  )
}

export default EditProfile