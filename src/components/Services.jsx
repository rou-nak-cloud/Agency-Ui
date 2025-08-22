import React from 'react'
import assets, { services } from '../assets/assets'
import ServiceTitle from './ServiceTitle'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react'

const Services = () => {
  return (
    <>
     <motion.div 
     initial='hidden'
     whileInView='visible'
     transition={{staggerChildren:0.2}}
     viewport={{once:true}}
     id='services' className='relative flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-30 text-gray-600 dark:text-white/80'>
        <img src={assets.bgImage2} alt="bgImage2" className='absolute -top-100 -left-70 -z-1 dark:hidden' />

        <ServiceTitle title='How can we help?' 
                        desc='From strategy to execution, we craft digital solutions that move your business forward.' 
         />
        
        <div className='flex flex-col md:grid grid-cols-2'>
            {services.map((service,idx)=>(
            <ServiceCard key={idx} service={service} index={idx} />
        ))}
        </div>

     </motion.div>
    </>
  )
}

export default Services