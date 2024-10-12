import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen items-center flex gap-5 px-24'>
        <div className='cardscontainer w-1/2 h-[60vh]'>
        <div className='card relative w-full rounded-xl flex justify-center items-center h-full bg-[#004D43]'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className=' absolute px-5 py-1 border-[2px] border-[#CDEA68] text-[1.1vw] uppercase rounded-full left-10 bottom-10'><span class="btn__text text-[#CDEA68]">©2019-2022</span></button>
        </div>
    </div>
        <div className='cardscontainer flex gap-5 w-1/2 h-[60vh]'>
        <div className='card relative w-full rounded-xl h-full bg-[#212121] flex justify-center items-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className=' absolute px-5 py-1 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full left-10 bottom-10'><span class="btn__text text-white">Rating 5.0 on Clutch</span></button>
        </div>
        <div className='card relative w-full rounded-xl h-full bg-[#212121] flex justify-center items-center'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className=' absolute px-5 py-1 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full left-10 right-10 bottom-10'><span class="btn__text text-white">Business Bootcamp Alumni</span></button>
        </div>

        </div>
    </div>
  )
}

export default Cards