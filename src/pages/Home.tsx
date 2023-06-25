import React from 'react'
import '../styles.css'
import headerIllustration from '../images/home-header-illustration.png'

const Home: React.FC = () => {
    return (
        <div className='home-container flex flex-col md:flex-row items-center text-white w-full md:w-[75%] h-[90%] m-auto md:p-0 p-7'>
            <div className='home-left-content w-full md:w-[45%] h-auto'>
                <p className='md:text-6xl text-3xl text-[#F49867]'>Let's Build Something amazing with GPT-4 OpenAI</p>
                <p className='text-[#81AFDD]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>
                <form className='flex md:flex-row flex-col items-center'>
                    <input type="text" placeholder='Your Email Address' className='h-[65px] w-[90%] rounded-lg p-3 text-black outline-none text-md' />
                    <p className='h-[65px] w-[90%] bg-[#FF4820] font-bold rounded-lg p-3 md:mx-4 my-4 flex items-center justify-center'>Get Started</p>
                </form>
            </div>
            <img src={headerIllustration} className='w-[50%] h-auto text-white text-3xl' alt="AI Illustration" />
        </div>
    )
}

export default Home