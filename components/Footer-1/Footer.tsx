import React from 'react'
import { Button } from '../ui/button'

const Footer1 = () => {
  return (
    <div className=' bg-[#E5E7FF]  max-w-[1440px] h-[288px] items-center flex justify-between md:px-32 px-4'>
        <h2 className=' md:text-5xl text-base font-bold text-black w-[40%]'>Reach out to us for any query</h2>
        <Button className=' p-4 bg-[#000341] uppercase rounded-none'>Contact Us</Button>
    </div>
  )
}

export default Footer1