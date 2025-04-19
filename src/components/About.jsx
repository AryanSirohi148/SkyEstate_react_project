import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center conatiner 
    mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2' >About <span
        className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Propperties, Dedicated to Your Vision</p>
        <div className='flex felx-col md:felx-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt='' className='w-full sm:w-1/2 max-w-lg'/>    {/* this image is for left side */}
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>           {/* this div is for right side, features and below it description */}
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800' >10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800' >12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800' >20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800' >25+</p>
                        <p>Ongoing Projects</p>
                    </div>

                </div>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ad repudiandae magni distinctio ullam nisi ea dignissimos eveniet aspernatur nesciunt consequuntur corporis, voluptas commodi dolor recusandae</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>

            </div>

        </div>
    
    </div>
  )
}

export default About
