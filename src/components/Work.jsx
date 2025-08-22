import React from 'react'
import ServiceTitle from './ServiceTitle'
import { workData } from '../assets/assets'
import {motion} from 'motion/react'

const Work = () => {
  return (
    <>
     <motion.div
     initial='hidden'
     whileInView='visible'
     transition={{staggerChildren:0.2}}
     viewport={{once:true}}
     id='our-work' className='flex flex-col items-center gap-7 pt-20 sm:pt-30 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/90'>
        <ServiceTitle title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-2 sm:mt-4'>
            {
                workData.map((work,idx) => (
                    <motion.div
                    initial={{opacity:0,y:-30}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.5,delay:idx*0.3}}
                    viewport={{once:true}}
                    key={idx} className='hover:scale-103 transition-all duration-500 cursor-pointer'>
                        <img src={work.image} alt="workImages" className='w-full rounded-xl' />
                        <h3 className='mt-3 mb-2 font-semibold text-lg'>{work.title}</h3>
                        <p className='w-5/6 text-sm opacity-70'>{work.description}</p>
                    </motion.div>
                ))
            }
        </div>

     </motion.div>
    </>
  )
}

export default Work