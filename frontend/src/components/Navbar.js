'use client'
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { isAuthTrue } from "../redux/isAuth";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import api from "@/utils/api";


const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen,setIsMenuOpen] = useState(false)  
  const [isLogin,setIsLogin] = useState()
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.isAuthState)

  useEffect(() => {
    setIsLogin(isAuth)
  }, [setIsLogin,isAuth])

  const logout = async () => {
    try {
      const data = await api.get('/api//user/logout',{
        withCredentials:true
      })
      console.log("Navbar data ",data);
      console.log('logout successful');
      dispatch(isAuthTrue())
      toast.success("user Logout Successfully",{
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      })
      router.push('/login')
    } catch (error) {
      console.log(error, 'logout function error');  
      toast.error("Something went wrong",{
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      })    
    }
    finally{
      setIsMenuOpen(false)
    }
  }


  return (
    <nav className="bg-blue-500 z-50 mb-2 py-1 h-[90px] md:px-24 sm:px-8 px-2 flex justify-between items-center fixed top-0 left-0 w-full">
        <Link href='/' className="text-2xl font-extrabold text-white">Job<span>Finder</span></Link>
        <div className="flex">
            <>
            { !isMenuOpen ? <AiOutlineMenu onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl font-bold text-white sm:hidden sm:overflow-hidden  cursor-pointer"/> : <AiOutlineClose onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl cursor-pointer font-bold text-white" />
            }
            </>
        </div>

        <ul className= {`top-[90px] sm:hidden py-6 -left-[0%] bg-blue-500 absolute w-full h-80 sm:overflow-hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} duration-300 ease-in-out`}>
        <li><Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl my-4 pl-3 text-white border-b pb-3" href='/'>Home</Link></li>
        <li><Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl my-4 pl-3 text-white border-b pb-3" href='/about'>About</Link></li>
        <li><Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl my-4 pl-3 text-white border-b pb-3" href='/contact'>Contact</Link></li>
        {
        !isLogin ?  
          <>
        <li><Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl my-4 pl-3 text-white border-b pb-3" href='/login'>Contact</Link></li>
        <li><Link onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl my-4 pl-3 text-white border-b pb-3" href='/signup'>Contact</Link></li>
        </>
        :
        <li onClick={logout} className="text-xl my-4 pl-3 text-white border-b pb-3">Logout</li>
        }
        </ul>

        <ul className='hidden overflow-hidden sm:flex md:min-w-fit sm:w-72 '>
            <li className="text-xl my-4 pl-3 text-white md:mx-5"><Link href='/'>Home</Link></li>
            <li className="text-xl my-4 pl-3 text-white md:mx-5"><Link href='/about'>About</Link></li>
            <li className="text-xl my-4 pl-3 text-white md:mx-5"><Link href='/contact'>Contact</Link></li>
            {
              !isLogin?
              <>
              <li className="text-xl my-4 pl-3 text-white md:mx-5"><Link href='/login'>Login</Link></li>
              <li className="text-xl my-4 pl-3 text-white md:mx-5"><Link href='/signup'>Signup</Link></li>
              </>
              :
            <li onClick={logout} className="text-xl my-4 pl-3 cursor-pointer hover:bg-blue-700 text-white md:mx-5"><span>Logout</span></li>
            }
        <ToastContainer 
        position="bottom-left"
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
        </ul>
    </nav>
  )
}

export default Navbar