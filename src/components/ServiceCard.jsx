import React, { useRef, useState } from 'react'

const ServiceCard = ({service,index}) => {
    const [position, setPosition] = useState({x:0, y:0})
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)
    const handleMouseMove = (e) =>{
      const bounds = divRef.current.getBoundingClientRect();
      setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
      // bounds.left → the X position where your element starts (its left edge).
      // bounds.top → the Y position where your element starts (its top edge).
      // e.clientX - bounds.left = mouse’s X inside the element (not the full page, but relative to the div). and same goes for Y.
    }
    
  return (
    <>
     <div className='max-w-lg m-2 sm:m-4 rounded-3xl border border-gray-300 dark:border-gray-800 shadow-lg shadow-gray-300 dark:shadow-gray-800 relative overflow-hidden' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove} >

      {/* this self closing div is only for hovering light effect */}
        <div className={`w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-2xl absolute z-0 pointer-events-none transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} style={{top:position.y - 150, left:position.x - 150}} 
        //  style={{ top: position.y - 150, left: position.x - 150 }} centers the element around the cursor rather than attaching its corner.
        />

            <div className='flex items-center gap-8 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[20px] bg-white dark:bg-gray-900 z-10 relative'>
                <div className='bg-gray-200 dark:bg-gray-400/90 rounded-full'>
                    <img src={service.icon} alt="serviceIcon" className='max-w-20 bg-white/60 dark:bg-gray-900 rounded-full m-0.5' />
                </div>
                <div className='flex-1'>
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-3'>{service.desc}</p>
                </div>
            </div>
     </div>
    </>
  )
}

export default ServiceCard