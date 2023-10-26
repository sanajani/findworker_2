export const globelError = (error,req,res,next) => {
    error.statusCode || 500
    error.message || "Something went wrong on the server please try again"
    error.status || 'error'
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    })
}