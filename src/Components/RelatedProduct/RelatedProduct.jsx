import React from 'react'
import data_product from '../../assets/images/data'
import Item from '../Item/Item'

const RelatedProduct = () => {
  return (
    <div className='py-5'>
      <h1 className='text-4xl font-semibold text-center underline decoration-3 underline-offset-6'>Related Products</h1>
      <div className='flex flex-wrap justify-center items-center gap-4 py-10'>
        {data_product.map((items, index)=>{
            return <Item key={index} id={items.id} name={items.name} image={items.image} old_price={items.old_price} new_price={items.new_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
