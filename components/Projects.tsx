import React from 'react'
import Carousel from './carousel'

const Projects = () => {
  return (
    <div className='w-full flex items-start mt-10 justify-center flex-col text-white'>
      <h1 className='font-modernbold text-5xl max-w-3xl py-5 px-40'>PROJECTS.</h1>
        <Carousel />
    </div>
  )
}

export default Projects