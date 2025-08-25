import React from 'react'
import footer_logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/instagram_icon.png';
import whatsapp from '../../assets/images/whatsapp_icon.png';
import pintester from '../../assets/images/pintester_icon.png';

const Footer = () => {
const footerItems =[
    {id:"company", lable:"Company", path:"/company"},
    {id:"products", lable:"Products", path:"/products"},
    {id:"offices", lable:"Offices", path:"/offices"},
    {id:"about", lable:"About", path:"/about"},
    {id:"contact", lable:"Contact", path:"/Contact"},
]

  return (
    <section>
        <div className='flex flex-col justify-center items-center py-10 border-t border-gray-400'>
            <div className='flex justify-center items-center gap-4 mb-10 cursor-pointer'>
                <img src={footer_logo} alt="footer logo" />
                <h1 className='text-3xl sm:text-5xl font-semibold'>DevKart</h1>
            </div>
            <div className=''>
                <ul className='flex  justify-center items-center space-x-2 lg:space-x-8'>
                {footerItems.map((items, index)=>(
                    <li
                    key={index}
                    className='lg:text-xl text-gray-500 '
                    >
                <button className='cursor-pointer'>{items.lable}</button>
                    </li>
                   
                ))}
                </ul>
            </div>
            <div className='flex justify-center items-center gap-5 py-10'>
                <img src={instagram} alt="social media icons" className='border border-gray-400 p-2 cursor-pointer bg-gray-100 rounded'/>
                <img src={pintester} alt="social media icons"  className='border border-gray-400 p-2  cursor-pointer bg-gray-100 rounded'/>
                <img src={whatsapp} alt="social media icons"  className='border border-gray-400 p-2 cursor-pointer bg-gray-100 rounded'/>
            </div>
            <hr className="w-[70%] border-t border-gray-400 my-4" />
            <p className='lg:text-gray-500'>© 2025 DevKart. All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Footer
