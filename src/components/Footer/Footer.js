
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
                <div className="bg-white ">
                    <div className="max-w-screen mt-20 ">
                        <h1 className="font-bold text-hero-hd pt-12 text-center text-3xl mt-40 mx-32">Our Top Customers Work In:</h1>
                    </div>

                    <div className="flex flex-col md:flex-col lg:flex-row justify-between px-8 md:mx-32 py-16">


                        <div>
                            <img className='' src={afri} alt='screen' />
                        </div>

                        <div>
                            <img className='' src={mavin} alt='screen' />
                        </div>
                    

                        <div>
                            <img className='' src={piggy} alt='screen' />
                        </div>


                        <div>
                            <img className='' src={naija} alt='screen' />
                        </div>

                    </div>
                </div>

                {/** second part */}
                <div className="py-16 bg-neutral-100 px-6 md:px-32">

                    <h1 className="text-orange text-center font-bold text-3xl mb-4">Explore delivery in Lagos</h1>


                    <div className="flex mb-6">
                    <input
                    onChange=''
                    id="search"
                    name="search"
                    type="search"
                    autoComplete="email"
                    required
                    className='w-5/6 h-10 ml-4 p-6 border rounded-lg'
                    placeholder="search anywhere in lagos"
                />

                <button className="border p-3 rounded-lg bg-orange ml-4 w-32 text-white">Explore</button>

                </div>



                  <div className='flex justify-between md:mx-32 mb-2'>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">lekki</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">Ikeja</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">Egbeda</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">victoria island</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">lagos island</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">yaba</p>
                    <p className="border bg-orange-lh text-orange rounded-full px-3 ">surulere</p>
                  </div>

                  <div className='flex justify-between md:mx-32 mb-2'>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">MaryLand</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Festac</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Apapa</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Ojo</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Shomolu</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">Iganda</p>
                  <p className="border bg-orange-lh text-orange rounded-full px-3 ">command</p>
                </div>

                <div className="flex md:mx-32">
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Ajah</p>
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Sangotedo</p>
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Ikotun</p>
                <p className="border bg-orange-lh text-orange rounded-full px-3 ml-3">Abule Egba</p>

                </div>

                </div>

                {/** third part */}

              <div className="bg-white ">
                <div className="flex sm:flex-col flex-col lg:flex-row justify-between py-4 md:py-16 px-6 md:mx-32">
                    <div>
                    <img className='md:-ml-8 ml-12 w-44  md:w-64' src={swalo} alt='screen' />


                    <div className="flex gap-4 mb-6 md:mb-0">
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

                    <div className="flex flex-col md:flex-col lg:flex-row">

                        <div className="mr-8">
                        <p className="mb-6 text-lg">Companies</p>
                        <ul>
                        <li><a href="/" className="text-sm">About us</a></li>
                        <li><a href="/" className="text-sm">Pricing</a></li>
                        <li><a href="/" className="text-sm">Food Routine</a></li>
                        </ul>   
                        </div> 

                        <div className="mr-8">
                        <p className="mb-6 text-lg">Careers</p>
                        <ul>
                        <li><a href="/" className="text-sm">Delivery</a></li>
                        <li><a href="/" className="text-sm">Chef</a></li>
                        <li><a href="/" className="text-sm">Monetization</a></li>
                        </ul>   
                        </div> 


                        <div>
                        <p className="mb-6 text-lg">Companies</p>
                        <ul>
                        <li><a href="/" className="text-sm">FAQS</a></li>
                        <li><a href="/" className="text-sm">Blog</a></li>
                        <li><a href="/" className="text-sm">Contact Us</a></li>
                        <li><a href="/" className="text-sm">Terms & Conditions</a></li>
                        <li><a href="/" className="text-sm">Privacy Policy</a></li>
                        </ul>   
                        </div> 
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer 