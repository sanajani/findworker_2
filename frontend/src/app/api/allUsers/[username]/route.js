import UserModel from "@/models/userModel";
import { NextResponse } from "next/server";
import connectDB from "@/db/connection";
connectDB()
// get all users
export const GET = async (req,{params}) => {
    const {username} = params
    try {
        const user = await UserModel.findOne({username})
        if(!user) return NextResponse.json({message:"There is no user with that USERNAME"},{status:403})

        return NextResponse.json(user, {status: 200, statusText: 'ok'})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong", error: error.message},{status:500, statusText:'failed to get users'})
    }
}



