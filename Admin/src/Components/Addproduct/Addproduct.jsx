import React, { useState } from 'react'
import upload_image_icon from '../../assets/upload_area.svg'
import BASE_URL from '../../config/api'

const Addproduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image:"",
    category:"men",
    new_price:"",
    old_price:""
  })

  const imageHandler = (e) =>{
    setImage(e.target.files[0])
  }

  const changeHandler = (e)=>{
    setProductDetails({...productDetails, [e.target.name]:e.target.value})
  }

  const Add_Product = async()=>{
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);
    await fetch(`${BASE_URL}/upload`,{
      method:'POST',
      headers:{
        Accept:'application/json'
      },
      body:formData
    }).then((resp)=>resp.json()).then((data)=>{responseData=data});

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product)
      await fetch(`${BASE_URL}/addproduct`,{
        method:"POST",
        headers:{
          Accept:"application/json",
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product),
      }).then((resp)=>(resp.json())).then((data)=>{
        data.success?alert("Product Added"):alert("failed to add product")
      })
    }
  }

  return (
    <div className='fixed top-45 lg:top-20 lg:left-74 z-50 bg-white px-8 py-8 w-full lg:w-[50%]'>
       <div>
        <p className='text-gray-500 mb-2'>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type='text' placeholder='Type here' className='border border-gray-400 px-2 lg:px-4 py-2 lg:py-4 rounded outline-none w-full mb-3 lg:mb-5' name='name' />
       </div>
       <div className='flex justify-between  items-center gap-3 mb-3 lg:mb-5'>
        <div className='w-full'>
          <p className='text-gray-500 mb-2'>Price</p>
          <input type='number'value={productDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Type here' className='border border-gray-400 px-2 lg:px-4 py-2 lg:py-4 rounded outline-none w-full '/>
        </div>
         <div className='w-full'>
          <p className='text-gray-500 mb-2'>Offer Price</p>
          <input type='number' value={productDetails.new_price} onChange={changeHandler} name='new_price'  placeholder='Type here' className='border border-gray-400 px-2 lg:px-4 py-2 lg:py-4 rounded outline-none w-full'/>
        </div>
       </div>
       <div>
        <p  className='text-gray-500 mb-2'>Product Category</p>
        <select className='border border-gray-400 py-2 lg:py-3 px-3 lg:px-5 rounded mb-3 lg:mb-5' name='category' value={productDetails.category} onChange={changeHandler} >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kid</option>
        </select>
       </div>
       <div>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_image_icon}  className='cursor-pointer lg:h-30 lg:w-30 object-contain mb-3 lg:mb-5' />
          <input type='file' id='file-input' name='image' hidden onChange={imageHandler} />
        </label>
        
       </div>
       <button className='border border-gray-400 text-white bg-blue-500 py-2 lg:py-3 px-3 lg:px-5 rounded w-[150px] lg:w-[200px] cursor-pointer hover:bg-blue-400 active:bg-blue-400'
       onClick={()=>{Add_Product()}}
       >ADD</button>
    </div>
  )
}

export default Addproduct
