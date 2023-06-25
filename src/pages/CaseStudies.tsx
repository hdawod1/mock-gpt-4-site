import React from 'react'
import '../styles.css'
import featureImg from '../images/case-studies-feature-image.png'

const CaseStudies: React.FC = () => {
    return (
        <div className='text-white flex flex-col w-[85%] h-[50%] lg:m-auto p-[60px]'>
            <div className='md:flex items-center justify-between'>
                <img className='flex flex-grow flex-shrink justify-center w-[800px] md:w-[546px] h-auto md:h-[607.53px]' src={featureImg} alt="Feature Image" />
                <div className='mx-8 p-8 caseStudies-left w-full'>
                    <p className='text-[#71E5FF] font-medium'>Request Early Access to Get Started</p>
                    <h3 className='text-xl lg:text-4xl text-[#F49867] font-extrabold'>The possibilities are beyond your imagination</h3>
                    <p className='text-[#81AFDD]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!</p>
                    <p className='text-[#FF8A71] font-medium'>Request Early Access to Get Started</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between w-full md:w-[650px] p-6 bg-[#F49867] rounded-xl md:my-11 lg:m-auto'>
                <div className='mx-8 md:mx-0'>
                    <p className='text-[#0E0E0E] font-medium text-xs'>Request Early Access to Get Started</p>
                    <p className='text-black text-2xl font-extrabold w-auto'>Register today & start exploring the endless possiblities.</p>
                </div>
                <button className='h-[60px] w-[190px] md:w-[450px] bg-black text-white rounded-xl my-8 md:my-0 font-bold'>Get Started</button>
            </div>
        </div>
    )
}

export default CaseStudies