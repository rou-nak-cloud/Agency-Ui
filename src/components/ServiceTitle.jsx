import React from 'react'

const ServiceTitle = ({title,desc}) => {
  return (
    <>
     <div>
        <h1 className='text-3xl sm:text-5xl font-medium text-center'>{title}</h1>
        <p className='text-center text-gray-500 dark:text-white/70 max-w-xl p-1 sm:mt-5'>{desc}</p>
     </div>
    </>
  )
}

export default ServiceTitle