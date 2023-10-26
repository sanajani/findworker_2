import dotenv from 'dotenv'
dotenv.config()
import jwt from "jsonwebtoken"

export const getDataFromToken = (req,res,next) => {
    try {
        const token = req.cookies.ourauthtoken || ''
        if(!token) return res.status(400).json({message:"JsonWebTokenError: jwt must be provided"})
        
        const decodedData = jwt.verify(token, process.env.TOKEN_SECRET,(err)=> {
            if(err){
                next(err)
            }
        })
        req.data = decodedData
        next()

        // return 
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}