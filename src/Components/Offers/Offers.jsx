import React from 'react'
import exclusive_image from '../../assets/images/exclusive_image.png'

const Offers = () => {
  return (
    <section>
      <div className='py-18 lg:py-20 px-[7vw] md:px-[7vw] lg:px-[12vw] w-full flex bg-gradient-to-b from-pink-200 to-pink-0'>
        <div className="rightSection lg:py-20 lg:h-full w-full flex flex-col justify-center items-start">
            <h1 className='text-4xl font-semibold lg:text-[80px] m-0 p-0'>Exclusive</h1>
            <h1 className='text-4xl font-semibold lg:text-[80px] m-0 p-0'>Offers Only For You</h1>
            <h2 className='lg:text-xl font-semibold m-0 p-0'>ONLY ON BEST SELLERS PRODUCTS ONLY</h2>
            <button
            className='bg-red-500 text-white px-4 lg:px-10 py-2 lg:py-4 lg:text-xl rounded-full cursor-pointer mt-4 lg:mt-8 active:bg-red-400 hover:bg-red-400'
            >Check Now &#10132;</button>
        </div>
        <div className="leftSection lg:h-full w-full flex justify-center items-center">
            <img src={exclusive_image} alt='style girl image' className='lg:h-[550px]'/>
        </div>
      </div>
    </section>
  )
}

export default Offers
