import React from "react";
import Image from "next/image";

function Header() {
  return (
    // header main div
    <div className="  flex items-center w-[1280px] h-[800px]">


      {/* div containing heading h1 & paragraph  */}
      <div className=" grid grid-rows--[640px] h-[300px] pr-[60px] pl-[80px] gap-6">
        
          <h1 className=" font-bold w-[500px] h-[134px] text-[56px] leading-[67.2px] ">
            Learn new skills online with ease
          </h1>
          <p className="font-medium leading-[27px] text-[18px] w-[500px] h-[54px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
           <br />
           <br />
          <div className=" flex w-[358px] h-[64px] pt-[16px] gap-2">
          <button className="w-[178px] h-[48px]  rounded  border pt-[12px] pb-[12px] bg-black  
                             font-normal text-[16px] text-white gap-2 border-black"> Start learning now </button>
          <button className="w-[178px] h-[48px]  rounded  border pt-[12px] pb-[12px] pl-[24px] pr-[24px] 
                             font-normal text-[16px] text-black justify-center items-center gap-4 border-black"> Explore Courses</button> 
          </div>
          </div>
     

      <div className=" flex ">
        <Image
          src="/images/figma-img.png"
          alt="figma design image"
          width={640}
          height={900} />
      </div>


    </div>
  );
}

export default Header;
