import React from 'react'
import Banner from './Banner'
import Service from './Service'
import About from './About'
import Counter from './Counter'
import Project from './Project'
import Team from './Team'


const MainPage = () => {
  return (
    <>
    <div>
      <Banner/>
      <Service/>
      <About/>
      <Counter/>
      <Team/>
    </div>
    </>
  )
}

export default MainPage