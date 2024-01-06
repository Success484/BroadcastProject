import React from 'react'
import { useState } from 'react';
import TabButton from './TabButton';
import Link from 'next/link';
export default function NavLinks() {
    const [tab, setTab] = useState('home'); 
    const handleTabChange = (id) => {
      setTab(id);
    }
  return (
    <div className=''>
        <ul className='flex flex-col text-[10px] justify-between items-center p-3 gap-4 md:flex md:flex-row sm:grid sm:text-left sm:gap-4 sm:p-3 sm:text-gray-300'>
                        <Link href={'/'}><TabButton selectTab={() => handleTabChange('home')} active={tab=== 'home'}>Home</TabButton></Link>
                        <Link href={'/'}><TabButton selectTab={() => handleTabChange('pages')} active={tab=== 'pages'}>Pages</TabButton></Link>
                        <Link href={'/'}><TabButton selectTab={() => handleTabChange('podcast')} active={tab=== 'podcast'}>Podcast</TabButton></Link>
                        <Link href={'/'}><TabButton selectTab={() => handleTabChange('blog')} active={tab=== 'blog'}>Blog</TabButton></Link>
                        <Link href={'/'}><TabButton selectTab={() => handleTabChange('shop')} active={tab=== 'shop'}>Pages</TabButton></Link>
                    </ul>
    </div>
  )
}
