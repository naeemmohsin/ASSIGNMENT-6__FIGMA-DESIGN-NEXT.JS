import React from 'react'

const Achievements_R = () => {
  return (
    <div className="w-[1280px] h-[488px] pt-[112px] ">

    <div> 
      <h1 className="text-center font-bold text-[48px] leading-[57.6px]">Our Achivements</h1>
      <br />
      <p  className=" text-center font-normal text-[18px] leading-[27px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Suspendisse varius enim in eros elementum tristique.Duis cursus, 
        mi quis viverra <br /> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p><br />
    </div>

    <div className=" grid grid-cols-4 grid-rows-1 gap-x-2 ">
    
    <div className='text-center w-[296px] h-[80px] '>
         <p className='font-bold text-[40px]'>+200</p>
         <p className='font-normal text-[16px]'>Courses</p>      
    </div>

     
    <div className=' text-center w-[296px] h-[80px]'>
         <p className='flex justify-center items-center font-bold text-[40px]'>50K</p>
         <p className='font-normal text-[16px]'>Mentors</p>      
    </div>

     
    <div className=' text-center gap-16 w-[296px] h-[80px]'>
         <p className='font-bold text-[40px]'>370K</p>
         <p className='font-normal text-[16px]'>Students</p>      
    </div>
     
    <div className=' text-center gap-16 w-[296px] h-[80px]'>
         <p className='font-bold text-[40px]'>100+</p>
         <p className='font-normal text-[16px]'>Recognition</p>      
    </div>

    </div>
    </div>
  )
}

export default Achievements_R

