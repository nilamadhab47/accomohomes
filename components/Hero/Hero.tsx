import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className=' bg-cover h-screen text-white flex flex-col justify-center items-center gap-8' style={{backgroundImage: "url('/images/hero.png')"}}>
        <h1 className=' text-[72px] w-[70%] text-center font-bold'>Your stay is covered <br /> with ACOMO</h1>
        <p className=' text-xl'>We bring safe, comfortable, and fully-furnished coliving spaces. Finding home that suits all your requirements made easy.</p>
        <Button className=' bg-white border-none rounded-none p-3 text-xs text-black'>Find Your Stay</Button>
    </div>
  )
}

export default Hero