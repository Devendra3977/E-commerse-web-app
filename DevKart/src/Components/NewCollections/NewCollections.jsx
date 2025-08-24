 import { useEffect, useState } from 'react';
// import new_collections from '../../assets/images/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  const [new_collections, setNew_collections] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((resp)=>(resp.json()))
    .then((data)=>setNew_collections(data));
  },[])
  return (
    <section className=''>
        <div className='bg-gradient-to-t from-pink-200 to-pink-0 lg:px-[12vw] py-4 pb-10 border-b'>
            <h1 className='text-center text-2xl lg:text-4xl font-semibold mt-10 underline decoration-2 underline-offset-10 '>NEW COLLECTIONS</h1>
            <div className='flex flex-wrap justify-center items-center gap-5 pt-15'>
                {new_collections.map((items,i)=>{
                    return <Item key={i} id={items.id} name={items.name} image={items.image} old_price={items.old_price} new_price={items.new_price}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default NewCollections
