import React from 'react'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'

const Card = () => {
  return (
    <div className='max-w-screen mt-16 -mb-20'>
        <span className='md:text-3xl  text-hero-head font-medium md:ml-16'>
             Lets Collaborate, It works!
        </span>

        <div className='flex justify-between mx-28 items-center mt-20'>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< First Card Begins >>>>>>>>>>>>>>>>>>>>>>> */}
            <div className='bg-white w-72 md:h-96 rounded-2xl grid place-items-center'>
                <img src={card1} alt='card' className='w-68 h-44 mt-2' />
                <h1 className='text-black md:text-lg md:w-60 mt-2 font-semibold'>
                    Are  you a Chef or Caterer?
                </h1>
                <p className='text-hero-hd font-medium md:text-xs md:w-60 mt-2'>
                    Do you think you have what it takes to join
                    our team of cullinary professionals  in preparing  tasty and spicy meals for our customers? Reach 
                    out to us for economic opportunities that can
                    boost your income.
                </p>
                <button className='md:ml-40 p-2 mt-8 rounded-br-lg bg-yell-brd md:w-32'>Join us Now</button>
            </div>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< First Card Ends >>>>>>>>>>>>>>>>>>>>>>> */}
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Begins >>>>>>>>>>>>>>>>>>>>>>> */}
            <div className='bg-white w-72 md:h-96 rounded-2xl grid place-items-center'>
                <img src={card2} alt='card' className='w-68 h-44 mt-2' />
                <h1 className='text-black md:text-lg md:w-60 mt-2 font-semibold'>
                    Are you a Rider or a Bike  Hailing Company? 
                </h1>
                <p className='text-hero-hd font-medium md:text-xs md:w-60 mt-2'>
                    Do you think you have what it takes to join
                    our team of cullinary professionals  in preparing  tasty and spicy meals for our customers? Reach 
                    out to us for economic opportunities that can
                    boost your income.
                </p>
                <button className='md:ml-40 p-2 mt-2 rounded-br-lg bg-yell-brd md:w-32'>Join us Now</button>
            </div>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Ends >>>>>>>>>>>>>>>>>>>>>>> */}
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Third Card Begins >>>>>>>>>>>>>>>>>>>>>>> */}
            <div className='bg-white w-72 md:h-96 rounded-2xl grid place-items-center'>
                <img src={card3} alt='card' className='w-68 h-44 mt-2' />
                <h1 className='text-black md:text-lg md:w-60 mt-2 font-semibold'>
                    Monetize your Kitchens with Swalo Eats?
                </h1>
                <p className='text-hero-hd font-medium md:text-xs md:w-60 mt-2'>
                    Do you think you have what it takes to join
                    our team of cullinary professionals  in preparing  tasty and spicy meals for our customers? Reach 
                    out to us for economic opportunities that can
                    boost your income.
                </p>
                <button className='md:ml-40 p-2 mt-2 rounded-br-lg bg-yell-brd md:w-32'>Join us Now</button>
            </div>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Third Card Ends >>>>>>>>>>>>>>>>>>>>>>> */}

        </div>

    </div>
  )
}

export default Card