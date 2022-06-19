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

    
    
    <nav className='max-w-96 px-4 py-4 w-full md:grid md:place-items-center text-2xl text-gray-600'>
      <img className='cursor-pointer' src={swalo} alt='screen' />
      <ul className='md:flex md:items-center md:pb-0 cursor-pointer absolute  md:static  md:pl-0 hidden gap-20 md:my-0  md:ml-8 '>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Home</Link></li>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Swalo Eats</Link></li>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Food Routine</Link></li>
        <li className='text-xl text-navbg hover:text-navhover duration-500'><Link to='/'>Pricing</Link></li>
      </ul>

      <div onClick={showMenu} className='text-3xl absolute block right-8 top-6 cursor-pointer md:hidden'>
        {active ? <CgClose /> : <CgMenuLeft />}
      </div>

      <ul className={active ? ' text-gray-800 hover:text-gray-400  bg-lightbg md:hidden left-0 w-full  pl-9 transition-all duration-500 ease-in text-xl my-7' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <li className='pb-4 '><Link to='/'>Home</Link></li>
        <li className='pb-4'><Link to='/'>Swalo Eats</Link></li>
        <li className='pb-4'><Link to='/'>Food Routine</Link></li>
        <li className='pb-4'><Link to='/'>Pricing</Link></li>
      </ul>
      
    </nav> 
    

    </div>
  )
}

export default Navbar