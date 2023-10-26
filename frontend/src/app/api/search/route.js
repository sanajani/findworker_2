import { NextResponse } from "next/server";
import connectDB from "@/db/connection";
import UserModel from "@/models/userModel";

export async function GET(request){
    connectDB();

    // console.log('this is request query',request.query)
    const { searchParams } = new URL(request.url)
    const job = searchParams.get('job')
    const province = searchParams.get('province')
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 2
    try {
        if(province && job){
            const userLength = await UserModel.find({$and: [{job:job},{province:province}]})
            const user = await UserModel.find({$and: [{job:job},{province:province}]}).limit(limit*1).skip((page-1)*limit).exec()
            const count = userLength.length
            const currentPage = page
            const totalPages = Math.floor((count + limit - 1) / limit)
            if(!user.length) return NextResponse.json({message:"No result"},{status:400})
            return NextResponse.json({user,message:"Success",totalPages:totalPages, currentPage:currentPage},{status:200})
        }
        const userLength = await UserModel.find({$or: [{job:job},{province:province}]})
        const user = await UserModel.find({$or: [{job:job},{province:province}]}).limit(limit*1).skip((page-1)*limit).exec()
        const count = userLength.length
        const currentPage = page
        const totalPages = Math.floor((count + limit - 1) / limit)
        if(!user.length) return NextResponse.json({message:"No result"},{status:400})

        // if(!user.length) return NextResponse.json({message:"No result"},{status:400})
        return NextResponse.json({user,message:"Success",totalPages:totalPages, currentPage:currentPage},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}