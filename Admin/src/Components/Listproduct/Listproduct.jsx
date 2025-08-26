import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import BASE_URL from '../../config/api';

const Listproduct = () => {
const [allProduct, setAllProduct] = useState([]);

const fetchInfo = async()=>{
  await fetch(`${BASE_URL}/allproducts`).then((resp)=>(resp.json())).then((data)=>{setAllProduct(data)})
}

const deleteItem = async (id)=>{
  await fetch(`${BASE_URL}/removeproduct`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      'Content-Type':"application/json"
    },
    body:JSON.stringify({id:id})
  });
  fetchInfo();
}

useEffect(()=>{
  fetchInfo()
},[]);

  return (
    <div className='fixed top-45 lg:top-20 lg:left-74 z-50 bg-white px-8 py-8 w-full lg:w-[80%] h-[630px] overflow-y-auto
'>
      <h1 className='text-center text-xl lg:text-4xl mb-4'>All products</h1>
     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {allProduct.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-sm rounded-xl overflow-hidden border hover:shadow-md transition duration-300"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-contain bg-gray-50 p-2"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {item.name}
        </h3>
        <p className="text-xs text-gray-500 capitalize">{item.category}</p>

        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-400 line-through text-xs">
            ${item.old_price}
          </p>
          <p className="text-blue-600 font-bold text-sm">${item.new_price}</p>
        </div>

        <button className="mt-3 w-full bg-red-500 text-white py-1.5 text-sm rounded-lg hover:bg-red-600 active:bg-red-700 transition cursor-pointer"
        onClick={()=>{deleteItem(item.id)}}
        >
          Delete Product
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Listproduct
