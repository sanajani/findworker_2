export const routeNotFoundError = (req,res,next)=> {
    const error = new Error(`can't find ${req.originalUrl} on the server`)
    error.status = "failed"
    error.statusCode = 404
    next(error)
}
