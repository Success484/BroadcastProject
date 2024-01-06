import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import style from './style/style.module.css'

export default function Inspiration() {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[58px]'>
            {/* articles */}
            <div>
                <h2 className='text-[30px] font-bold'>Best Place to find <br />
                design inspiration</h2>
                <div className='flex space-x-3 items-center mt-3 mb-3'>
                    <div className='h-[50px] w-[50px] rounded-[70px] border-[2px] border-gray-200'></div>
                    <div>
                        <h2 className='text-[12px] font-semibold'>Episode 1</h2>
                        <h2 className='text-[10px] text-gray-400'>Category<span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span>0:13</h2>
                    </div>
                </div>
                <article className='h-[150px] w-[320px] text-[12px]'>
                    <h2 className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</h2>
                    <h2>Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                </article>
                <div className='flex mt-12'>
                        <h2 className='text-[10px] font-bold'>Episode page</h2>
                        <div><IoIosArrowRoundForward /></div>
                    </div>
            </div>
            <div className={style.cast2}></div>
        </div>
    </div>
  )
}
