import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'


export default function Footer() {
    const year = 2021
  return (
    < div className='mt-[90px] bg-black flex justify-center items-center '>
        {/* <div className='  '> */}
            <div className='grid grid-cols md:grid-cols-2 mt-[65px] mb-40 mr-[50px]' >
                <div className='text-center mb-5'><h2 className='text-[18px] text-white'><Link href={'/'}>Resonator&reg;</Link></h2>
                <h2 className='text-[10px] text-gray-400' >The great connection.</h2>
            </div>
            <div className=''>
                <h2 className='text-[18px] text-white '>We collaborate with ambitious brands and people;<br /> lets build something great together.</h2>
                <div className='grid grid-cols md:grid-cols-3 sm:grid-cols-2 mt-[70px] gap-14'>
                <ul className='text-white gap-10'>
                        <li className='text-[11px] font-medium text-gray-400 mb-5'>Start a conversation:</li>
                        <li className='text-[12px] text-gray-400 mb-9'>podcast@example.com <span className='mr-2'></span> <br />+2 969 866 7033</li>
                        <li className='text-[10px] text-gray-400'>Terms & Conditions</li>
                    </ul>
                   
                    <ul className='text-white gap-10'>
                        <li className='text-[11px] font-medium text-gray-400 mb-5 '>Find us here:</li>
                        <li className='text-[12px] text-gray-400 mb-9'>Brooklyn, NY 11201<br/>United States</li>
                        <li className='text-[10px] text-gray-400'>Privacy Policy</li>
                    </ul>
                    
                    <ul className='text-white '>
                        <li className='text-[11px] font-medium text-gray-400 mb-5'>Follow us on:</li>
                        <li className='flex space-x-2 text-gray-400 mb-[56px]'><FaFacebook /><FaInstagram/><FaTwitter/><FaYoutube/></li>
                        <li className='text-[10px] text-gray-400'> &copy; {year} <span className='text-gray-400'>Qode Interactive</span>. All Rights Reserved</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        // </div>
    
  )
}

                {/* <div className='flex space-x-10'>
                    <ul className='text-white'>
                        <li>Start a conversation:</li>
                        <li>podcast@example.com <br />+2 969 866 7033</li>
                        <li>Terms & Conditions</li>
                    </ul>
                    <ul className='text-white'>
                        <li>Find us here:</li>
                        <li>Brooklyn, NY 11201<br/>United States</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul className='text-white'>
                        <li>Follow us on:</li>
                        <li className='flex space-x-2'><FaFacebook/><FaInstagram/><FaTwitter/><FaYoutube/></li>
                        <li> &copy; 2021 Qode Interactive. All Rights Reserved</li>
                    </ul>
                </div> */}