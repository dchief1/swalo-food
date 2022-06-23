import React from 'react'
import log1 from '../../assets/images/img1.png'
import log2 from '../../assets/images/img2.png'
import food from '../../assets/images/food.png'
import arrow from '../../assets/images/arrow.png'
import { FcLike } from "react-icons/fc";
import fruit from '../../assets/images/fruit.jpg'
import vector1 from '../../assets/images/Vector1.png'
import vector2 from '../../assets/images/Vector2.png'
import vector3 from '../../assets/images/Vector3.png'
import vector4 from '../../assets/images/Vector4.png'
import card1 from '../../assets/images/card1.png'
import card2 from '../../assets/images/card2.png'
import card3 from '../../assets/images/card3.png'
import afri from '../../assets/images/afri.png';
import mavin from '../../assets/images/mavin.png';
import piggy from '../../assets/images/piggy.png';
import naija from '../../assets/images/naija.png';

const Content = () => {
  return (
    <div className='w-full bg-pagebg'>
    <div className='mb-2 bg-white' >
      <div className='lg:mt-[120px] md:mt-[60px] mt-[20px] grid place-items-center relative'>
        <img className='z-10  w-[148px] h-[62px] mr-[100px] md:mr-[150px]  lg:mr-[200px] md:w-[420px] md:h-[170px] lg:w-imgw lg:h-imgh absolute  ' src={log1} alt='screen' />
        <img className=' ml-[80px] md:ml-[120px]  lg:ml-[280px] w-[148px] h-[62px] md:w-[420px] md:h-[170px]  lg:w-imgw lg:h-imgh absolute mt-[28px] md:mt-[90px] lg:mt-[150px] ' src={log2} alt='screen' />
      </div>

      <div className='lg:pt-72 md:pt-20 pt-12  lg:ml-8'>
        <img src={food} alt='food' className='lg:w-[80px] md:w-[50px] w-[20px] h-[19px] md:h-[49px] lg:h-[79px] ml-16 md:ml-20 lg:ml-28 mb-4 lg:top-8' />
        <img src={food} alt='food' className='lg:w-[60px] md:w-[30px] w-[10px] h-[9] md:h-[29px] lg:h-[59px] ml-28 md:ml-44 lg:ml-60' />
        <img src={food} alt='food' className='lg:w-[100px] md:w-[80px] w-[30px] h-[29px] md:h-[79px] ml-4 lg:h-[99px] ' />
      </div>

      <div className='grid place-items-center  md:mx-20 md:-mt-16 lg:-mt-32'>
        <h1 className='md:text-2xl text-xl font-semibold text-sec-parg'>why swallow Eats?</h1>
        <span className='border-2 mt-2 border-orange w-brdw '></span>
        <p className='md:w-txtw w-[320px] md:h-txth text-center text-hero-head mt-6'>We are a Kitchen-as-a-Service company helping you
        get quality and premium homemade meal from our chains 
        of kitchens and proffesional Chefs hereby meeting your taste 
        request and guarantee your happiness. 
        </p>
      </div>
        
     </div>
  {/**<<<<<<<<<<<<<<<<< Scroll Cards >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */} 
     <div className=' '>
        
     <span className='text-hero-head flex  text-center text-2xl md:text-3xl font-medium md:ml-20'>
     Fastest selling Meals on Swalo Eats this Month</span>

 {/*<<<<<<<<<<<<< First Card Section <<<<<<<<<<<<<<<<<<<<*/}
   <div id='slider' className='flex items-center mx-auto gap-4 lg:mx-20 mt-12 justify-between overflow-x-scroll
   scroll whitespace-nowrap scrollbar-hide w-[300px] sm:w-[600px] md:w-[700px] lg:w-[1120px] lg:scroll-hidden scroll-smooth'>

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
 <div className='flex items-center lg:mx-20 gap-4 mx-auto justify-between overflow-x-scroll
 scroll whitespace-nowrap w-[300px] sm:w-[600px] md:w-[700px] lg:scroll-hidden scrollbar-hide lg:w-[1120px] scroll-smooth'>

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
{/**<<<<<<<<<<<<<<<<<<<<<<<<<<< Scroll Cards End >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

 {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Subscribe Card  >>>>>>>>>>>>>>>>>>>>>>>>> */}
<div className=' h-full bg-white'>

<div className='relative'>
  <img src={fruit} alt='fruit' className='md:h-32  md:ml-[277px] w-screen md:w-[540px] h-24 lg:w-imw lg:ml-fm absolute' />
  <div className='inset-0 absolute bg-gradient-to-r from-orange via-orange  to-light-orng max-w-screen h-24 md:w-full md:h-32'>
    <div className='flex justify-between items-center mx-4 lg:mx-12 my-4'>
      <span className='text-white   my-auto lg:mt-6 text-[10px] md:text-lg md:w-subw md:h-subh'>Subscribe to Swalo Eats Monthly FoodROUTINE 
       <br/>for as low as N35,000.00</span>
       <button className='border-4 p-2 mt-2 w-[130px] md:w-brdw1 md:mb-8 border-white rounded-lg text-white text-lg'>Subscribe</button>
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
 {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Subscribe Card Ends >>>>>>>>>>>>>>>>>>>>>>>>> */}

</div>

        {/**<<<<<<<<<<<<<<<<<<<<<<< Main Card >>>>>>>>>>>>>>>>>>>>>>>>> */}
        <div className='  mt-16 -mb-20'>
        <span className='md:text-3xl text-2xl mx-8 text-hero-head font-medium md:ml-16'>
             Lets Collaborate, It works!
        </span>

        <div className='flex flex-col lg:flex-row  justify-between md:mx-28 items-center mt-20'>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< First Card Begins >>>>>>>>>>>>>>>>>>>>>>> */}
            <div className='bg-white w-72 h-96 mb-6 rounded-2xl grid place-items-center'>
                <img src={card1} alt='card' className='w-68 h-44 mt-2' />
                <h1 className='text-black text-lg w-60 mt-2 font-semibold'>
                    Are  you a Chef or Caterer?
                </h1>
                <p className='text-hero-hd font-medium text-xs w-60 mt-2'>
                    Do you think you have what it takes to join
                    our team of cullinary professionals  in preparing  tasty and spicy meals for our customers? Reach 
                    out to us for economic opportunities that can
                    boost your income.
                </p>
                <button className='ml-40 p-2 mt-8 rounded-br-lg bg-yell-brd w-32'>Join us Now</button>
            </div>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< First Card Ends >>>>>>>>>>>>>>>>>>>>>>> */}

        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Begins >>>>>>>>>>>>>>>>>>>>>>> */}
            <div className='bg-white w-72 h-96 rounded-2xl mb-6 grid place-items-center'>
                <img src={card2} alt='card' className='w-68 h-44 mt-2' />
                <h1 className='text-black text-lg w-60 mt-2 font-semibold'>
                    Are you a Rider or a Bike  Hailing Company? 
                </h1>
                <p className='text-hero-hd font-medium text-xs w-60 mt-2'>
                    Do you think you have what it takes to join
                    our team of cullinary professionals  in preparing  tasty and spicy meals for our customers? Reach 
                    out to us for economic opportunities that can
                    boost your income.
                </p>
                <button className='ml-40 p-2 mt-2 rounded-br-lg bg-yell-brd w-32'>Join us Now</button>
            </div>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Second Card Ends >>>>>>>>>>>>>>>>>>>>>>> */}

        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Third Card Begins >>>>>>>>>>>>>>>>>>>>>>> */}
            <div className='bg-white  w-72 h-96 rounded-2xl grid place-items-center'>
                <img src={card3} alt='card' className='w-68 h-44 mt-2' />
                <h1 className='text-black text-lg w-60 mt-2 font-semibold'>
                    Monetize your Kitchens with Swalo Eats?
                </h1>
                <p className='text-hero-hd font-medium text-xs w-60 mt-2'>
                    Do you think you have what it takes to join
                    our team of cullinary professionals  in preparing  tasty and spicy meals for our customers? Reach 
                    out to us for economic opportunities that can
                    boost your income.
                </p>
                <button className='ml-40 p-2 mt-2 rounded-br-lg bg-yell-brd w-32'>Join us Now</button>
            </div>
        {/**<<<<<<<<<<<<<<<<<<<<<<<<<< Third Card Ends >>>>>>>>>>>>>>>>>>>>>>> */}

        </div>
     {/**<<<<<<<<<<<<<<<<<<<<<<<<<<< Main Card Ends >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

    </div>

    {/**<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Customers >>>>>>>>>>>>>>>>>>>>>>>>>> */}
    <div className="bg-white   mt-44 ">
                    <div className=" grid place-items-center ">
                        <h1 className="font-bold text-hero-hd pt-12 sm:w-[260px]  mx-8 text-2xl md:text-3xl 
                        mt-16 text-center md:w-mdw">Our Top Customers Work In:</h1>
                    </div>

                    <div className="flex gap-8 flex-col md:flex-col items-center lg:flex-row justify-between px-20 md:px-8 py-16">

                            <img className='w-52 md:w-60 md:h-20' src={afri} alt='screen' />
                            <img className='w-52 md:w-32 md:h-24' src={mavin} alt='screen' />
                            <img className='w-52 md:w-60 md:h-20' src={piggy} alt='screen' />
                            <img className='w-52 md:w-72 md:h-20' src={naija} alt='screen' />
                       

                    </div>
                </div>

                {/** second part */}
                <div className="py-16  mx-4 md:mx-6 lg:px-32">

                    <h1 className="text-orange text-center font-bold text-xl md:text-3xl mb-4">Explore delivery in Lagos</h1>

                 
                    <div className="flex justify-center mb-6">
                    <input
                    onChange=''
                    id="search"
                    name="search"
                    type="search"
                    autoComplete="email"
                    required 
                    className='md:w-5/6 w-[380px] max-w-screen outline-none h-8 md:h-10 lg:ml-4 p-6 border rounded-lg'
                    placeholder="search anywhere in lagos"
                />

                <button className="border hidden md:block px-16 ml-8 p-3 rounded-lg bg-orange  text-white">Explore</button>
             </div>

             <button className="border md:hidden flex justify-center mx-auto p-3 rounded-lg bg-orange w-[220px]   text-white">Explore</button>

                  <div className='md:flex justify-between md:text-[10px] lg:text-[15px] hidden md:mx-32 mb-2'>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">lekki</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">Ikeja</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">Egbeda</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">victoria island</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">lagos island</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">yaba</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">surulere</p>
                  </div>

                  <div className='md:flex hidden justify-between md:text-[10px] lg:text-[15px] md:mx-32 mb-2'>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">MaryLand</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Festac</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Apapa</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Ojo</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Shomolu</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Iganda</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">command</p>
                </div>

                <div className="md:flex hidden md:text-[10px] lg:text-[15px] md:mx-32">
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Ajah</p>
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Sangotedo</p>
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Ikotun</p>
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Abule Egba</p>

                </div>

                </div>

    </div>
  )
}

export default Content