import React, { useContext } from 'react'
import { shopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(shopContext);
  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-full py-2'>
        {/* left div for images  */}
        <div className='flex justify-start items-center gap-3 lg:w-[40%]'>
            <div className='flex flex-col justify-center items-center gap-3 w-[20%] lg:w-[17%]'>
                <img src={product.image} alt='product imagee' className='cursor-pointer' />
                <img src={product.image} alt='product imagee' className='cursor-pointer' />
                <img src={product.image} alt='product imagee' className='cursor-pointer' />
                <img src={product.image} alt='product imagee' className='cursor-pointer' />
            </div>
            <div>
                 <img src={product.image} alt='product imagee' className='cursor-pointer' />
            </div>
        </div>
        {/* right side div for texts */}
        <div className='lg:w-[60%]'>
            <h1 className='text-base lg:text-3xl font-semibold'>{product.name}</h1>
            <div className='lg:py-2'><span className='text-yellow-600'>&#9733; &#9733; &#9733; &#9733;</span> <span className='text-gray-400'>&#9733;</span><span> (122)</span></div>
            <div className='flex justify-start items-center gap-3 lg:text-xl'>
                <div className='font-bold text-gray-400 line-through'>${product.old_price}</div>
                <div className='font-bold '>${product.new_price}</div>
            </div>
            <div className='text-sm py-1 lg:py-3'>
                Crafted from high-quality, breathable fabric for all-day comfort.
                Sleek, modern design that pairs effortlessly with any outfit.
                Perfect for casual wear.
            </div>
            <div>
                <h1 className='font-semibold lg:text-xl lg:py-2 pb-1'>SELECT SIZE</h1>
                <div className='flex justify-start items-center gap-3'>
                    <div className='py-1 lg:py-2 px-2 lg:px-4 border border-gray-400 bg-gray-200 cursor-pointer'>S</div>
                    <div className='py-1 lg:py-2 px-2 lg:px-4 border border-gray-400 bg-gray-200 cursor-pointer'>M</div>
                    <div className='py-1 lg:py-2 px-2 lg:px-4 border border-gray-400 bg-gray-200 cursor-pointer'>L</div>
                    <div className='py-1 lg:py-2 px-2 lg:px-4 border border-gray-400 bg-gray-200 cursor-pointer'>XL</div>
                    <div className='py-1 lg:py-2 px-2 lg:px-4 border border-gray-400 bg-gray-200 cursor-pointer'>XXL</div>
                </div>
            </div>
            <button className='py-1 lg:py-2 px-2 lg:px-4 bg-red-500 text-white my-2 lg:my-3 cursor-pointer hover:bg-red-400'
            onClick={()=>{addToCart(product.id)}}
            >ADD TO CART</button>
            <p className='text-sm'><span className='font-semibold'>Category: </span><span>Women, T-shirt, Crop Top</span></p>
            <p className='text-sm'><span className='font-bold'>Tags: </span><span>Modern, Latest</span></p>
        </div>
    </div>
  )
}

export default ProductDisplay
