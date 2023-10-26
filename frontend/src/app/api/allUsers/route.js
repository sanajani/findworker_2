import UserModel from "@/models/userModel";
import { NextResponse } from "next/server";
import connectDB from "@/db/connection";

// get all users
export const GET = async (request) => {
    const {searchParams} = new URL(request.url)
    let page = parseInt(searchParams.get('page')) || 1
    let limit = parseInt(searchParams.get('limit')) || 2
    // console.log(`this is Page:${page} this is Limit:${limit}`);

    connectDB()
    try {
        const user = await UserModel.find().limit(limit*1).skip((page - 1) * limit).exec();
        // console.log('this is user value',user);
        const count = await UserModel.countDocuments()
        const currentPage = page
        const totalPages = Math.floor((count + limit - 1) / limit)
        return NextResponse.json({user,totalPages:totalPages, currentPage:currentPage}, {status: 200, statusText: 'ok'})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Something went wrong", error: error.message},{status:500, statusText:'failed to get users'})
    }
}

