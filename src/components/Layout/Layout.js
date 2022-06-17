import React from 'react'
import Content from '../Content/Content'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Scroll from '../Scroll/Scroll'


const Layout = () => {
  return (
    <div className=''>
        <Header />
        <Content />
        <Scroll />
        <Footer />
    </div>
  )
}

export default Layout