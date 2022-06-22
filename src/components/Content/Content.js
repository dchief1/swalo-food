import React from 'react'
import log1 from '../../assets/images/img1.png'
import log2 from '../../assets/images/img2.png'
import food from '../../assets/images/food.png'

const Content = () => {
  return (
    <div className='mb-2 max-w-full  bg-white' >
      <div className='lg:mt-[120px] md:mt-[60px] mt-[20px] grid place-items-center relative'>
        <img className='z-10  w-[148px] h-[62px] mr-[100px] md:mr-[150px]  lg:mr-[200px] md:w-[420px] md:h-[170px] lg:w-imgw lg:h-imgh absolute  ' src={log1} alt='screen' />
        <img className=' ml-[80px] md:ml-[120px]  lg:ml-[280px] w-[148px] h-[62px] md:w-[420px] md:h-[170px]  lg:w-imgw lg:h-imgh absolute mt-[28px] md:mt-[90px] lg:mt-[150px] ' src={log2} alt='screen' />
      </div>

      <div className='lg:pt-72 md:pt-20 pt-12  lg:ml-8'>
        <img src={food} alt='food' className='lg:w-[80px] md:w-[50px] w-[20px] h-[19px] md:h-[49px] lg:h-[79px] ml-16 md:ml-20 lg:ml-28 mb-4 lg:top-8' />
        <img src={food} alt='food' className='lg:w-[60px] md:w-[30px] w-[10px] h-[9] md:h-[29px] lg:h-[59px] ml-28 md:ml-44 lg:ml-60' />
        <img src={food} alt='food' className='lg:w-[100px] md:w-[80px] w-[30px] h-[29px] md:h-[79px] ml-4 lg:h-[99px] ' />
      </div>

      <div className='grid place-items-center -mx-28 md:mx-20 md:-mt-16 lg:-mt-32'>
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