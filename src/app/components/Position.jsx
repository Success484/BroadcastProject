import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiSpeakerWave } from "react-icons/hi2";
import style from './style/style.module.css'



export default function Position() {
  return (
    <div className='mb-5 w-[100%] h-[200px]'>
        <div className={`flex justify-center items-center${style.index }`}>
            <Image src={'/cast1.png'} height={200} width={200} alt='' />
            <div className='bg-white pt-5 pl-5 pr-5 shadow-md'>
              <div className='flex justify-between'>
                <div className='ml-15'>
                    <h2 className='text-[13px] leading-[35px] font-semibold md:text-[25px] sm:text-[18px]'>Timmy Milke: the nature <br />of design</h2>
                    <div className='mb-4 mt-4 text-[10px] text-gray-400'>
                      <h2 className='flex items-center'>Episode 1 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span>Microphone <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span>0:13</h2>
                    </div>
                    
                </div>
                <div>
                    <div className='flex justify-center items-center mt-3'>
                        <h2 className='text-[10px] font-semibold'>Episodes <span>page</span></h2>
                        <div><IoIosArrowRoundForward /></div>
                    </div>
                    
                </div>
                
              </div>
              <div className='flex justify-center items-center space-x-2 md:space-x-5'>
                <div className='lg:h-[55px] lg:w-[55px] w-[50px] sm:w-[50px] sm:h-[50px] h-[40px]  rounded-[80%] border-[2px] border-gray-200'></div>
                <h2 className='text-[10px] text-gray-400'>10s</h2>
                <h2 className='text-[10px] text-gray-400'>10s</h2>
                <div className='flex justify-center items-center'>
                <div className={'bg-black h-[10px] w-[10px] rounded-full border border-black relative left-[3px] top-0'}></div>
                <div className='bg-black h-[3px] w-[50px] sm:w-[100px] md:w-[300px] rounded-sm'></div>
                </div>
                <h2 className='text-[10px] text-gray-400'>00:00 / <span></span>00:00</h2>
                <div><HiSpeakerWave /></div>
              </div>
                
            </div>
        </div>
    </div>
  )
}
