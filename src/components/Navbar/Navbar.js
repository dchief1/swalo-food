import React, { useState } from 'react'
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom'
import swalo from '../../assets/images/swalo.png'

const Navbar = () => {
    
    const [active, setActive] = useState(false)
    const showMenu = () => {
      setActive(!active)
    }

  return (
    <div > 

    
    
    <nav className=' px-4 py-4  md:grid md:place-items-center text-2xl text-gray-600'>
      <img className='cursor-pointer w-44 md:w-72' src={swalo} alt='screen' />
      <ul className='md:flex md:items-center md:pb-0 cursor-pointer absolute  md:static  md:pl-0 hidden gap-20 md:my-0  md:ml-8 '>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Home</Link></li>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Swalo Eats For Business</Link></li>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Food Routine</Link></li>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><a href='https://swaloeats.africa.restaurant/'>Login</a></li>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Pricing</Link></li>
      </ul>

      <div onClick={showMenu} className='text-3xl absolute block right-8 top-6 cursor-pointer md:hidden'>
        {active ? <CgClose /> : <CgMenuLeft />}
      </div>

    <div className={active ? 'fixed left-0 top-0 w-full z-50 h-full bg-[#ffffff]' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <img className='cursor-pointer w-44 mx-auto' src={swalo} alt='screen' />
      <ul className='p-4 '>
        <li className='pb-4 border-b border-orange'><Link to='/'>Home</Link></li>
        <li className='pb-4 border-b border-orange'><Link to='/'>Swalo Eats For Business</Link></li>
        <li className='pb-4 border-b border-orange'><Link to='/'>Food Routine</Link></li>
        <li className='pb-4 border-b border-orange'><Link to='/'>Login</Link></li>
        <li className='pb-4 '><Link to='/'>Pricing</Link></li>
        <button className="border p-3 rounded-md w-60 lg:w-52 bg-orange mt-4  mb-16 text-white">Request A Demo</button>
      </ul>

      <div onClick={showMenu} className='text-3xl absolute block right-8 top-6 cursor-pointer md:hidden'>
        {active ? <CgClose /> : <CgMenuLeft />}
      </div>
    </div>
      
    </nav> 
    

    </div>
  )
}

export default Navbar