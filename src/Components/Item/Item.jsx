import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <section>
        <div className=" w-[180px]  lg:w-[270px] transition-all duration-500 ease-in-out hover:scale-105">
            <Link to={`/product/${props.id}`} onClick={window.scrollTo(0,0)}><img src ={props.image} alt='product image'/></Link>
            <p>{props.name}</p>
            <div className='flex justify-start items-start gap-4'>
                <p className='font-bold'>${props.new_price}</p>
                <p className='text-gray-400 line-through'>${props.old_price}</p>
            </div>
        </div>
    </section>
  )
}

export default Item
