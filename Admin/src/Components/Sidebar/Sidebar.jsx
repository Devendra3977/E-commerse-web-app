import React from 'react'
import { Link } from 'react-router-dom'
import list_product_icon from '../../assets/Product_list_icon.svg'
import add_product_icon from '../../assets/Product_Cart.svg'

const Sidebar = () => {
  return (
    <div className=' flex flex-row gap-4 lg:flex-col lg:items-center fixed top-16 left-0 lg:h-[calc(100vh-4rem)] lg:shadow w-full lg:w-70 bg-white p-4'>
      <Link to={"/addproduct"}>
        <div className='flex justify-center items-center gap-4 py-3 px-4 bg-[#f6f6f6] rounded hover:bg-gray-200 active:bg-gray-200'>
            <img src={add_product_icon} />
            <p>Add Product</p>
        </div>
      </Link>
       <Link to={"/listproduct"}>
        <div className='flex justify-center items-center gap-4 py-3 px-4 bg-[#f6f6f6] rounded hover:bg-gray-200  active:bg-gray-200'>
            <img src={list_product_icon} />
            <p>List Product</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
