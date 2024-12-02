import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-[1280px] h-[684px] p-20 gap-20'>

          <div className="w-[1120px] h-[524px]">

              <div className="w-[1120px] h-[82px] font-medium text-[18px] flex ">
                        <div className='w-[500px] h-[51px]'>
                        <p  className='font-medium text-[18px]'> Subscribe to our newsletter </p>
                        <p className='font-normal text-[16px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>

                        <div className=' grid grid-cols gap-x-40  ml-72 w-[275px]  h-[81px]  pt-3 '>
                        <input type="text" className='w-[265px] h-[48px] bg-transparent rounded border border-black' id='email'/>
                        <p className='w-[400px] h-[18px] font-normal text-[12px]'>By subscribing you agree to with our Privacy Policy</p>
                        
                        </div>
                        <button className=' w-[119px] h-[48px] text-[16px] font-normal mt-3 pt-3 pb-3 pr-6 rounded border border-black'>Subscribe</button>
                        
                        
              </div>

                        <div className="w-[1120px] h-[225px] grid grid-cols-4 grid-rows-1 gap-10 mt-20">
                                      
                                 <div className="W-[130.6px] h-[41px] pt-[29px] pb-[29px] gap-[10.5px]">

                                 {/* div containing Union image */}
                                      <div className="flex">
                                      <Image
                                      src="/images/union-image.svg"
                                      alt="Union icons image"
                                      width={32.58}
                                      height={30.38}
                                      color="#10F2C5" /> 
  
                                 {/* div containing text of Union image */}
                                      <div className='font-bold text-[25.07px]'>Ddsgnr
                                      </div>
                                      </div>
                                      </div>

                                      <div className="W-[250px] h-[225px]">
                                           <ul className="grid grid-cols gap-y-2">
                                           <li> <a className="font-semibold text-[16px]">Courses</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Business</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Development</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Technology</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Design</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Programming</a></li>
                                           </ul> 
                                      </div>

                                      <div className="W-[250px] h-[225px]">
                                           <ul className="grid grid-cols gap-y-2">
                                           <li> <a className="font-semibold text-[16px]">Resources</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Career</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Resume</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Learning</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Interview Preparation</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Jobs</a></li>
                                           </ul> 
                                      </div>

                                      <div className="W-[250px] h-[225px]">
                                           <ul className="grid grid-cols gap-y-2">
                                           <li> <a className="font-semibold text-[16px]">About US</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Contact</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Help/Support</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">FAQ</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Terms and Conditions</a></li>
                                           <li> <a className="font-normal text-[14px] pt-8 pb-8">Partners</a></li>
                                           </ul> 
                                      </div>

                          </div>                         
                          <div className="W-[1120px] h-[57px] gap-8 justify-between mt-[60px] ">
                            <div>
                               <ul className="gap-10 flex font-normal text-[14px] ">
                               <li> <a>2023 Ddsgnr. Allrightreserved.</a></li>
                               <li> <a>PrivacyPolicy</a> </li>
                               <li> <a>Terms of Service</a> </li>
                               <li> <a>Cookies Setting</a> </li>                    
                               <li className='ml-[350px]'>
                                    <Image src="/images/Social Links.svg" 
                                           alt="figma icons image" 
                                        width={132}
                                       height={24}/> 
                               </li>
                               </ul>
                            </div>

                           </div>
                          
          </div>
    </div>
  )
}

export default Footer
