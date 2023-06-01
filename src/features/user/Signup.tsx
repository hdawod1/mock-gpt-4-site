import React, { useEffect, useRef, useState } from 'react'
// import '../styles.css'
import { NavLink } from 'react-router-dom'

const Signup: React.FC = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    useEffect(() => {
        emailRef.current?.focus()
    }, [])

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault()
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
    }

    return (
        <div className='text-white w-screen'>
             <form className='flex flex-col justify-center m-auto w-[40%] h-[400px]' onSubmit={handleSignup}>
                <input ref={emailRef} name="email" onChange={e => setEmail(e.target.value)} value={email} type="email" className='h-[50px] mb-5 p-2 rounded-lg bg-[#F2F2F2] font-medium text-black' placeholder='Enter Email' />
                <input name="password" onChange={e => setPassword(e.target.value)} value={password} type="password" className='h-[50px] p-2 rounded-lg bg-[#F2F2F2] font-medium text-black' placeholder='Password' />
                <p className='mt-2 text-xs'>Already have an account? <NavLink to='/login' className='font-medium'>Click here to Log in</NavLink></p>
                <button className='mt-7 w-auto h-[50px] p-2 rounded-lg shadow-2xl font-medium bg-[#6C63FF]'>Signup</button>
             </form>
        </div>
    )
}

export default Signup