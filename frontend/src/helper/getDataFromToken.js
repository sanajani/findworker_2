import jwt from "jsonwebtoken"


export const getDataFromToken = ( request ) => {
    try {
        const token = request.cookies.get("ourauthtoken")?.value || ''
        if(!token ) return ({message:"token not found", status: 400} )
        
        const decodedData = jwt.verify(token, process.env.TOKEN_SECRET)
    
        return decodedData.id
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}