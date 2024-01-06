import React from 'react'
import style from './style/style.module.css'
import Navbar from './Navbar'
import Header from './Header'
import Position from './Position'
import Inspiration from './Inspiration'
import Toppod from './Toppod'
import Episode from './Episode'
import Rock from './Rock'
import Hosts from './Hosts'

export default function Firstsec() {
  return (
    <div>
        <div className={style.broadcast}>
            <Navbar />
            <Header />
        </div>
        <div className='relative bottom-[100px] mb-[50px]'>
            <Position />
        </div>
        <div>
            <Inspiration />
          </div>
          <div>
            <Toppod />
          </div>
          <div>
            <Episode />
          </div>
          <div>
            <Rock />
          </div>
          <div>
            <Hosts />
          </div>
          {/* <div>
            <Caro />
          </div> */}
        
    </div>
  )
}
