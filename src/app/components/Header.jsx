import React from 'react'
import { FaSoundcloud,FaPodcast } from "react-icons/fa";
import style from './style/style.module.css'


export default function Header() {
  return (
    <div className={style.Header}>
            <div className='grid justify-center mt-[45px] mr-[36%]'>
                <div  className='mb-10 ml-6'>
                <h1 className='text-[42px] md:text-[50px] sm:text-[50px] font-semibold'>New episode</h1>
                <h1 className='text-[42px] md:text-[60px] sm:text-[50px] font-semibold mt-[-8px]'>available now</h1>
                <h2>Available on Apple Soundcast and Spotify</h2>
                </div>
                <div className='flex space-x-5 ml-6'>
                    <div className='bg-black rounded-[30px] w-[135px] h-[38px] items-center flex justify-center'>
                        <div className='flex items-center p-5'>
                            <div className='mr-2'><FaPodcast color='white' size={25}/></div>
                            <div className='flex items-center'>
                                <ul className='text-white'>
                                    <li className='text-[8px]'>listen on</li>
                                    <li className='text-[8px] font-bold'>Apple Podcasts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black rounded-[30px] w-[135px] h-[38px] items-center flex justify-center'>
                        <div className='flex items-center p-5'>
                            <div className='mr-2'><FaSoundcloud color='white' size={25} /></div>
                            <div className='flex items-center'>
                                <ul className='text-white'>
                                    <li className='text-[8px]'>listen on</li>
                                    <li className='text-[9px] font-bold'>Soundtec</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
