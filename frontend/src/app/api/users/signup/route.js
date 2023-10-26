import { NextResponse } from "next/server";
import UserModel from "@/models/userModel";
import connectDB from "@/db/connection";
import bcryptjs from 'bcryptjs';
// signuproute

export const POST = async (request) => {
    connectDB()
    let userID = await UserModel.count() + 1;
    userID = userID + ''
    // console.log('signup pagr',typeof(userID));
    const {name,lastName, username,password, job, experiance, firstPhoneNumber,secondNumber, profile, province, aboutuser} = await request.json();

    // if missed field then send an error experiance
    if (!name || !lastName || !username || !password || !job || !experiance || !firstPhoneNumber || !secondNumber || !profile || !province || !aboutuser) return NextResponse.json({message: "لطفا خانه های خالی را پور کنید"},{status: 401})

    try {
    const isUsername = await UserModel.findOne({username: username})
    if(isUsername) return NextResponse.json({message:"Username already exist"}, {status:402})
    const isPhoneNumberOne = await UserModel.findOne({phoneNumber1: firstPhoneNumber})
    if(isPhoneNumberOne) return NextResponse.json({message:"Phone Number 1 already exist"}, {status:402})
    const isPhoneNumber2 = await UserModel.findOne({phoneNumber2: secondNumber})
    if(isPhoneNumber2) return NextResponse.json({message:"Phone Number 2 already exist"}, {status:402})
    // hash the password
    const hashPassword = await bcryptjs.hash(password, 12)
    
    // else save data
    const newUser = new UserModel({
        name,
        lastName,
        username,
        password: hashPassword,
        job,
        experiance,
        phoneNumber1: firstPhoneNumber,
        phoneNumber2: secondNumber,
        profileImage: profile,
        province,
        personalInfo: aboutuser,
        id: userID
    })
    await newUser.save();
    return NextResponse.json({message: "User successfully inseted", user: newUser}, {status: 201})

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong", error: error}, {status: 500})
    }
}