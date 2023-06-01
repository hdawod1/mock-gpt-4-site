import React from 'react'
import '../styles.css'

const About: React.FC = () => {

    return (
        <div className='about-container flex flex-grow flex-col justify-around text-white w-[90%] h-auto md:h-[800px] bg-[#042C54] m-auto'>
            <div className='flex justify-between'>
                <p className='text-3xl text-white font-extrabold'>What is GPT-4</p>
                <p className='text-[#81AFDD] mx-7 w-[55%]'>Lorem ipsum dolor sit amet consectetu adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium. optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam</p>
            </div>
            <div className='flex justify-between items-center'>
                <h3 className='text-4xl text-[#F49867] font-extrabold w-[70%]'>The possibilities are beyond your imagination</h3>
                <p className='text-[#FF8A71] mr-4'>Explore The Library</p>
            </div>
            <div className='about-bottom-content flex justify-between ml-2 text-center'>
                <div>
                    <h4>Chatbots</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam numquam blanditiis harum</p>
                </div>
                <div className='mr-4'>
                    <h4>Knowledge</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam numquam blanditiis harum</p>
                </div>
                <div className='mr-2'>
                    <h4>Education</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam numquam blanditiis harum</p>
                </div>
            </div>
        </div>
    )
}

export default About