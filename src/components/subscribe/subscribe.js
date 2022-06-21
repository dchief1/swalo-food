import React from 'react'
import fruit from '../../assets/images/fruit.jpg'
import vector1 from '../../assets/images/Vector1.png'
import vector2 from '../../assets/images/Vector2.png'
import vector3 from '../../assets/images/Vector3.png'
import vector4 from '../../assets/images/Vector4.png'
import vector2a from '../../assets/images/Vector2a.png'
import vector3a from '../../assets/images/Vector3a.png'

const suscribe = () => {
  return (
    <div className=' max-w-screen h-full bg-white'>

    <div className='relative'>
      <img src={fruit} alt='fruit' className='md:h-32 ml-[90px] md:ml-[277px] w-[325px] md:w-[540px] h-24 lg:w-imw lg:ml-fm absolute' />
      <div className='inset-0 absolute bg-gradient-to-r from-orange via-orange  to-light-orng w-screen h-24 md:w-full md:h-32'>
        <div className='flex justify-between items-center mx-4 lg:mx-12 my-4'>
          <span className='text-white   my-6 lg:mt-6 text-[10px] md:text-lg md:w-subw md:h-subh'>Subscribe to Swalo Eats Monthly FoodROUTINE 
           <br/>for as low as N35,000.00</span>
           <button className='border-4 p-2 mb-2 w-[130px] md:w-brdw1 md:mb-8 border-white rounded-lg text-white text-lg'>Subscribe</button>
        </div>
      </div>

      </div>

      <div className='flex-col lg:flex-row pt-52 pb-20 flex justify-between items-center mx-16'>
  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< First Card Begins >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className='bg-ic1bg p-3 w-64 h-ic-card mb-6 grid place-items-center rounded-md shadow-xl'>
          <img src={vector1} alt='vector' className='h-20  w-20' />
          <h1 className='font-bold text-ic1-text text-2xl'>Individuals</h1>
          <span className='font-medium md:mt-2 text-sm text-ic1-text text-center md:w-68'>Our team of Nutrionist will work with you
          to understand your diet with your budget
          to ensure you eat good meals daily, weekly 
          monthly
          </span>
          <button className="border p-2 mt-4 rounded-lg bg-ic1-text ml-4 w-48 text-white">Explore</button>
      </div>
  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< First Card Ends >>>>>>>>>>>>>>>>>>>>>>>>>> */}

  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Begins >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className='bg-ic2bg p-3 w-64 mb-6 h-ic-card grid place-items-center rounded-md shadow-xl'>
          <img src={vector2} alt='vector' className='h-20 w-20' />
          <h1 className='font-bold text-ic2-text text-2xl'>Family Plan</h1>
          <span className='font-medium md:mt-2 text-sm text-ic2-text text-center md:w-68'>
          We can deliver quality  homemade  meals to your 
          home based on schedule
          </span>
          <button className="border p-2 mt-4 rounded-lg bg-ic2-text ml-4 w-48 text-white">Explore</button>
      </div>
  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Ends >>>>>>>>>>>>>>>>>>>>>>>>>> */}

  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Third Card Begins >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className='bg-ic3bg p-3 mb-6 h-ic-card w-64 grid place-items-center rounded-md shadow-xl'>
          <img src={vector3} alt='vector' className='h-20 w-20' />
          <h1 className='font-bold text-ic3-text text-2xl'>Team or Couple </h1>
          <h1 className='font-bold text-ic3-text text-2xl'>Plans </h1>
          <span className='font-medium  text-xs text-ic3-text text-center md:w-68'>After an Ethic day, or a 5-9 Lagos work session,
          we understand how stress you could be making 
          bulky meals for family, loved onesat ackward hour.
           Swalo Eats Foodroutine helps you get your meal 
          </span>
          <button className="border p-2 mt-2 rounded-lg bg-ic3-text ml-4 w-48 text-white">Explore</button>
      </div>
  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Third Card Ends >>>>>>>>>>>>>>>>>>>>>>>>>> */}

  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fourth Card Begins >>>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className='bg-ic4bg mb-6 p-3 h-ic-card w-64 grid place-items-center rounded-md shadow-xl'>
          <img src={vector4} alt='vector' className='h-20 w-20' />
          <h1 className='font-bold text-ic4-text text-2xl'>Businesses</h1>
          <span className='font-medium md:mt-2 text-xs text-ic4-text text-center md:w-68'>
          Irrespective of your Business size or services,
          Swalo Eats can cater for your staffs and executives meals
          </span>
          <button className="border p-2 mt-4 rounded-lg bg-ic4-text ml-4 w-48 text-white">Explore</button>
      </div>
  {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Fourth Card Ends >>>>>>>>>>>>>>>>>>>>>>>>>> */}

      </div>

    </div>
  )
}

export default suscribe