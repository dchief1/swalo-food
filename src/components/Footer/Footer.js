
import React from "react";
import afri from '../../assets/images/afri.png';
import mavin from '../../assets/images/mavin.png';
import piggy from '../../assets/images/piggy.png';
import naija from '../../assets/images/naija.png';
import swalo from '../../assets/images/swalo.png';
import { FaInstagram, FaFacebookSquare, FaTwitter } from 'react-icons/fa'


const Footer = () => {
    return (

        <>
                <div className="bg-white max-w-screen  mt-44 ">
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

                {/** third part */}

              <div className="bg-white ">
                <div className="flex md:flex-row flex-col lg:flex-row justify-between py-4 md:py-12 lg:py-16 px-6 md:px-12 lg:mx-32">
                    <div >
                    <img className='md:-ml-8 grid place-items-center w-44  md:w-64' src={swalo} alt='screen' />


                    <div className=" hidden md:flex gap-4 mb-6 md:mb-0">
                        <a className="text-2xl" href="/">
                            <FaInstagram />
                        </a>

                        <a className="ml-4 text-2xl" href="/">
                            <FaFacebookSquare />
                        </a>

                        <a className="ml-4 text-2xl" href="/">
                            <FaTwitter />
                        </a>
                    </div>
                    </div>

                    <div className="flex flex-col ml-8 md:flex-row lg:flex-row">

                        <div className="md:mr-8">
                        <p className="mb-2 md:mb-6 text-lg">Companies</p>
                        <ul>
                        <li><a href="/" className="text-sm">About us</a></li>
                        <li><a href="/" className="text-sm">Pricing</a></li>
                        <li><a href="/" className="text-sm">Food Routine</a></li>
                        </ul>   
                        </div> 

                        <div className="md:mr-8">
                        <p className="mb-2 md:mb-6 mt-6 md:mt-0 text-lg">Careers</p>
                        <ul>
                        <li><a href="/" className="text-sm">Delivery</a></li>
                        <li><a href="/" className="text-sm">Chef</a></li>
                        <li><a href="/" className="text-sm">Monetization</a></li>
                        </ul>   
                        </div> 


                        <div>
                        <p className="mb-2 md:mb-6 mt-6 md:mt-0 text-lg">Other</p>
                        <ul>
                        <li><a href="/" className="text-sm">FAQS</a></li>
                        <li><a href="/" className="text-sm">Blog</a></li>
                        <li><a href="/" className="text-sm">Contact Us</a></li>
                        <li><a href="/" className="text-sm">Terms & Conditions</a></li>
                        <li><a href="/" className="text-sm">Privacy Policy</a></li>
                        </ul>   
                        </div> 

                        <div className=" md:hidden flex gap-2 mb-6 mt-4">
                        <a className="text-2xl" href="/">
                            <FaInstagram />
                        </a>

                        <a className="ml-4 text-2xl" href="/">
                            <FaFacebookSquare />
                        </a>

                        <a className="ml-4 text-2xl" href="/">
                            <FaTwitter />
                        </a>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer 