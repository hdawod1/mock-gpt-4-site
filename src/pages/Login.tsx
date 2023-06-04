import React, { useEffect, useRef} from 'react'
import '../styles.css'
import { NavLink } from 'react-router-dom'

const Login: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)

    useEffect(() => { emailRef.current?.focus() }, [])

    const handleLogin = (e: React.FormEvent) => e.preventDefault()

    return (
        <div className='text-white w-screen'>
             <form className='flex flex-col justify-center m-auto w-[40%] h-[400px]' onSubmit={handleLogin}>
                <input ref={emailRef} type="email" className='h-[50px] mb-5 p-2 rounded-lg bg-[#F2F2F2] font-medium text-black' placeholder='Enter Email' />
                <input type="password" className='h-[50px] p-2 rounded-lg bg-[#F2F2F2] font-medium text-black' placeholder='Password' />
                <p className='mt-2 text-xs'>Don't have an account? <NavLink to='/signup' className='font-medium'>Click here to Sign up</NavLink></p>
                <button className='mt-7 w-auto h-[50px] p-2 rounded-lg shadow-2xl font-medium bg-[#6C63FF]'>Login</button>
             </form>
        </div>
    )
}

export default Login