import React from 'react'
import Image from 'next/image'

const Customer_Testimonials = () => {
  return (
    <div className=" w-[1280px] h-[830.89px] pt-28 ">

    <div> 
      <h1 className=" font-bold text-[48px] text-start leading-[77.6px] ml-14">Customer testimonials</h1>
      <p  className=" font-medium text-[18px] text-start leading-[27px] ml-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <br />
    <br />

    <div className="grid gap-y-16 gap-x-8 grid-cols-3 grid-rows-1 ml-5">
    <div className='w-[362.67px] h-[321.89px] p-8 '>
      
        <div className=' gap-16 '>
        <br />
        <Image
            src="/images/Stars.svg"
            alt="stars image"
            width={116}
            height={18.89}/>
           <br /> 
         <p className='font-medium text-[18px] text-start leading-[27px]'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br />
          Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi quis viverra ornare."</p>
         </div>

         <br />
          
          <div className='inline-flex gap-5'>
            <Image
            src="/images/sd-avatar-image.svg"
            alt="pen-UI/UX Designer image"
            width={56}
            height={56}/>

            <div>
            <p className='font-semibold text-[20px]'>James Nduku</p>
            <p className=' font-normal text-[18px]'>Software Developer</p>
            </div>
            </div>

          </div>

          <div className='w-[362.67px] h-[321.89px]'>
      
      <div className=' gap-16 '>
      <br />
      <Image
          src="/images/Stars.svg"
          alt="stars image"
          width={116}
          height={18.89}/>
         <br /> 
       <p className='font-medium text-[18px] text-start leading-[27px]'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."</p>
       </div>

       <br />
        
        <div className='inline-flex gap-5'>
          <Image
          src="/images/scrum-avatar-image.svg"
          alt="pen-UI/UX Designer image"
          width={56}
          height={56}/>

          <div>
          <p className='font-semibold text-[20px]'>Erick Kipkemboi</p>
          <p className=' font-normal text-[18px]'>Scrum Master</p>
          </div>
          </div>

        </div>

        <div className='w-[362.67px] h-[321.89px]'>
      
        <div className=' gap-16 '>
        <br />
        <Image
            src="/images/Stars.svg"
            alt="stars image"
            width={116}
            height={18.89}/>
           <br /> 
         <p className='font-medium text-[18px] text-start leading-[27px]'>"Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. <br />
          Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."</p>
         </div>

         <br />
          
          <div className='inline-flex gap-5'>
            <Image
            src="/images/ui-ux-avatar-image.svg"
            alt="pen-UI/UX Designer image"
            width={56}
            height={56}/>

            <div>
            <p className='font-semibold text-[20px]'>Stephen Kerubo</p>
            <p className=' font-normal text-[18px]'>UI/UX Designer</p>
            </div>
            </div>

          </div>
     </div>
     <br />
          
          <div className='ml-14 mr-8 mt-5'>
            <Image
            src="/images/slider-dots-image.svg"
            alt="pen-UI/UX Designer image"
            width={48}
            height={48}/>
            

          <div className='flex gap-x-5 ml-[1000px]'>
            <Image
            src="/images/left-arrow-button.svg"
            alt="pen-UI/UX Designer image"
            width={48}
            height={48}/>

            <Image
            src="/images/right-arrow-button.svg"
            alt="pen-UI/UX Designer image"
            width={48}
            height={48} />

            </div> 
            </div>

    

    </div>
  )
}

export default Customer_Testimonials
