import React from 'react'
import log1 from '../../assets/images/img1.png'
import log2 from '../../assets/images/img2.png'

const Content = () => {
  return (
    <div className='mt-20'>
    <img className='z-40 md:ml-64 w-44 h-20 md:w-imgw md:h-imgh ' src={log1} alt='screen' />
        <img className=' z-10 md:ml-96 w-44 h-20 md:w-imgw md:h-imgh ' src={log2} alt='screen' />
        
        
    </div>
  )
}

export default Content