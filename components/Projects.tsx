import React from 'react'
import Carousel from './carousel'

const Projects = () => {
  return (
    <div className='w-full max-w-5xl mx-auto flex items-start mt-10 justify-start flex-col text-white'>
      <h1 className='font-modernbold text-5xl max-w-2xl py-5 px-10 max-sm:mx-auto max-sm:px-0'>PROJECTS.</h1>
        <Carousel />
    </div>
  )
}

export default Projects