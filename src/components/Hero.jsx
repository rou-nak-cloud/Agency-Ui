import React from 'react'
import assets from '../assets/assets'
import {easeIn, motion} from 'motion/react'

const Hero = () => {
  return (
    <>
     <div id='hero' className='flex flex-col items-center gap-6 py-16 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-500'>

        <motion.div 
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6,ease:'easeIn',delay:0.6}}
        viewport={{once:true}}
        className='inline-flex items-center gap-2 border border-gray-400 p-2 pr-4 rounded-full'>
            <img src={assets.group_profile} alt="group" className='w-20' />
            <p className='text-xs font-medium'>Trusted by 8k+ people</p>
        </motion.div>
        <motion.h1
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.7,ease:'easeIn',delay:0.7}}
        viewport={{once:true}}
         className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[90px] max-w-5xl'>
            Turning Imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent font-bold'>digital</span> impact.
        </motion.h1>
        <motion.p
        initial={{opacity:0,y:-30}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.6,ease:'easeIn',delay:1}}
        viewport={{once:true}}
        className='text-sm sm:text-lg font-medium text-gray-600 dark:text-white/80 max-w-4/5 sm:max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences.</motion.p>

        <motion.div
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.6,delay:2}}
        viewport={{once:true}}
        className='relative'>
            <img src={assets.hero_img} alt="heroImage" className='w-full max-w-5xl' />
            <img src={assets.bgImage1} alt="bgImage1" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' />
        </motion.div>

     </div> 
    </>
  )
}

export default Hero