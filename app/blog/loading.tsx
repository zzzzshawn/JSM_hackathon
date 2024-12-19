import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-start py-20 min-h-screen font-modernreg max-lg:px-3 max-w-3xl w-full  max-lg:w-full mx-auto relative overflow-hidden text-white gap-3'>
      <Skeleton  className='my-10 w-[8rem] h-[3rem]'/>
      {
        [1,2,3,4,5].map(i => (
          <div className="" key={i}>
            <Skeleton className='w-[40rem] max-sm:w-[22rem] rounded-2xl h-[7rem]' />
          </div>
        ))
      }
    </div>
  )
}

export default Loading