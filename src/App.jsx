import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import Contact from './components/Contact'
import Pricing from './components/Pricing'
import AppBanner from './components/AppBanner'
import Testimonial from './components/Testimonials'
import Footer from './components/Footer'
import About2 from './components/ABout2'
import Testimonials from './components/Testimonials'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>

      <About2></About2>

      
      


      <Contact/>
      <Pricing/>
      <AppBanner/>
      
      <Testimonials></Testimonials>

      <Footer/>
      
    </div>
  )
}

export default App