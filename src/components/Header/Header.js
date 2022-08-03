import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Header/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [ show, setShow] = useState(0)
 

  useEffect(() => {
     setTimeout(() => {
       if(show===2) {
         setShow(0)
       }
     else if (show<= 3) {
        setShow(show+1)
        
      } 
      // setShow(show+1)
    }, 6000);
    // return () => clearTimeout(timer);
  }, [show]);
  

  return (
    <div className='grid place-items-center h-full max-w-full bg-lightbg '>
        <Navbar />

        <div className='font-bold text-hero-head text-[27px] leading-[50px] lg:text-6xl md:leading-[50px] md:text-3xl lg:leading-lh'>
          {
          show===0&& <h1 >Order Your Meal From 
          <br/> The <span className='bg-yell-brd'>Cloud In 30</span>mins</h1> 
          }
          {
          show===1&& <h1 >Enjoy Delicious And 
          <br/> Spicy <span className='spin-text bg-yell-brd'></span> in bulk </h1> 
          }
          {
          show===2&& <h1 className='text-[22px] leading-[50px] lg:text-6xl md:leading-[50px] md:text-3xl lg:leading-lh'> <span className='play bg-yell-brd'></span>
          <br /> For Employees & Businesses</h1> 
          }

        </div>

        <span className='mb-8 text-sm w-[260px]  md:text-xl mt-2 md:mt-0 md:w-[520px] lg-w-[800px] text-center text-hero-prg'>
          Nigeria's leading Cloud based Kitchen powered by Technology
        </span>

        <div className='md:flex hidden justify-between items-center gap-16'>
          <a href='https://swaloeats.africa.restaurant/' >
            <button className="border p-3 rounded-md w-40 lg:w-52 bg-orange mt-4 lg:mt-6 md:mb-40 mb-16 text-white">Place your order</button>
          </a>
          <button className="border p-3 rounded-md w-40 lg:w-52 bg-orange mt-4 lg:mt-6 md:mb-40 mb-16 text-white">Request A Demo</button>
        </div>
        
        <a href='https://swaloeats.africa.restaurant/' >
          <button className="border md:hidden p-3 rounded-md w-40 lg:w-52 bg-orange mt-4 lg:mt-6 md:mb-40 mb-16 text-white">Place your order</button>
        </a>
        
    </div>
  )
}

export default Header