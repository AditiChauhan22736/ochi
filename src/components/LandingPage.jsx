import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen  pt-1'>
        <div className="textstructure mt-52 px-20">
            {["We Create","Eye Opening","Presentations"].map((item,index)=>{
                return (
                <div className="masker">
                <div className='w-fit flex items-center overflow-hidden'>
                    { index === 1 && 
                    (<motion.div 
                       initial={{width:0}}
                       transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                       animate={{width:"9vw"}}
                       className='mr-[0.4vw] w-[9vw] h-[5.3vw] justify-center flex items-center relative top-[0.6vw] rounded-md bg-red-800'>
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="#" />

                    </motion.div>)}
                <h1 className=" uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-['Test Founders Grotesk X-Cond SmBd'] font-medium" >{item}</h1>
               </div> 
            </div>
                );
            })}
            
            
        </div>
        <div className='border-t-[2px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20   '>
        {["For public and private companies" ,"From the first pitch to IPO"
         ].map((item , index) =>{
               return <p  key={index} className="text-md  text-[1.2vw] tracking-tight leading-none">{item}</p>
         }
        )}
        <div className="start flex items-center gap-[0.3vw]  ">
        <button className='px-5 py-1 border-[2px] border-zinc-500  text-[1.1vw] uppercase rounded-full'>start the project</button>
        <button className='w-10 h-10  flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
            <span className=' rotate-[45deg]'>
            <FaArrowUp />
            </span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage