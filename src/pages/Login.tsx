import React, { useEffect, useRef, useState} from 'react'
import '../styles.css'
import { NavLink } from 'react-router-dom'
// import { useSelector} from 'react-redux'
// import { RootState } from '../store.ts'
// import axios, { AxiosError } from 'axios'

const Login: React.FC = () => {

    // const email = useSelector((state: RootState) => state.credentialsReducer?.email)
    // const password = useSelector((state: RootState) => state.credentialsReducer?.password)

    const [loginPassword, setLoginPassword] = useState<string>('')

    // const dispatch = useDispatch()

    const emailRef = useRef<HTMLInputElement>(null)
    // const navigate = useNavigate()

    // const handleLogin = async (e: React.FormEvent) => {
    //     e.preventDefault()
    //     try {
    //         const response = await axios.post('http://localhost:9000/login', {email, password});
    //         if(response) navigate(-1)
    //       } catch (error: unknown) {
    //         if (axios.isAxiosError(error)) {
    //           const axiosError = error as AxiosError;
    //           console.log(axiosError)
    //           // Handle AxiosError
    //         } else {
    //           // Handle other errors
    //           console.log('An error occurred:', error);
    //         }
    //       }
    // }

    useEffect(() => { emailRef.current?.focus() }, [])

    return (
        <div className='text-white w-screen'>
             <form className='flex flex-col justify-center m-auto w-[40%] h-[400px]'>
                <input ref={emailRef} type="email" className='h-[50px] mb-5 p-2 rounded-lg bg-[#F2F2F2] font-medium text-black' placeholder='Enter Email' />
                <input name="loginPassword" onChange={e => setLoginPassword(e.target.value)} value={loginPassword} type="password" className='h-[50px] p-2 rounded-lg bg-[#F2F2F2] font-medium text-black' placeholder='Password' />
                <p className='mt-2 text-xs'>Don't have an account? <NavLink to='/signup' className='font-medium'>Click here to Sign up</NavLink></p>
                <button className='mt-7 w-auto h-[50px] p-2 rounded-lg shadow-2xl font-medium bg-[#6C63FF]'>Login</button>
             </form>
        </div>
    )
}

export default Login

// name="email" onChange={e => dispatch({type: 'ADD_EMAIL', payload: e.target.value})} value={email}
// name="password" onChange={e => dispatch({type: 'ADD_PASSWORD', payload: e.target.value})} value={password}