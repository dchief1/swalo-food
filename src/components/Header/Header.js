import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Header/Header.css'

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
    <div className='grid place-items-center h-full max-w-screen bg-lightbg '>
        <Navbar />

        <div className='font-bold text-hero-head md:text-6xl md:leading-lh'>
          {
          show===0&& <h1 >Order your Meal from 
          <br/> the <span className='bg-yell-brd'>Cloud in 30</span>mins</h1> 
          }
          {
          show===1&& <h1 >Enjoy delicious and 
          <br/> spicy <span className='spin-text bg-yell-brd'></span> <span className='bulk'>in bulk</span> </h1> 
          }
          {
          show===2&& <h1 >Automated bulk lunch meals
          <br /> for employee and business</h1> 
          }

        </div>

        <span className='mb-8 text-hero-prg'>
          Nigeria's leading Cloud based Kitchen powered by Technology
          <br />Get your Special Meal Treat in 24hours for "The Special One"
        </span>

        <button className="border p-3 rounded-md w-52 bg-orange mt-6 mb-40  text-white">Place your order</button>
        
    </div>
  )
}

export default Header