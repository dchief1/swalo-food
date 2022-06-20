import React from 'react'
import log1 from '../../assets/images/img1.png'
import log2 from '../../assets/images/img2.png'
import food from '../../assets/images/food.png'

const Content = () => {
  return (
    <div className='mb-2 max-w-screen  bg-white' >
      <div className='md:-mt-20 -mt-16 mx-auto relative'>
        <img className='z-10 ml-[87px] md:ml-64 w-[148px] h-[62px] md:w-imgw md:h-imgh absolute  ' src={log1} alt='screen' />
        <img className=' ml-[137px] md:ml-96 w-[148px] h-[62px] md:w-imgw md:h-imgh absolute mt-4 md:mt-20 ' src={log2} alt='screen' />
      </div>

      <div className='md:pt-72 pt-12  md:ml-8'>
        <img src={food} alt='food' className='md:w-[80px] w-[20px] h-[19px] md:h-[79px] ml-16 md:ml-28 mb-4 md:top-8' />
        <img src={food} alt='food' className='md:w-[60px] w-[10px] h-[9] md:h-[59px] ml-28 md:ml-60' />
        <img src={food} alt='food' className='md:w-[100px] w-[30px] h-[29px] ml-4 md:h-[99px] ' />
      </div>

      <div className='grid place-items-center -mx-28 sm:mx-28 md:-mt-32'>
        <h1 className='md:text-2xl text-xl font-semibold text-sec-parg'>why swallow Eats?</h1>
        <span className='border-2 mt-2 border-orange w-brdw '></span>
        <p className='md:w-txtw w-[320px] md:h-txth text-center text-hero-head mt-6'>We are a Kitchen-as-a-Service company helping you
        get quality and premium homemade meal from our chains 
        of kitchens and proffesional Chefs hereby meeting your taste 
        request and guarantee your happiness. 
        </p>
      </div>
        
    </div>
  )
}

export default Content