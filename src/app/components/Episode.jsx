import React from 'react'
import {TbHeadphonesFilled} from 'react-icons/tb'
import Image from 'next/image'
import style from './style/style.module.css'
import { IoMdShare } from "react-icons/io";
import {IoIosArrowRoundForward} from 'react-icons/io'


export default function Episode() {
  return (
    <div className='flex justify-center items-center ml-[50px] mr-[50px]'>
    <div className='grid'>
        <div className='mb-7'>
        <div className='flex flex-col md:flex-row justify-between items-center '>
            <div><h2 className='text-center font-bold text-[30px]'>Essential episodes:</h2></div>
            <div className='flex mt-5'>
            <h2 className='text-[10px] font-bold'>View all episode</h2>
            <div><IoIosArrowRoundForward /></div>
          </div>
        </div>
        </div>
    <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  pb-30 gap-12'>
            <div className={`${style.flexx} relative`}>
                <div>
                    <div className="relative">
                        <Image src={'/cast6.png'} height={240} width={270} alt='image' className={`rounded-t-md ro${style.episode}`} />
                    <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
                        <TbHeadphonesFilled className='w-4 h-4 text-black' />
                    </div>
                    </div>
                <div className='flex items-center bg-white shadow-md p-6 rounded-b-md'>
                    <div>
                        <h2 className='text-[10px] text-gray-400'>Episode 8 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span> Technology</h2>
                        <h2 className='font-semibold text-[15px] md:text-[17px]'><span>SRKP</span> select:  how the <br /> <span>new ages work</span></h2>
                        <div className='h-[2px] w-[10] bg-black'></div>
                        <div className='flex mt-5  items-center'>
                            <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>
                            <div className='bg-gray-500 rounded-full p-[2px]'><IoMdShare color='white' size={12}/></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={`${style.flexx} relative`}>
                <div>
                    <div className="relative">
                        <Image src={'/cast7.png'} height={240} width={270} alt='image' className={`rounded-t-md ro${style.episode}`} />
                    <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
                        <TbHeadphonesFilled className='w-4 h-4 text-black' />
                    </div>
                    </div>
                <div className='flex items-center bg-white shadow-md p-6 rounded-b-md'>
                    <div>
                        <h2 className='text-[10px] text-gray-400'>Episode 8 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span> Technology</h2>
                        <h2 className='font-semibold text-[15px] md:text-[17px]'><span>SRKP</span> select: a new <br /> <span>mindset today</span></h2>
                        <div className='h-[2px] w-[10] bg-black'></div>
                        <div className='flex mt-5  items-center'>
                            <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>
                            <div className='bg-gray-500 rounded-full p-[2px]'><IoMdShare color='white' size={12}/></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={`${style.flexx} relative`}>
                <div>
                    <div className="relative">
                        <Image src={'/cast8.png'} height={240} width={270} alt='image' className={`rounded-t-md ro${style.episode}`} />
                    <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
                        <TbHeadphonesFilled className='w-4 h-4 text-black' />
                    </div>
                    </div>
                <div className='flex items-center bg-white shadow-md p-6 rounded-b-md'>
                    <div>
                        <h2 className='text-[10px] text-gray-400'>Episode 8 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span> Technology</h2>
                        <h2 className='font-semibold text-[15px] md:text-[17px]'><span>SRKP</span> select: the latest <br /> <span>trends now</span></h2>
                        <div className='h-[2px] w-[10] bg-black'></div>
                        <div className='flex mt-5  items-center'>
                            <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>
                            <div className='bg-gray-500 rounded-full p-[2px]'><IoMdShare color='white' size={12}/></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={`${style.flexx} relative`}>
                <div>
                    <div className="relative">
                        <Image src={'/cast9.png'} height={240} width={270} alt='image' className={`rounded-t-md ro${style.episode}`} />
                    <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
                        <TbHeadphonesFilled className='w-4 h-4 text-black' />
                    </div>
                    </div>
                <div className='flex items-center bg-white shadow-md p-6 rounded-b-md'>
                    <div>
                        <h2 className='text-[10px] text-gray-400'>Episode 8 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span> Technology</h2>
                        <h2 className='font-semibold text-[15px] md:text-[17px]'><span>SRKP</span> select: organize <br /> <span>your day</span></h2>
                        <div className='h-[2px] w-[10] bg-black'></div>
                        <div className='flex mt-5  items-center'>
                            <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>
                            <div className='bg-gray-500 rounded-full p-[2px]'><IoMdShare color='white' size={12}/></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={`${style.flexx} relative`}>
                <div>
                    <div className="relative">
                        <Image src={'/cast10.png'} height={240} width={270} alt='image' className={`rounded-t-md ro${style.episode}`} />
                    <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
                        <TbHeadphonesFilled className='w-4 h-4 text-black' />
                    </div>
                    </div>
                <div className='flex items-center bg-white shadow-md p-6 rounded-b-md'>
                    <div>
                        <h2 className='text-[10px] text-gray-400'>Episode 8 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span> Technology</h2>
                        <h2 className='font-semibold text-[15px] md:text-[17px]'><span>SRKP</span> select: how to <br /> <span>plan your work</span></h2>
                        <div className='h-[2px] w-[10] bg-black'></div>
                        <div className='flex mt-5  items-center'>
                            <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>
                            <div className='bg-gray-500 rounded-full p-[2px]'><IoMdShare color='white' size={12}/></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={`${style.flexx} relative`}>
                <div>
                    <div className="relative">
                        <Image src={'/cast11.png'} height={240} width={270} alt='image' className={`rounded-t-md ro${style.episode}`} />
                    <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
                        <TbHeadphonesFilled className='w-4 h-4 text-black' />
                    </div>
                    </div>
                <div className='flex items-center bg-white shadow-md p-6 rounded-b-md'>
                    <div>
                        <h2 className='text-[10px] text-gray-400'>Episode 8 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span> Technology</h2>
                        <h2 className='font-semibold text-[15px] md:text-[17px]'><span>SRKP</span> select: trying the <br /> <span>best phones</span></h2>
                        <div className='h-[2px] w-[10] bg-black'></div>
                        <div className='flex mt-5  items-center'>
                            <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>
                            <div className='bg-gray-500 rounded-full p-[2px]'><IoMdShare color='white' size={12}/></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
