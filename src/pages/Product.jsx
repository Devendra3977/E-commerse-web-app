import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';


const Product = () => {
const {all_product} = useContext(shopContext);
const {productId} = useParams();
const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <div className='mt-20 px-[5vw] md:px-[5vw] lg:px-[12vw]'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
