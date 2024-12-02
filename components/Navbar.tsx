import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    // main navbar div
    <div className="w-[1280px] h-[72px]  pl-16 border-b ">
      
      {/* div containing navbar items inside navbar main div */}
      <div className="w-[910px] h-[44px] gap-20 flex border-black">
        
        {/* div containing divs of (Union image & text)-/////////////////////*/}
        <div className="w-[130.6px] h-[41px] pt-[29px] pb-[29px] gap-[10.5px] font-bold text-[25.07] ">

          {/* div containing Union image */}
          <div className="flex">
          <Image
            src="/images/union-image.svg"
            alt="Union icons image"
            width={32.58}
            height={30.38}
            color="#10F2C5" /> 
            
            {/* div containing text of Union image */}
            <div className="ml-1">Ddsgnr
            </div>
            </div>
        </div>

        {/* div containing home to testimonial sections and login and sign up buttons */}
          <div className="w-[910px] h-[44px] gap-8 ml-48 mt-4">
            
            <ul className="gap-9 flex items-center">
              <li> <a className="w-[64px] h-[44px] gap-[10px] border-b border-black " href="#hero">Home</a></li>
              <li> <a className="w-[79px] h-[44px] gap-[10px] " href="#courses">Cources</a></li>
              <li> <a className="w-[81px] h-[44px] gap-[10px] " href="#services">Services</a></li>
              <li> <a className="w-[113px] h-[44px] gap-[10px] " href="#achievement">Achievement</a></li>
              <li> <a className="w-[104px] h-[44px] gap-[10px]" href="#about us">AboutUs</a></li>
              <li> <a className="w-[64px] h-[44px] gap-[10px] " href="#testimonial">Testimonial</a></li>
              <li> <button className="w-[80px] h-[40px] font-normal text-[16px]  border rounded border-black">Login </button></li>
              <li> <button className="w-[95px] h-[40px] text-white font-normal text-[16px]  border rounded border-black bg-black">Sign Up </button></li>
            </ul>
            
          </div>
        </div>
    </div>
  );
};

export default Navbar;
