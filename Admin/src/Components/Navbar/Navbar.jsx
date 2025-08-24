import React from 'react'
import navLogo from '../../assets/nav-logo.svg';
import navProfile from '../../assets/nav-profile.svg';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-16 flex justify-between items-center py-3 bg-white shadow px-[5vw] md:px-[5vw] lg:px-[10vw] z-50'>
      <img src={navLogo} alt='navbar logo' className='w-[200px] lg:w-[220px]'/>
      <img src={navProfile} alt='navbar logo' className='w-[75px] lg:w-[85px]'/>
    </div>
  )
}

export default Navbar
