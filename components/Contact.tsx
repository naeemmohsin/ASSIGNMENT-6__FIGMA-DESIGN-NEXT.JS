import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    // Contact main div.
    <div className='w-[1280px] h-[54px] pl-[62px] bg-[#F7F7F7]'>
      {/* div containing contact ifo.*/}
        <div className='w-[1154px] h-[54px] pt-3 flex'>
          {/* div containing cell no. & email id. */}
            {/* <div className='w-[386px] h-[30px]'> */}
           <a> Phone Number: 956 742 455 678   |   Email:info@ddsgnr.com</a>
            {/* </div> */}
            {/* div containing icons */}
            <div className='w-[736px] h-[24px]'>
            {/* div containing 4 icons */}
           <div className='flex gap-3 justify-end'>
           <FaFacebookF width={10} height={18}/>
           <FaInstagram width={18} height={18} />
           <FaTwitter width={18} height={15.3} />
           <FaLinkedin width={18} height={18}/>
           {/* <Image src="/images/Social Links.svg" 
             alt="figma icons image" 
             width={132}
             height={24}/>  */}
            </div>
            </div>
        </div>
     
    </div>
  )
}

export default Contact

