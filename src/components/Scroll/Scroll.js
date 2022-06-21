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
        <div id='slider' className='flex items-center mx-12 gap-4 md:mx-20 mt-12 justify-between overflow-x-scroll
        scroll whitespace-nowrap scrollbar-hide w-[300px] md:w-[1120px] md:scroll-hidden scroll-smooth'>

          <div className='bg-white w-72 h-ic-fd mb-20 cursor-pointer rounded-md shadow-xl'>
                <FcLike className=' ml-60 mr-4 mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 my-8'>
              <span className=''>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
         </div>

          <div className='bg-white h-ic-fd w-72 mb-20 cursor-pointer rounded-md shadow-xl'>
                <FcLike className=' ml-60 mr-4 mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
          </div>

          <div className='bg-white w-72 h-ic-fd cursor-pointer mb-20 rounded-md shadow-xl'>
                <FcLike className=' ml-60 mr-4 mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between  items-center text-hero-head mx-4 my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
          </div>

        </div>
      {/**<<<<<<<<<<<<<<<< End of First Card Section <<<<<<<<<<<<<<<<<<< */}

      {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Section Begins <<<<<<<<<<<<<<<<< */}
      <div className='flex items-center md:mx-20 gap-4 mx-12 justify-between overflow-x-scroll
      scroll whitespace-nowrap w-[300px] scrollbar-hide md:w-[1120px] scroll-smooth'>

          <div className='bg-white w-72 h-ic-fd cursor-pointer mb-20 rounded-md shadow-xl'>
                <FcLike className=' ml-60 mr-4 mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
         </div>

          <div className='bg-white w-72 h-ic-fd cursor-pointer mb-20 rounded-md shadow-xl'>
                <FcLike className=' ml-60 mr-4 mt-4' />
                <img className='mx-auto h-40 w-40 ' src={food} alt='love icon' />

            <div className='flex justify-between items-center text-hero-head mx-4 my-8'>
              <span>Chicken Waffles 
              <br />Special Treat Meals  </span>
              <span>N50</span>
            </div>
          </div>

          <div className='bg-white border-4 w-72 h-ic-fd cursor-pointer border-yell-brd grid place-items-center mb-20 rounded-md '>
                <span className='text-orange mx-20 mt-6 text-2xl'>place your
                  <br/>Order Now
                </span>
                <img src={arrow} alt='arrow' />
          </div>

        </div>
        
    </div>
  )
}

export default Scroll