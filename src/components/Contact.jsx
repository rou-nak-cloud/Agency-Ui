import React from 'react'
import ServiceTitle from './ServiceTitle'
import assets from '../assets/assets'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-30 text-gray-700 dark:text-gray-200'>
        <ServiceTitle title='Reach out to us' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <form action="#" className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Name</p>
                <div className='flex gap-2 p-3 rounded-lg border border-gray-400 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="person"  className='' />
                    <input type="text" placeholder='Enter your name' className='w-full text-sm outline-none' required />
                </div>
            </div>

             <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex gap-2 p-3 rounded-lg border border-gray-400 dark:border-gray-600'>
                    <img src={assets.email_icon} alt="email"  className='' />
                    <input type="email" placeholder='Enter your email' className='w-full text-sm outline-none' required />
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-400 dark:border-gray-700' />
            </div>

            <div className='col-span-2 flex justify-center'>
                <button type='submit' className='max-sm:w-max flex items-center justify-center max-sm:m-auto gap-2 bg-primary text-white/90 text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all '>
                    Submit <img src={assets.arrow_icon} alt="submitArrow" className='w-4' />
                </button>
            </div>
        </form>
    </div>
  )
}

export default Contact