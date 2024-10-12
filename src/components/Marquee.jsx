import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  
  return (
    <div className='  data-scroll data-scroll-section data-scroll-speed=".1" w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white-900'>
      <div className=" text-white border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
        initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear" ,duration: 10}} 
        className='text-[24vw] tracking-tighter leading-none font-["Test Founders Grotesk X-Cond SmBd "]  uppercase   -mb-[1vw] font-bold mr-[6vw]'>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease: "linear" ,duration: 10}}  className='text-[24vw]  tracking-tighter leading-none font-["Test Founders Grotesk X-Cond SmBd"] uppercase  -mb-[1vw] font-bold '>We are ochi</motion.h1>
       
      </div>
    </div>
  )
}

export default Marquee


