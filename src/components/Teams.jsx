import React from 'react'
import ServiceTitle from './ServiceTitle'
import { teamData } from '../assets/assets'
import {motion} from 'motion/react'

const Teams = () => {
  return (
    <>
     <motion.div
     initial='hidden'
     whileInView='visible'
     transition={{staggerChildren:0.3}}
     viewport={{once:true}}
     className='flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-800 dark:text-white/80 pt-20 sm:pt-30'>
        <ServiceTitle title='Meet the team' desc='A passionate team of digital experts dedicated to your brands success.' />

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5'>
            {teamData.map((team,idx)=>(
                <motion.div
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.4,delay:idx*0.2}}
                viewport={{once:true}}
                key={idx} className='flex max-sm:flex-col items-center gap-1 sm:gap-5 p-3 sm:p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900/70 shadow-lg shadow-gray-400 dark:shadow-gray-800 hover:scale-103 transition-all duration-500'>
                    <img src={team.image} alt="teamImage" className='w-14 rounded-full' />
                    <div className='flex-1'>
                        <h3 className='font-bold text-xs'>{team.name}</h3>
                        <p className='font-semibold text-sm opacity-90'>{team.title}</p>
                    </div>
                </motion.div>
            ))}
        </div>
     </motion.div>
    </>
  )
}

export default Teams