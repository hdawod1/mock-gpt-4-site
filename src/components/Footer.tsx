import React from 'react'

const Footer: React.FC = () => {
    return(
        <div className='flex flex-col footer-container p-16 w-screen h-auto bg-gray-900'>
            <div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-[#F49867] text-6xl text-center font-extrabold'>Do you want to step in to the future before others</h1>
                    <p className='text-white border border-white mt-6 w-56 h-16 flex items-center justify-center'>Request Early Access</p>
                </div>
                <div className='footer-bottom-info text-white flex flex-col md:flex-row justify-between p-7 mt-[100px]'>
                    <div>
                        <h2 className='text-3xl font-semibold'>GPT-4</h2>
                        <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    </div>
                    <div className='footer-links mt-8 md:mt-0'>
                        <span>Links</span>
                        <p>Overans</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <span>Company</span>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </div>
                    <div className='mt-8 md:mt-0'>
                        <span>Get in Touch</span>
                        <p>Crechterwoord K12 182 DK Alknjkcb</p>
                        <p>085-132567</p>
                        <p>info@payme.net</p>
                    </div>
                </div>
            </div>
            <p className='text-white text-center m-0 p-0'>This is not an official site and is not affiliated with GPT-4 or OpenAI in any way. For educational purposes only.</p>
        </div>
    )
}

export default Footer

// border: 1px solid #FFFFFF