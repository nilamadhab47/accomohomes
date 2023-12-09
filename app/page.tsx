import Company from '@/components/Company/Company'
import Faq from '@/components/Faq/Faq'
import Footer1 from '@/components/Footer-1/Footer'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import { Navbar } from '@/components/Navbar/Navbar'
import Reviews from '@/components/Reviews/Reviews'
import Welcome from '@/components/Welcome/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
   <main className=' m-0 p-0 box-border'>
    <Navbar />
    <Hero/>
    <Welcome />
    <Company/>
    <Faq/>
    <Reviews />
    <Footer1/>
    <Footer/>
   </main>
  )
}
