import React from 'react'
import '../styles.css'
import aiHole from '../images/library/aiHole.png'
import aiHead from '../images/library/aiHead.png'
import aiBinary from '../images/library/aiBinary.png'
import aiChain from '../images/library/aiChain.png'
import aiExclamation from '../images/library/aiExclamation.png'

const Library: React.FC = () => {

    return (
        <div className='p-10'>
            <h2 className='text-6xl text-[#F49867] font-extrabold mb-10'>A lot is happening, We are blogging about it.</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 library-container'>
                <div className='h-[640px]'>
                    <img src={aiHole} alt="AI Hole" className='h-[285px] w-full' />
                    <div className='text-white flex flex-col justify-between w-auto h-[380px] bg-[#042C54] p-4'>
                        <div>
                            <p className='font-bold text-xs'>Sept 25, 2023</p>
                            <h1 className='font-extrabold mt-3'>GPT-4 and Open AI is the future. Let us explore how it is?</h1>
                        </div>
                        <div className='justify-end font-bold text-xs'>Read Full Article</div>
                    </div>
                </div>
                <div>
                    <div className='h-[305px]'>
                        <img src={aiHead} alt="AI Hole" className='h-[130px] w-full mt-5 md:mt-0' />
                        <div className='text-white flex flex-col justify-between w-auto h-[190px] bg-[#042C54] p-4'>
                            <div>
                                <p className='font-bold text-xs'>Sept 25, 2023</p>
                                <h1 className='font-extrabold mt-3'>GPT-4 and Open AI is the future. Let us explore how it is?</h1>
                            </div>
                            <div className='font-bold text-xs'>Read Full Article</div>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <img src={aiBinary} alt="AI Hole" className='h-[130px] w-full' />
                        <div className='text-white flex flex-col justify-between w-auto h-[190px] bg-[#042C54] p-4'>
                            <div>
                                <p className='font-bold text-xs'>Sept 25, 2023</p>
                                <h1 className='font-extrabold mt-3'>GPT-4 and Open AI is the future. Let us explore how it is?</h1>
                            </div>
                            <div className='font-bold text-xs'>Read Full Article</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={aiChain} alt="AI Hole" className='h-[130px] w-full' />
                        <div className='text-white flex flex-col justify-between w-auto h-[190px] bg-[#042C54] p-4'>
                            <div>
                                <p className='font-bold text-xs'>Sept 25, 2023</p>
                                <h1 className='font-extrabold mt-3'>GPT-4 and Open AI is the future. Let us explore how it is?</h1>
                            </div>
                            <div className='font-bold text-xs'>Read Full Article</div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <img src={aiExclamation} alt="AI Hole" className='h-[130px] w-full' />
                        <div className='text-white flex flex-col justify-between w-auto h-[190px] bg-[#042C54] p-4'>
                            <div>
                                <p className='font-bold text-xs'>Sept 25, 2023</p>
                                <h1 className='font-extrabold mt-3'>GPT-4 and Open AI is the future. Let us explore how it is?</h1>
                            </div>
                            <div className='font-bold text-xs'>Read Full Article</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Library