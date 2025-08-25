import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='py-8 lg:py-15'>
      <div className='flex justify-start items-center'>
        <div className='outline outline-gray-400 px-6 py-4 font-semibold cursor-pointer'>Description</div>
        <div className='outline outline-gray-400 px-6 py-4 cursor-pointer'>Reviews (122)</div>
      </div>
      <div className='px-6 py-4 outline outline-gray-400'>
        <p>Discover timeless style and unbeatable comfort with our carefully curated clothing collection.
        Each piece is crafted from premium materials, designed to fit effortlessly into your everyday life.
        From casual essentials to standout statement pieces, find the perfect look for every moment.</p>
        <br />
        <p>Style meets comfort in every stitch of our thoughtfully designed apparel.
        Made with high-quality fabrics, our pieces offer a perfect blend of durability and softness.
        Elevate your wardrobe with versatile designs made for everyday confidence.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
