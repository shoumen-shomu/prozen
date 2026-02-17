import React from 'react'
import Banner from './Banner'
import Service from './Service'
import About from './About'
import Counter from './Counter'
import Project from './Project'


const MainPage = () => {
  return (
    <>
    <div>
      <Banner/>
      <Service/>
      <About/>
      <Counter/>
      <Project/>
    </div>
    </>
  )
}

export default MainPage