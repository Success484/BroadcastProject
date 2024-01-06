import Image from 'next/image'
import React from 'react'
import style from './style/style.module.css'
import { IoIosPlay } from "react-icons/io";

export default function Rock() {
  return (
    <div className='mt-[100px]'>
        <div className='relative'>
            <Image src='/rock.jpg' height={300} width={300} alt='rock-image' className={style.rock}/>
            <div className='absolute bg-white h-[65px] w-[65px] rounded-[50%] flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <IoIosPlay />
            </div>
        </div>
    </div>
  )
}


