import React from 'react'
import Image from 'next/image'

const Courses_Category = () => {
  return (
    <div className=" w-[1280px] h-[1049px] pt-28 pb-24 bg-[#F7F7F7] ">

    <div  className=" ml-[250px]"> 
      <h1 className=" font-bold text-[48px] leading-[77.6px]">Explore Courses By Category</h1>
      <p  className=" font-medium text-[18px] text-start leading-[27px] ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
    </div>
    <br />
    <br />

    <div className="grid gap-y-16 grid-cols-3 grid-rows-3 ml-5">
    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px]'>
         <div>
            <Image
            src="/images/pen-tool.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Design & Development</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px]'>
          <div>
            <Image
            src="/images/marketing-image.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Marketing</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px]'>
          <div>
            <Image
            src="/images/Develop-Image.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Development</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px] '>
          <div>
            <Image
            src="/images/Communication-Image.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Communication</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px] '>
          <div>
            <Image
            src="/images/D.Marketing.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Digital Marketing</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px] '>
          <div>
            <Image
            src="/images/Self.Development.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Self Development</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px]'>
          <div>
            <Image
            src="/images/business-image.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Business</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px]'>
          <div>
            <Image
            src="/images/finance-image.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Finance</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>


    <div className='flex justify-center items-center gap-16 w-[400px] h-[132px] '>
          <div>
            <Image
            src="/images/Consulting-image.svg"
            alt="pen-tool image"
            width={32}
            height={32}/>
          </div>
          <div>
            <p className='font-semibold text-[20px]'>Consulting</p>
            <p className='font-normal text-[18px]'>50+ Courses Available</p>
          </div>
    </div>

    </div>
    <div className='ml-[560px] mt-[80px]'><button className='w-[155px] h-[48px] rounded border border-black'>View All Cources</button></div>
    </div>
  )
}

export default Courses_Category



