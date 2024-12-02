import React from 'react'
import Image from 'next/image'

const OurTeam = () => {
  return (
    <div className='w-[1280px] h-[895px] pt-[120px] gap-[80px]'>
      <p className='font-bold text-[56px] text-center '>Our team</p>
      <p className='font-normal text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <br />
      <br />
      
      <div className="grid gap-y-16 gap-x-8 grid-cols-3 grid-rows-2">
      <div className='flex justify-center items-center'>
      
            <Image
            src="/images/James-Image.svg"
            alt="Card image"
            width={394.67}
            height={209}/>
      </div>

    <div className='flex justify-center items-center'>
            <Image
            src="/images/Joseph.svg"
            alt="intro-to-python image"
            width={394.67}
            height={209}/>
    </div>


    <div className='flex justify-center items-center'>
            <Image
            src="/images/Joseph.Medical.svg"
            alt="pen-tool image"
            width={394.67}
            height={209}/>
    </div>


    <div className='flex justify-center items-center'>
            <Image
            src="/images/Erick.svg"
            alt="pen-tool image"
            width={394.67}
            height={209}/>
    </div>


    <div className='flex justify-center items-center'>
            <Image
            src="/images/Stephen.svg"
            alt="pen-tool image"
            width={394.67}
            height={209}/>
          
    </div>


    <div className='flex justify-center items-center'>

            <Image
            src="/images/John.svg"
            alt="pen-tool image"
            width={394.67}
            height={209}/>
          
    </div>
    </div> 
    </div>
  )
}

export default OurTeam
