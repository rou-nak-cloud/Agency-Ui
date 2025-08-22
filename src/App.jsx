import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import Work from './components/Work'
import Teams from './components/Teams'
import Contact from './components/Contact'

import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  const dotRef =  useRef(null)
  const outerRingRef =  useRef(null)

  // Refs for custom cursor position tracking
  const mouse = useRef({x:0,y:0}) // actual mouse position (instant)
  const position = useRef({x:0,y:0}) //a lagged/smooth position

  useEffect(()=>{
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)
    // smoothing / lag effect:
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.05
      position.current.y += (mouse.current.y - position.current.y) * 0.05

      if(dotRef.current && outerRingRef.current){
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outerRingRef.current.style.transform = `translate3d(${position.current.x - 10}px, ${position.current.y - 10}px, 0)`
      }
      requestAnimationFrame(animate) //creates a loop using requestAnimationFrame (optimized for 60fps).
    }
    animate()

    return ()=> {
      document.removeEventListener('mousemove', handleMouseMove) //Cleanup
    }
  },[])

  return (
    <>
      <div className='dark:bg-black/95 relative'>
      <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <TrustedBy />
        <Services />
        <Work />
        <Teams />
        <Contact />
        <Footer theme={theme} />

        {/* Mouse move animation */}
          {/* custom curser outer ring */}
          <div ref={outerRingRef} className='fixed top-0 left-0 w-5 h-5 rounded-full border border-primary pointer-events-none z-[9999]'></div>

          {/* custom cursor dot */}
          <div ref={dotRef} className='fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999]'></div>
      </div>
    </>
  )
}

export default App
