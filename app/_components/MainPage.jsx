import React from 'react'
import Banner from './home/Banner'
import Service from './home/Service'
import About from './home/About'
import Counter from './home/Counter'
import Project from './home/Project'
import Team from './home/Team'
import Testimonial from './home/Testimonial'
import Working from './home/Working'


const MainPage = () => {
  return (
    <>
    <div>
      <Banner/>
      <Service/>
      <About/>
      <Counter/>
      <Project/>
      <Working/>
      <Team/>
      <Testimonial/>
    </div>
    </>
  )
}

export default MainPage