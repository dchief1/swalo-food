import React from 'react'
import log1 from '../../assets/images/img1.png'
import log2 from '../../assets/images/img2.png'
import food from '../../assets/images/food.png'

const Content = () => {
  return (
    <div className='mb-2 max-w-screen bg-white' >
      <div className='md:-mt-20 mx-auto relative'>
        <img className='z-40 md:ml-64 w-44 h-20 md:w-imgw md:h-imgh absolute  ' src={log1} alt='screen' />
        <img className=' z-10 md:ml-96 w-44 h-20 md:w-imgw md:h-imgh absolute mt-20 ' src={log2} alt='screen' />
      </div>

      <div className='md:pt-72  ml-8'>
        <img src={food} alt='food' className='md:w-aw1 md:h-ah1 md:ml-28 mb-8 top-8' />
        <img src={food} alt='food' className='md:w-aw2 md:h-ah2 md:ml-60' />
        <img src={food} alt='food' className='md:w-aw md:h-ah ' />
      </div>

      <div className='grid place-items-center  -mt-32'>
        <h1 className='text-2xl font-semibold text-sec-parg'>why swallow Eats?</h1>
        <span className='border-2 mt-2 border-orange w-brdw '></span>
        <p className='w-txtw h-txth text-center text-hero-head mt-6'>We are a Kitchen-as-a-Service company helping you
        get quality and premium homemade meal from our chains 
        of kitchens and proffesional Chefs hereby meeting your taste 
        request and guarantee your happiness. 
        </p>
      </div>
        
    </div>
  )
}

export default Content