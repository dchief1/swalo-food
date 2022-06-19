import React from 'react'
import food from '../../assets/images/food.png'
import arrow from '../../assets/images/arrow.png'
import { FcLike } from "react-icons/fc";

const Scroll = () => {
  return (
    <div className='max-w-screen  h-full mt-16'>
        
          <span className='text-hero-head md:text-2xl  font-medium md:ml-20'>
          Fastest selling Meals on Swalo Eats this Month</span>

      {/*<<<<<<<<<<<<< First Card Section <<<<<<<<<<<<<<<<<<<<*/}
        <div className='flex items-center mx-40 mt-12 justify-between'>

          <div className='bg-white w-72 h-ic-fd mb-20 rounded-md shadow-xl'>
                <FcLike className=' md:ml-60 md:mr-4 md:mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 md:my-8'>
              <span className=''>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
         </div>

          <div className='bg-white h-ic-fd w-72 mb-20 rounded-md shadow-xl'>
                <FcLike className=' md:ml-60 md:mr-4 md:mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 md:my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
          </div>

          <div className='bg-white w-72 h-ic-fd  mb-20 rounded-md shadow-xl'>
                <FcLike className=' md:ml-60 md:mr-4 md:mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 md:my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
          </div>

        </div>
      {/**<<<<<<<<<<<<<<<< End of First Card Section <<<<<<<<<<<<<<<<<<< */}

      {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Section Begins <<<<<<<<<<<<<<<<< */}
      <div className='flex items-center mx-40  justify-between'>

          <div className='bg-white w-72 h-ic-fd  mb-20 rounded-md shadow-xl'>
                <FcLike className=' md:ml-60 md:mr-4 md:mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 md:my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
         </div>

          <div className='bg-white w-72 h-ic-fd  mb-20 rounded-md shadow-xl'>
                <FcLike className=' md:ml-60 md:mr-4 md:mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 md:my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
          </div>

          <div className='bg-white border-4 w-72 h-ic-fd border-yell-brd grid place-items-center mb-20 rounded-md '>
                <span className='text-orange mt-6 text-2xl'>place your
                  <br/>Order Now
                </span>
                <img src={arrow} alt='arrow' />
          </div>

        </div>
        
    </div>
  )
}

export default Scroll