import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/images/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(shopContext)
  return (
     <section>
      <div className='mt-20 px-[5vw] md:px-[5vw] lg:px-[12vw]'>
        <img src={props.banner} alt="categor banner"/>
        {/* text and dropdowun icon */}
        <div className='flex justify-between items-center py-5'>
          <p className='text-sm lg:text-base'><span className='font-bold'>Showing 1 to 12 </span> out of 36 Products</p>
          <div className='text-sm lg:text-base px-3 py-[5px] lg:py-2 border rounded-full hover:bg-gray-200 cursor-pointer active:bg-gray-200'>
            Short by▼
          </div>
        </div>
        {/* shop category products */}
        <div className='flex flex-wrap justify-center items-center gap-5'>
          {all_product.map((item, index)=>{
            if(props.category == item.category){
              return <Item key={index} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
            }
          })}
        </div>
        <div className='bg-red-500 text-white lg:text-xl px-4 lg:px-8 py-3 lg:py-5 rounded-full mt-15 w-[170px] lg:w-[220px] cursor-pointer hover:bg-red-400 active:bg-red-400 mx-auto'>
          Explore more &#10132; 
        </div>
      </div>
     </section>
  )
}

export default ShopCategory
