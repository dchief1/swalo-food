import React from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Scroll from '../Scroll/Scroll'
import Subscribe from '../subscribe/subscribe'
import Card from '../Card/Card'


const Layout = () => {
  return (
    <div className='max-w-full'>
        <Header />
        <div className='bg-pagebg'>
          <Content />
          <Scroll />
          <Subscribe />
          <Card />
          <Footer />
        </div>
        
        
    </div>
  )
}

export default Layout