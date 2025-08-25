//  import data_product from '../../assets/images/data';
import { useState } from 'react';
import Item from '../Item/Item';
import { useEffect } from 'react';
import BASE_URL from '../../config/api';

const Popular = () => {
  const [data_product, setData_product] = useState([]);
  useEffect(()=>{
    fetch(`${BASE_URL}/popularinwomen`)
    .then((resp)=>(resp.json()))
    .then((data)=>setData_product(data))
  },[])
  return (
    <section className=''>
        <div className='bg-gradient-to-t from-pink-200 to-pink-0'>
            <h1 className='text-center text-2xl lg:text-4xl font-semibold mt-10 underline decoration-2 underline-offset-10 '>POPULAR IN WOMENS</h1>
            <div className='flex flex-wrap justify-center items-center gap-5 pt-15'>
                {data_product.map((items,i)=>{
                    return <Item key={i} id={items.id} name={items.name} image={items.image} old_price={items.old_price} new_price={items.new_price}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default Popular
