import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  const [ show, setShow] = useState(0)
 

  useEffect(() => {
     setTimeout(() => {
       if(show===3) {
         setShow(0)
       }
     else if (show<= 3) {
        setShow(show+1)
        
      } 
      // setShow(show+1)
    }, 4000);
    // return () => clearTimeout(timer);
  }, [show]);
  

  return (
    <div className='grid place-items-center h-screen w-full bg-orange-50 bg-cover'>
        <Navbar />

        <div className='font-bold md:text-6xl md:leading-lh'>
          {
          show===0&& <h1 >Order your Meal from 
          <br/> the <span className='bg-yellow-200'>Cloud in 30</span>mins</h1> 
          }
          {
          show===1&& <h1 >Let's check this </h1> 
          }
          {
          show===2&& <h1 >call me</h1> 
          }
          {
          show===3&& <h1 >we can be friends</h1> 
          }

        </div>

        <span>
          Nigeria's leading Cloud based Kitchen powered by Technology 
          <br />Enjoy Delicious and spicy African Soups in Bulk
        </span>
        
        <div className='font-bold md:text-6xl md:leading-lh'>
          {
          show===0&& <h1 >Order your Meal from 
          <br/> the <span className='bg-yellow-200'>Cloud in 30</span>mins</h1> 
          }
          {
          show===1&& <h1 >Let's check this </h1> 
          }

        </div>

        <button className="border p-3 rounded-lg bg-orange-400   text-white">Place your order</button>
        
    </div>
  )
}

export default Header