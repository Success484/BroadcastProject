// "use client"
// import React from 'react'
// import {IoIosArrowRoundForward} from 'react-icons/io'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { TbHeadphonesFilled } from "react-icons/tb";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import style from './style/style.module.css'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Image from 'next/image';

export const swip = [
  {
    'image':'/cast3.png',
    'text':'Episode 7  \u00B7 Technology',
    'secText':'SRKP selects: open your <br/> mind easy'
  },
  {
    'image':'/cast4.png',
    'text':'Episode 8  \u00B7 Technology',
    'secText':'SRKP selects: keep your <br/> watch'
  },
  {
    'image':'/cast5.png',
    'text':'Episode 9  \u00B7 Technology',
    'secText':'SRKP selects: listen to <br/>behaviour'
  },
  {
    'image':'/cast6.png',
    'text':'Episode 9  \u00B7 Technology',
    'secText':'SRKP selects: enjoy every <br/>moment'
  }
]
// export default function Toppod() {
// const swippe = swip.map((swips) => (
//   <section key={swips.text}>
//     <div>
//     <div className="relative">
//                         <Image src={swips.image} height={260} width={300} alt='image' className={` relative ${style.episode}`} />
//                     <div className="absolute top-0 right-0 bg-white h-7 w-7 rounded-md flex justify-center items-center">
//                         <TbHeadphonesFilled className='w-4 h-4 text-black' />
//                     </div>
//                     </div>
//                     <div className='flex items-center  shadow-md p-6 bg-white '>
//                     <div>
//                         <h2 className='text-[10px] text-gray-400'>{swips.text}</h2>
//                         <h2 className='font-semibold text-[14px] md:text-[17px] '><div dangerouslySetInnerHTML={{ __html: swips.secText }} /></h2>
//                         <div className='h-[2px] w-[10] bg-black'></div>
//                         <div className='flex mt-5  items-center'>
//                             <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>

//                         </div>
//                     </div>
//                 </div>
//     </div>
    

//   </section>
// ))
//   return (
//         <div className='bg-gray-100 mt-[100px] mb-[100px] pb-[100px]'>
//     <div className='pt-[60px] mb-10'>
//         <h1 className="text-center font-bold text-[30px]">Top Podcasts:</h1>
//         <p className='font-medium text-center text-[11px]'>Discover the selection of the most popular podcast.</p>
//         </div>

//        <Swiper
//         modules={[Navigation, Pagination, Scrollbar, A11y]}
//         // slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//       >
// <SwiperSlide >
// <div className='flex flex-row'>
//   {swippe}
//   </div>
//  </SwiperSlide> 
//     </Swiper> 
//     </div>
//   )
// }

// 'use client';
// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Image from 'next/image';
// import style from './style/style.module.css'
// import { TbHeadphonesFilled } from 'react-icons/tb';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };

// export default function Caro() {
//   const slid = swip.map((sliders) => (
//     <section key={sliders.text}>
//         <div className='flex'>
//         <div className="relative">
//                         <Image src={'/cast7.png'} height={240} width={270} alt='image' className={`${style.episode}`} />
//                     <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
//                         <TbHeadphonesFilled className='w-4 h-4 text-black' />
//                     </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center bg-white shadow-md p-6'>
//                     <div>
//                         <h2 className='text-[10px] text-gray-400'>Episode 8 <span className='relative top-[-2.5px] ml-[2px] mr-[2px]'>. </span> Technology</h2>
//                         <h2 className='font-semibold text-[15px] md:text-[17px]'><span>SRKP</span> select: a new <br /> <span>mindset today</span></h2>
//                         <div className='h-[2px] w-[10] bg-black'></div>
//                         <div className='flex mt-5  items-center'>
//                             <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>
//                             {/* <div className='bg-gray-500 rounded-full p-[2px]'><IoMdShare color='white' size={12}/></div> */}
//                         </div>
//                     </div>
//                 </div>
//     {/* </div> */}
//     </section>
//   ));

//   return (
//     <div className='bg-gray-100 mt-[100px] mb-[100px] pb-[100px]'>
//       <div className='pt-[60px] mb-10'>
//          <h1 className="text-center font-bold text-[30px]">Top Podcasts:</h1>
//          <p className='font-medium text-center text-[11px]'>Discover the selection of the most popular podcast.</p>
//          </div>
//       <Carousel
//         swipeable={false}
//         draggable={false}
//         showDots={true}
//         responsive={responsive}
//         ssr={false}
//         infinite={true}
//         autoPlay={false}
//         autoPlaySpeed={1000}
//         keyBoardControl={true}
//         customTransition='all .5'
//         transitionDuration={500}
//         containerClass='carousel-container'
//         dotListClass='custom-dot-list-style'
//         itemClass='carousel-item-padding-40-px'
//         className='location-jobs'
//       >
//         <div className=''>{slid}</div>
        
//       </Carousel>
//     </div>
//   );
// }

'use client';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import style from './style/style.module.css'
import { TbHeadphonesFilled } from 'react-icons/tb';

const responsive = {
  // superLargeDesktop: {
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1
  }
};

export default function Caro() {
  const slid = swip.map((sliders) => (
    <section key={sliders.text} className='flex justify-center items-center'>
        <div className='flex flex-row mb-10'>
      <div className="relative">
                        <Image src={sliders.image} height={100} width={100} alt='image' className={`relative rounded-l-md ${style.episodes} `} />
                        <div className="absolute top-0 right-0 mt-3 mr-3 bg-white h-7 w-7 rounded-md flex justify-center items-center">
                        <TbHeadphonesFilled className='w-4 h-4 text-black' />
                    </div>
                    </div>
                    <div className={`flex items-center  shadow-md p-6 bg-white w-[300px] rounded-r-md mr-10 ${style.episodes}`}>
                    <div>
                        <h2 className='text-[10px] text-gray-400'>{sliders.text}</h2>
                        <h2 className='font-semibold text-[14px] md:text-[17px] '><div dangerouslySetInnerHTML={{ __html: sliders.secText }} /></h2>
                        <div className='h-[2px] w-[10] bg-black'></div>
                        <div className='flex mt-5  items-center'>
                            <h2 className='text-[10px] text-gray-400 mr-1'>share</h2>

                        </div>
                    </div>
                </div>
                </div>
    {/* </div> */}
    </section>
  ));

  return (
    <div className='bg-gray-100 mt-[100px] mb-[100px] pb-[100px]'>
      <div className='pt-[60px] mb-10'>
       <h1 className="text-center font-bold text-[30px]">Top Podcasts:</h1>
        <p className='font-medium text-center text-[11px]'>Discover the selection of the most popular podcast.</p>
         </div>
         <div className=''>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        className='location-jobs'
      >
        
        {slid}
        
        
      </Carousel>
      </div>
    </div>
  );
}