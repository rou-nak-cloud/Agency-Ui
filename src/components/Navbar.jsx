import React, { useState } from 'react'
import assets from '../assets/assets'

const Navbar = ({ theme, setTheme, }) => {
    const [menuClose, setMenuClose] = useState(false)
    const menus = [
        { name: "Home", link: "#" },
        { name: "Services", link: "#services" },
        { name: "Our Work", link: "#our-work" },
        { name: "Contact Us", link: "#contact" },
    ];
  return (
    <>
     <div className='flex items-center justify-between p-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white-900/80 dark:bg-900/70'>
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="companyLogo" className='w-32 sm:w-40' />

        <div className={`text-gray-700 dark:text-white/90 sm:text-sm ${!menuClose ? `max-sm:w-0 overflow-hidden` : `max-sm:w-55 max-sm:pl-12`} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:items-start max-sm:bg-primary/60 max-sm:text-white max-sm:pt-20 flex items-center gap-5 transition-all`}>
        <img src={assets.close_icon} onClick={()=>setMenuClose(false)} alt="closeMenu" className='w-4  absolute top-5 right-5 sm:hidden' />
            {menus.map((menu,idx) => (
                <li key={idx} className='sm:hover:border-b cursor-pointer list-none'>
                    <a href={menu.link}>{menu.name}</a>
                </li>
            ))}
        </div>

        <div className='flex items-center gap-2 sm:gap-4'>
            {!menuClose && (
                <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="menuIcon" className='w-6 sm:hidden' onClick={()=>setMenuClose(true)} />)
            }
            <a href="#contact" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary/90 hover:bg-primary/80 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>Connect
                <img src={assets.arrow_icon} alt="arrow" width={13} />
            </a>
        </div>

     </div> 
    </>
  )
}

export default Navbar
