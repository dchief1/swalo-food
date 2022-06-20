import React from 'react'
import log1 from '../../assets/images/img1.png'
import log2 from '../../assets/images/img2.png'
import food from '../../assets/images/food.png'

const Content = () => {
  return (
    <div className='mb-2 max-w-screen bg-white' >
      <div className='md:-mt-20 -mt-16 mx-auto relative'>
        <img className='z-10 ml-12 md:ml-64 w-52 h-28 md:w-imgw md:h-imgh absolute  ' src={log1} alt='screen' />
        <img className=' ml-28 md:ml-96 w-52 h-28 md:w-imgw md:h-imgh absolute mt-8 md:mt-20 ' src={log2} alt='screen' />
      </div>

      <div className='md:pt-72 pt-24  md:ml-8'>
        <img src={food} alt='food' className='md:w-[80px] w-[30px] h-[29px] md:h-[79px] ml-12 md:ml-28 mb-8 md:top-8' />
        <img src={food} alt='food' className='md:w-[60px] w-[20px] h-[19] md:h-[59px] ml-24 md:ml-60' />
        <img src={food} alt='food' className='md:w-[100px] w-[50px] h-[49px] ml-2 md:h-[99px] ' />
      </div>

      <div className='grid place-items-center  md:-mt-32'>
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