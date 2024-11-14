import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68]  rounded-tl-3xl text-black rounded-tr-3xl'>
        <h1 className='font-[NeueMontreal - 400] text-[4vw] leading-[70px] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full border-t-[2px] border-zinc-800 mt-20 flex justify-between  py-10 px-5 '>
        
        <div className=" w-1/4 left text-[20px] ">
        <p>What you can expect:</p>
        </div>
        <div className="right-mid w-[360px] ml-[348px] text-[20px] "><p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p><br />
        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
    
        </div>
        <div className="right text-[20px]">
            <h1>S:</h1>
            <div className='flex text-[20px] '>
            <ul>
                <li>
                    <a href="#"  className='text-lg  hover:underline'>Instagram</a></li>
                <li><a href="#"  className='text-lg  hover:underline'>Facebook</a></li>
                <li><a href="#"  className='text-lg  hover:underline'>Twitter</a></li>
                <li><a href="#"  className='text-lg  hover:underline'>linkedin</a></li>
            </ul>
            </div>
            </div>
        </div>
        <div className='w-full p-10 border-t-[2px] border-zinc-800 mt-20 flex '>
            <div className='w-1/2'>
              <h1 className='text-7xl'>Our approach:</h1>
              <button className=' uppercase flex items-center gap-14 px-14 py-4 bg-zinc-900 mt-7 rounded-full text-white'>Read more
                <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
              </button>
             </div>
             <div className='w-1/2 h-[60vh] bg-red-300  rounded-3xl'>
             <img className='rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
              </div>

        </div>
    </div>
  )
}

export default About
