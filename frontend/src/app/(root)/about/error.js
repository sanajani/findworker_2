'use client'

import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"

const Error = ({error, reset}) => {
    useEffect(() => {
        console.log('this is error on about page');
        toast.error(error.message || 'this is error on about page',{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        })
    }, [error])

    return(
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()} type="button">
                Try again
            </button>
            <ToastContainer 
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark"
            />
        </div>
    )
}
export default Error