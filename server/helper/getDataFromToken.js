import dotenv from 'dotenv'
dotenv.config()
import jwt from "jsonwebtoken"

export const getDataFromToken = (req,res,next) => {
    try {
        const token = req.cookies.ourauthtoken || ''
        console.log("token",token);
        if(!token) return res.status(400).json({message:"JsonWebTokenError: jwt must be providedsdds"})
        
        const decodedData = jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(process.env.TOKEN_SECRET)
        req.data = decodedData
        console.log(decodedData);
        next()

        // return 
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}