"use client"
import Link from 'next/link'
import React from 'react'
import { TbGridDots } from "react-icons/tb"
import { CiSearch } from "react-icons/ci";
import HamburgerMenu from './Hamburger';
import NavLinks from './NavLinks';





export default function AboutSection() {
 
   
    
  return (
    <div>
        <div className='p-5'>
                <nav className='flex justify-between items-center text-[12px] font-bold'>
                    <h2 className='text-[16px] ml-2'><Link href={'/'}>Resonator&reg;</Link></h2>
                    <div className='hidden md:block sm:hidden'>
                    <NavLinks />
                    </div>

                    <div className='flex'>
                    
                      <div className='flex'>
                     <CiSearch size={15}/>
                      <Link className='mr-9 ml-3' href={'/'}>Search</Link>
                      </div>
               
                      <TbGridDots size={20}/>
                    </div>
                    <button className='block md:hidden sm:block mr-20'>
                     < HamburgerMenu/>
                     </button>
                </nav>
            </div>
    </div>
  )
}