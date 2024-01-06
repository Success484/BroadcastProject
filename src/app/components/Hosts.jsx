import React from 'react'
import {IoIosArrowRoundForward} from 'react-icons/io'
import { hosters } from './HostJason'
import Image from 'next/image'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
export default function Hosts() {
    const Host = hosters.map((host) => (
        <section key={host.name}>
        <Image src={host.image} height={250} width={250} alt='' className='rounded-t-md'/>
        <div className='bg-white shadow-md rounded-b-md p-4'>
        <h2 className='font-semibold text-[17px]'>{host.name}</h2>
        <h2 className='text-[10px] text-gray-400'>{host.profession}</h2>
        <div className='flex space-x-3 mt-3'>
            <FaFacebook color='gray'/>
            <FaLinkedin color='gray'/>
            <FaTwitter color='gray'/>
        </div>
        </div>
        </section>
    ))
  return (
    <div className = 'flex justify-center items-center mb-5 mt-[100px] ml-[50px] mr-[50px]'>
        <div>
        <div className='mb-7'>
        <div className='flex flex-col md:flex-row justify-between items-center '>
            <div><h2 className='text-center font-bold text-[30px]'>Essential episodes:</h2></div>
            <div className='flex mt-5'>
            <h2 className='text-[10px] font-bold'>View all of them</h2>
            <div><IoIosArrowRoundForward /></div>
          </div>
        </div>
        </div>
        <div className='grid grid-cols md:grid-cols-3 sm:grid-cols-2 gap-12'>
        {Host}
        </div>
    </div>
    </div>
  )
}
