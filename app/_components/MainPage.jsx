import React from 'react'
import Banner from './Banner'
import Service from './Service'
import About from './About'
import Counter from './Counter'
import Project from './Project'
import Team from './Team'
import Testimonial from './Testimonial'
import Working from './Working'


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