import React from 'react'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className=' py-3 lg:py-10 text-sm lg:text-base'>
      HOME &#10132; SHOP &#10132; {product.category} &#10132; {product.name}
    </div>
  )
}

export default Breadcrum
