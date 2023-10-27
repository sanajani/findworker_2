'use client'
import { useDispatch } from 'react-redux'
import { isLoadingFalse, isLoadingTrue } from '../redux/slice'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Formik, Form, Field } from 'formik'
import ErrorMessges from './ErrorMessges'
import { list_of_districts } from './ProvinceName'
import { initialValues,signupSchema } from '@/utils/signupSchema'
import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import api from '@/utils/api'


const ClientSignupForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    // const [errorMessage, setErrorMessage] = useState('')

    // upload image url to backend
    const signupFormSubmit = async (values) => {
        console.log(values);
        try {
            dispatch(isLoadingFalse())
            const {name,lastName,file,username,password,job,experiance,secondNumber,province,aboutuser,firstPhoneNumber} = values
            const formData = new FormData();
            formData.set('name',name)
            formData.set('lastName',lastName)
            formData.set('username',username)
            formData.set('password',password)
            formData.set('job',job)
            formData.set('experiance',experiance)
            formData.set('secondNumber',secondNumber)
            formData.set('province',province)
            formData.set('aboutuser',aboutuser)
            formData.set('firstPhoneNumber',firstPhoneNumber)
            formData.set('file',file)

            const postResponse = await api.post('/api/signup', formData)
            router.push('/login')
            toast.success("Signup Successfully",{
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
            // setErrorMessage(error?.response)
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
            console.log('this is error::::: ',error);
        }
        finally{
            dispatch(isLoadingTrue())
        }
    }
    return (
            <Formik initialValues={initialValues} onSubmit={signupFormSubmit} validationSchema={signupSchema}>
                <Form className='py-2' autoComplete='off'>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='name'>نام</label>
                        <Field
                            name='name'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='نام شما'
                        />
                        <ErrorMessges name='name' />
                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right '>
                        <label className='text-white mb-1' htmlFor='lastname'> تخلص</label>
                        <Field
                            name='lastName'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='تخلص شما'
                        />
                        <ErrorMessges name='lastName' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='username'>
                            نام خاص
                        </label>
                        <Field
                            name='username'
                            autoComplete='false'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='نام خاص شما باید انگلیسی باشد'
                        />
                        <ErrorMessges name='username' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='password'>
                            رمز
                        </label>
                        <Field
                            name='password'
                            autoComplete='false'
                            type='password'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='رمز شما'
                        />
                        <ErrorMessges name='password' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='job'>
                            وظیفه
                        </label>
                        <Field
                            name='job'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='وظیفه شما'
                        />
                        <ErrorMessges name='job' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='experience'>
                            تجربه
                        </label>
                        <Field
                            name='experiance'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='چند سال تجربه دارین'
                        />
                        <ErrorMessges name='experience' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='firstPhoneNumber'>
                            شماره 1
                        </label>
                        <Field
                            id='firstPhoneNumber'
                            name='firstPhoneNumber'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='شماره تماس 1'
                        />
                        <ErrorMessges name='firstPhoneNumber' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='secondNumber'>
                            شماره 2
                        </label>
                        <Field
                            name='secondNumber'
                            type='text'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none placeholder:text-gray-500'
                            placeholder='شماره تماس 2'
                        />
                        <ErrorMessges name='secondNumber' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='profile'>
                            عکس برای پروفایل
                        </label>
                        <Field
                            accept='image/*'
                            name='file'
                            type='file'
                            className='text-right py-1 px-3 bg-transparent border-b-2 outline-none'
                        />
                        <ErrorMessges name='file' />
                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label className='text-white mb-1' htmlFor='province'>
                            لطفا ولایت خود را انتخاب کنید
                        </label>
                        <Field as='select' className='outline-none mt-3 rounded-lg px-4 py-1' id='province' name="province">
                            {
                                list_of_districts.map(selectOption => {
                                    return <option key={selectOption.label} value={selectOption.value}>{selectOption.label}</option>
                                })
                            }
                        </Field>
                        <ErrorMessges name='province' />

                    </div>
                    <div className='my-4 flex flex-col max-w-[90%] mx-auto text-right'>
                        <label htmlFor='aboutuser' className='text-white mb-1'>
                            لطفا درمورد خود بنویسید
                        </label>
                        <Field
                            as='textarea'
                            name='aboutuser'
                            className='text-right py-1 px-3 border-b-2 outline-none resize-none'
                            rows={8}
                            placeholder='درمورد خود معلومات بدهید بطور مثال کی استین از کجا استین چی میکنین وغیره'
                        ></Field>
                        <ErrorMessges name='aboutuser' />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <button type='submit' className='w-fit mb-4 bg-white px-8 py-2 text-sm md:text-base rounded-lg text-blue-500 md:font-bold tracking-wide'>
                            درست کردن حساب
                        </button>
                        <Link
                            href='/login'
                            className='w-fit mb-4 px-8 border-b-2 rounded-lg text-white py-2 text-sm md:text-base md:font-bold tracking-wide'
                        >
                            آیا قبلا حساب داشته اید
                        </Link>
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
                </Form>
            </Formik>
    )
}

export default ClientSignupForm