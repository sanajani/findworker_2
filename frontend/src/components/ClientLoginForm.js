"use client"
import React from 'react'
import Link from 'next/link'
import { Formik, Field, Form } from 'formik'
import { loginSchema, initialValuesLogin } from '@/utils/signupSchema'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { isAuthFalse } from '../redux/isAuth'
import { toast, ToastContainer } from 'react-toastify';
import ErrorMessges from './ErrorMessges'
import api from '@/utils/api'

const ClientLoginForm = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const loginFormSubmit = async (values) => {
        try { 
            const res = await api.post('/api/login', values,{
                withCredentials:true
            });
                dispatch(isAuthFalse())
                router.push('/')
                toast.success("user Login Successfully",{
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                  })
        } catch (error) {
            toast.error(error?.response?.data?.message || 'Something went wrong in Login Process',{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
              })
        }
    }
    return (
        <Formik initialValues={initialValuesLogin} validationSchema={loginSchema} onSubmit={loginFormSubmit}>
            <Form className='py-2'>
                <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                    <label className='text-white mb-1' htmlFor="username">نام خاص</label>
                    <Field 
                    name='username'
                    type="text" 
                    className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500' 
                    placeholder='نام خاص خود را وارد کنید' />
                    <ErrorMessges name={'username'}/>
                </div>
                <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                    <label className='text-white mb-1' htmlFor="username">رمز</label>
                    <Field 
                    name='password'
                    type="password" 
                    className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500' 
                    placeholder='رمز شما' />
                    <ErrorMessges name={'password'}/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <button type='submit' className='w-fit mb-4 bg-white px-8 py-2 text-sm md:text-base rounded-lg text-blue-500 md:font-bold tracking-wide'>وارد شدن</button>
                    <Link className='w-fit mb-4 px-8 border-b-2 rounded-lg text-white py-2 text-sm md:text-base md:font-bold tracking-wide' href='/signup'> ندارید Jobfinder آیا حساب </Link>
                </div>
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
            </Form>
        </Formik>
    )
}

export default ClientLoginForm