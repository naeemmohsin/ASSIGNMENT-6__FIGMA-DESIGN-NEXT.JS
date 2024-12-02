import React from 'react'
import Image from 'next/image'

const Courses = () => {
  return (
    <div className='w-[1280px] h-[1742px] pt-[120px] gap-[60px]'>
      <p className='font-bold text-[56px] text-center '>Courses</p>
      <p className='font-normal text-[18px] text-center'>Your Ultimate Guide to learning</p>
   
      <div className="W-[336px] h-[40px]">
            <ul className="gap-2 flex justify-center mt-12 ">
              <li> <a className="W-[87px] h-[40px] font-normal text-[16px] border-b border-black" href="#hero">Popular</a></li>
              <li> <a className="W-[140px] h-[40px] pt-2 pr-8 pl-8 font-normal text-[16px] " href="#hero">Recommended</a></li>
              <li> <a className="W-[109px] h-[40px] gap-[8px]" href="#services">Best  Price</a></li>
            </ul> 
      </div>
      <br />
      <br />
      
      <div className="grid gap-y-16 gap-x-8 grid-cols-3 grid-rows-2">
      <div className='flex justify-center items-center'>
      
            <Image
            src="/images/Card.svg"
            alt="Card image"
            width={416}
            height={534}/>
      </div>

    <div className='flex justify-center items-center'>
            <Image
            src="/images/intro-to-python.svg"
            alt="intro-to-python image"
            width={416}
            height={534}/>
    </div>


    <div className='flex justify-center items-center'>
            <Image
            src="/images/data-analysis.svg"
            alt="pen-tool image"
            width={416}
            height={534}/>
    </div>


    <div className='flex justify-center items-center'>
            <Image
            src="/images/art-specialization.svg"
            alt="pen-tool image"
            width={416}
            height={534}/>
    </div>


    <div className='flex justify-center items-center'>
            <Image
            src="/images/rule-of-law.svg"
            alt="pen-tool image"
            width={416}
            height={534}/>
          
    </div>


    <div className='flex justify-center items-center'>

            <Image
            src="/images/Intro-to-web-flow.svg"
            alt="pen-tool image"
            width={416}
            height={534}/>
          
    </div>
    </div> 
    <div className='ml-[530px] mt-[80px]'><button className='w-[155px] h-[48px] border border-black rounded '>View All Cources</button></div>
    </div>

  )
}

export default Courses

