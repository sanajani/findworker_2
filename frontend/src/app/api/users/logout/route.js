import { NextResponse } from "next/server"


export const GET = async () => {
    try {
        const response = NextResponse.json({
            message:"User logout successful",
            success: true
        })
        response.cookies.set("ourauthtoken","",{
            httpOnly: true,
            expires: new Date(0)
        })
        return response
    } catch (error) {
        
    }
}