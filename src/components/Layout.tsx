import React, { useState } from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import '../styles.css'
import Footer from './Footer'
import {FiMenu} from 'react-icons/fi'

const Layout: React.FC = () => {

    // className='nav absolute md:static w-auto h-auto top-0 custom:flex custom:flex-row flex flex-col items-center justify-evenly'

    // className='nav absolute custom:static w-auto h-auto top-0 custom:flex custom:flex-row flex flex-col items-center justify-evenly'

    const [open, setOpen] = useState(false)

    return (

        <div>
                <div className='flex items-center justify-between lg:mx-auto lg:max-w-7xl max-w-full px-[8%] w-full flex-wrap p-8'>
                    <NavLink to='/' className='text-white font-bold text-3xl'>GPT-4</NavLink>

                    <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" color='white' onClick={() => setOpen(!open)} />

                    <div className={`${open ? "flex items-center" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
                        <div className=' nav-items text-sm lg:text-base text-white lg:mx-3'>
                            <NavLink to='/' >Home</NavLink>
                            <NavLink to='/about' >What is GPT?</NavLink>
                            <NavLink to='/open-ai' >Open AI</NavLink>
                            <NavLink to='/case-studies' >Case Studies</NavLink>
                            <NavLink to='/library' >Library</NavLink>
                        </div>
                        <div>
                            <NavLink to='/login' className='text-white text-lg mx-4'>Log In</NavLink> 
                            <NavLink to='/signup' className='text-white text-lg bg-red-500 lg:w-[170px] lg:h-[58px] h-[20px] w-[80] p-3 rounded-md'>Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout