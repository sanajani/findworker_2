'use client'
import ClientSignupForm from '../../components/ClientSignupForm'
import { useSelector } from 'react-redux'
import { ThreeDots } from 'react-loader-spinner'

const SignUp = () => {
    const { isLoadingState } = useSelector((state) => state.isLoadingState)

    if (isLoadingState) return <div className='max-w-full h-screen flex justify-center items-center'>
        <ThreeDots
            height="120"
            width="120"
            radius="9"
            color="#198cff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
    </div>

    return (
        <div className='min-h-screen pt-28 pb-28 px-4 items-center '>
            <div className='bg-blue-500 shadow-lg max-w-[400px] mx-auto text-center rounded-xl font-persionFont'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-3'>فورم ثبت نام</h1>
                <ClientSignupForm />
            </div>
        </div>
    )
}

export default SignUp