import React from 'react'
import assets from '../assets/assets'
import {motion} from 'motion/react'

const Footer = ({theme}) => {
  const footerLinks = [
  { name: "Home", link: "#home" },
  { name: "Services", link: "#services" },
  { name: "Our Work", link: "#our-work" },
  { name: "Contact Us", link: "#contact" },
];
  return (
    <>
     <motion.div
     initial={{opacity:0,y:50}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.6,delay:0.2}}
     viewport={{once:true}}
     className='bg-slate-100 dark:bg-gray-900 pt-5 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-12 lg:px-24 xl:px-40'>
        {/* Footer top */}
        <div className='flex justify-between sm:items-center max-md:flex-col gap-10'>
            <motion.div
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.3}}
            viewport={{once:true}}
            className='space-y-4 text-sm text-gray-700 dark:text-gray-300'>
              <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="footerLogo" className='w-32 sm:w-42' />
              <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>
              <ul className='flex gap-8'>
                {footerLinks.map((link,idx)=>(
                  <li>
                    <a href={link.link} className='hover:text-primary'>{link.name}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
            initial={{opacity:0,x:30}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.5,delay:0.3}}
            viewport={{once:true}}
            className='text-gray-600 dark:text-gray-400'>
              <h3 className='font-semibold'><span className='text-xl font-bold bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Subscribe</span> to our newsletter</h3>
              <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className='flex gap-2 text-sm'>
                <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline-none rounded-lg dark:text-gray-200 bg-transparent border border-blue-300 dark:border-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500' />
                <button className='bg-primary text-white rounded-lg px-6 cursor-pointer hover:bg-primary/90 transition-all delay-100 sm:hover:scale-101'>Subscribe</button>
              </div>
            </motion.div>
        </div>
        <hr className='border-gray-300 dark:border-gray-600 my-6' />
        {/* Footer bottom */}
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:0.4}}
          viewport={{once:true}}
          className='pb-6 text-sm text-gray-500 flex justify-center items-center sm:justify-between gap-4 flex-wrap'>
                <p className='max-sm:text-center text-xs text-gray-400 dark:text-gray-500'>Copyright 2025 © agency.ai | rounak  -  All Right Reserved.</p>
                <div className='flex items-center justify-between gap-4'>
                  <img src={assets.facebook_icon} alt="facebook" />
                  <img src={assets.twitter_icon} alt="twitter" />
                  <img src={assets.instagram_icon} alt="instagram" />
                  <img src={assets.linkedin_icon} alt="linkedIn" />
                </div>
          </motion.div>
     </motion.div>
    </>
  )
}

export default Footer