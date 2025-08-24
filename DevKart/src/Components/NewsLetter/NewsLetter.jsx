import React from 'react'

const NewsLetter = () => {
  return (
    <section>
          <div className='py-18 lg:py-30 px-[7vw] md:px-[7vw] lg:px-[12vw] w-full flex flex-col justify-center items-center bg-gradient-to-b from-pink-200 to-pink-0'>
             <h1 className='text-3xl font-semibold lg:text-5xl m-0 p-0 text-center'>Get Exclusive Offers On Your Email</h1>
             <h2 className='lg:text-xl mt-5 lg:mt-10 p-0'>Subscribe to our newsletter and stay updated</h2>
             <div className='flex flex-row justify-center items-center mt-8'>
                <input type='email' placeholder='Your mail id...' className='w-[60%] lg:w-[400px] border border-gray-400 rounded-full pr-10 pl-5 py-2 lg:text-xl focus:outline-none'/>
                <button className='py-2 text-white bg-black rounded-full px-8 transform -translate-x-10 cursor-pointer lg:text-xl active:bg-white active:text-black active:border transition duration-100 ease-in-out hover:bg-white hover:text-black hover:border'>Subscribe</button>
             </div>
          </div>
        </section>
  )
}

export default NewsLetter
