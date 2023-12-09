import Image from 'next/image'
import React from 'react'

const Images = 
[
    {
    src:"/images/brand.png" 
    },
    {
    src:"/images/brand1.png" 
    },
    {
    src:"/images/brand2.png" 
    },
    {
    src:"/images/brand3.png" 
    },
]

const Company = () => {
  return (
    <div className=' flex justify-around items-center p-[46px]'>
        {Images.map((img,key)=> (
            <Image 
            src={img.src}
            alt='image'
            width={210}
            height={21}
            key={key}
            />
        ))}
        
    </div>
  )
}

export default Company