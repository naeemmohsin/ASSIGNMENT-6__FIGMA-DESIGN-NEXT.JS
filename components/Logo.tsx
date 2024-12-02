import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex w-[1280px] h-[228px] pt-[80px] pb-[80px] pl-[64px] pr-[64px] gap-[64px]
                     font-bold" >
                    <div className='font-bold text-[24px]'>Trusted by 2000+ companies worldwide.
                    </div>

                       <div className=" top-[8.74px] bottom-[8.74px] gap-[19.12px]">
                         <Image
                          src="/images/Logos.svg"
                          alt="Logo icons image"
                          width={880}
                          height={56}
                          /> 
                        </div>
      
    </div>
  )
}

export default Logo

