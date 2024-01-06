"use client"
import React from 'react';
import {motion} from "framer-motion"

const variants = {
  default: {width: 0 },
  active: {width: "calc(100% - 0.75rem)"}
}
export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active 
  ? 'text-black' 
  : 'text-black';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
      {children}
    </p>
    <motion.div 
    animate= {active ? "active" : "default"}
    variants={variants}
    className='h-0.5 bg-black mt-2 mr-3'
    ></motion.div>
    </button>
  );
}
