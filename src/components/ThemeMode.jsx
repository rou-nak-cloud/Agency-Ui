import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeMode = ({theme,setTheme}) => {
    // for selecting already selected theme from user device
    useEffect(()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    },[])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])

  return (
    <>
     <button className='cursor-pointer'>
        {theme === "dark" ? (
            <img onClick={()=>setTheme('light')} src={assets.sun_icon} alt="sun" className='w-8 p-1.5 border border-gray-600 rounded-full' />
        ) : (
            <img onClick={()=>setTheme('dark')} src={assets.moon_icon} alt="moon" className='w-8 p-1.5 border border-gray-600 rounded-full'/>
        )}
     </button>
    </>
  )
}

export default ThemeMode