import { Calendar } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TotoalContributions = ({total, classname}: {total: number, classname: string}) => {
  return (
    <div
      className={`${classname} flex items-center justify-center flex-col gap-3 relative rounded-2xl overflow-hidden -z-10 bg-black/90`}
    >
      {/* <HalfCircleGradient  /> */}
      <Image
        src={`/assets/grad3.svg`}
        alt=""
        width={1024}
        height={1024}
        className="size-full object-cover absolute inset-0 -z-10 rounded-2xl opacity-90"
      />
      <div className="absolute top-3 left-3">
        <Calendar className="size-9" />
        <p className="font-modernbold ">Total <br/> Contributions</p>
      </div>
      <p className="  font-modernbold absolute bottom-3 right-3 text-5xl">
        {total}
      </p>
    </div>
  )
}

export default TotoalContributions