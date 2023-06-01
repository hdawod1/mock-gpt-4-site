import React from 'react'
import '../styles.css'

const OpenAI: React.FC = () => {
    return (
        <div className='mx-16 flex flex-grow flex-col md:flex-row h-auto'>
            <div className='open-ai-header mr-11 max-w-4'>
                <h3 className='text-4xl text-blue-300 font-extrabold'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h3>
                <p className='mt-8 text-[#FF8A71]'>Request Early Access to Get Started</p>
            </div>
            <div className='openai-right w-4 md:w-auto'>
                <div>
                    <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.</p>
                </div>
                <div>
                    <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.</p>
                </div>
                <div>
                    <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.</p>
                </div>
                <div>
                    <h5>Lorem ipsum dolor sit amet consectetur</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.</p>
                </div>
            </div>
        </div>
    )
}

export default OpenAI