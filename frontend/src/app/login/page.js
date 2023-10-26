import ClientLoginForm from "../../components/ClientLoginForm"

const LoginPage = () => {
    return (
        <div className='min-h-screen pt-28 pb-28 bg-blue-100 px-4'>
            <div className='bg-blue-500 shadow-lg max-w-[400px] mx-auto text-center rounded-xl font-persionFont'>
                <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-white py-3'>وارد اکانت خودتان شوید</h1>
                <ClientLoginForm />
            </div>
        </div>
    )
}

export default LoginPage