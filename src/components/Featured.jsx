import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
   const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

   const handleHover = (index) => {
      cards[index].start({ y: "0%" });
   };

   const handleHoverEnd = (index) => {
      cards[index].start({ y: "100%" });
   };

   return (
      <div className="w-full py-20">
         <div className="w-full border-b-[1px] border-zinc-800 pb-20 px-20">
            <h1 className='text-7xl font-["Neue_Montreal" - 400] tracking-tighter'>Featured projects</h1>
         </div>
         <div className="px-20">
            <div className="cards w-full flex gap-10 mt-10">
               <motion.div
                  onHoverStart={() => handleHover(0)}
                  onHoverEnd={() => handleHoverEnd(0)}
                  className="cardcontainer relative w-1/2 h-[75vh]"
               >
                  <h1 className="absolute flex overflow-hidden right-0 translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-8xl">
                     {"FYDE".split("").map((item, index) => (
                        <motion.span
                           key={index}
                           initial={{ y: "100%" }}
                           animate={cards[0]}
                           transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                           style={{ position: 'relative' }}
                        >
                           {item}
                        </motion.span>
                     ))}
                  </h1>
                  <div className="card rounded-xl w-full h-full overflow-hidden">
                     <img className="w-full h-full bg-cover" src="fade image.png" alt="" />
                  </div>
                  <div className="space-x-4">
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">audit</button>
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">copywriting</button>
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">sales deck</button>
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">slice design</button>
                  </div>
               </motion.div>

               <motion.div
                  onHoverStart={() => handleHover(1)}
                  onHoverEnd={() => handleHoverEnd(1)}
                  className="cardcontainer relative w-1/2 h-[75vh]"
               >
                  <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none tracking-tighter text-8xl">
                     {"VISE".split("").map((item, index) => (
                        <motion.span
                           key={index}
                           initial={{ y: "100%" }}
                           animate={cards[1]}
                           transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                           style={{ position: 'relative' }}
                        >
                           {item}
                        </motion.span>
                     ))}
                  </h1>
                  <div className="card rounded-xl w-full h-full bg-cover overflow-hidden">
                     <img className="w-full h-full bg-cover" src="Vise_front2-1326x1101.jpg" alt="" />
                  </div>
                  <div className="space-x-4">
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">agency</button>
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">company presentation</button>
                  </div>
               </motion.div>
            </div>
         </div>

         <div className="px-20">
            <div className="cards w-full flex gap-10 mt-40">
               <motion.div
                  onHoverStart={() => handleHover(2)}
                  onHoverEnd={() => handleHoverEnd(2)}
                  className="cardcontainer relative w-1/2 h-[75vh]"
               >
                  <h1 className="absolute right-0 z-[9] flex overflow-hidden translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none tracking-tighter text-8xl">
                     {"TRAWA".split("").map((item, index) => (
                        <motion.span
                           key={index}
                           initial={{ y: "100%" }}
                           animate={cards[2]}
                           transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                           style={{ position: 'relative' }}
                        >
                           {item}
                        </motion.span>
                     ))}
                  </h1>
                  <div className="card rounded-xl w-full h-full overflow-hidden">
                     <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg" alt="" />
                  </div>
                  <div className="space-x-4">
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">brand identity</button>
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">design research</button>
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">investor deck</button>
                  </div>
               </motion.div>

               <motion.div
                  onHoverStart={() => handleHover(3)}
                  onHoverEnd={() => handleHoverEnd(3)}
                  className="cardcontainer relative w-1/2 h-[75vh]"
               >
                  <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68] leading-none tracking-tighter text-8xl">
                     {"PREMIUM BLEND".split("").map((item, index) => (
                        <motion.span
                           key={index}
                           initial={{ y: "100%" }}
                           animate={cards[3]}
                           transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                           style={{ position: 'relative' }}
                        >
                           {item}
                        </motion.span>
                     ))}
                  </h1>
                  <div className="card rounded-xl w-full h-full bg-cover overflow-hidden">
                     <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png" alt="" />
                  </div>
                  <div className="space-x-4">
                     <button className="px-5 py-1 mt-5 border-[2px] border-zinc-500 text-[1.1vw] uppercase rounded-full">branded template</button>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   );
}

export default Featured;
