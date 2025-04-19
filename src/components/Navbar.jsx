import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  //to prevent the website scrolling we use useeffect
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'   //it will disable the website scrolling
    }else{
      document.body.style.overflow = 'auto'     
    }
    // if mobile user open desktop view in that case we have to add one more code
    return ()=>{
      document.body.style.overflow = 'auto'     
    };
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10' >
      <div  className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'> 
        <img src={assets.logo} alt='' />

        <ul className='hidden md:flex gap-7 text-white' >   {/* we hid it bec it is not seen in small devices, its text is white so we add this nabar above the header */}
            <a href='#Header' className='cursor-pointer hover:text-gray-400' >Home</a>
            <a href='#Header' className='cursor-pointer hover:text-gray-400' >About</a>
            <a href='#Header' className='cursor-pointer hover:text-gray-400' >Projects</a>
            <a href='#Header' className='cursor-pointer hover:text-gray-400' >Testimonials</a>
        </ul>
        <button className='hidden  md:block bg-white px-8 py-2 rounded-full' >Sign up</button>
        <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt='' />       {/* it show the menu after click on the meny icon for mobile screen */}
      </div>

      {/* ---mobile menu--- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': `h-0 w-0` }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />      {/* on clicking the cross icon it hides the menu */}
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font medium'>
          <a onClick={()=>setShowMobileMenu(false)} href='#Header' className='px-4 py2 rounder-full inline-block' >Home</a>
          <a onClick={()=>setShowMobileMenu(false)} href='#About' className='px-4 py2 rounder-full inline-block' >About</a>
          <a onClick={()=>setShowMobileMenu(false)} href='#Projects' className='px-4 py2 rounder-full inline-block' >Projects </a>
          <a onClick={()=>setShowMobileMenu(false)} href='#Testimonails' className='px-4 py2 rounder-full inline-block' >Testimonails</a>
        </ul>
      </div>
    </div>
  )
}
   
export default Navbar
