import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col items-start justify-start py-20 min-h-screen font-modernreg max-lg:px-3 max-w-3xl w-full  max-lg:w-full mx-auto relative overflow-hidden text-white '>
      <Skeleton  className=' w-full h-[3rem]'/>
      <Skeleton  className='my-5 w-full h-[20rem] rounded-3xl'/>
      
      
    </div>
  )
}

export default Loading