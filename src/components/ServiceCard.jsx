import React from 'react'

const ServiceCard = ({service,index}) => {
  return (
    <>
     <div className='max-w-lg m-2 sm:m-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-2xl shadow-gray-200 dark:shadow-white/20 relative overflow-hidden'>
        <div className='w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 blur-2xl absolute z-0 pointer-events-none transition-opacity duration-500 mix-blend-lighten opacity-70'>
            <div className='flex items-center gap-8 p-8 hover:p-7 hover:m-0.5 transition-all rounded-[20px] bg-white dark:bg-gray-900 z-10 relative'>
                <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
                    <img src={service.icon} alt="serviceIcon" />
                </div>
                <div className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-3'>{service.desc}</p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default ServiceCard