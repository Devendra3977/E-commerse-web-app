import React from 'react'
import heroImage from '../../assets/images/hero_image.png'

const Hero = () => {
  return (
    <section className='pt-20 '>
      <div className='p-8 lg:py-3 px-[7vw] md:px-[7vw] lg:px-[12vw] w-full flex bg-gradient-to-b from-pink-200 to-pink-0'>
        <div className="rightSection lg:py-20 lg:h-full w-full flex flex-col justify-center items-start">
            <h2 className='lg:text-xl font-semibold m-0 p-0'>NEW ARRIVALS ONLY</h2>
            <h1 className='text-4xl font-semibold lg:text-[80px] m-0 p-0'>new&#128075;</h1>
            <h1 className='text-4xl font-semibold lg:text-[80px] m-0 p-0'>collections</h1>
            <h1 className='text-4xl font-semibold lg:text-[80px] m-0 p-0'>for everyone</h1>
            <button
            className='bg-red-500 text-white px-4 lg:px-10 py-2 lg:py-4 lg:text-xl rounded-full cursor-pointer mt-8 lg:mt-8 active:bg-red-400 hover:bg-red-400'
            >Latest Collection &#10132;</button>
        </div>
        <div className="leftSection lg:h-full w-full flex justify-center items-center">
            <img src={heroImage} alt='style girl image' className='lg:h-[600px]'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
