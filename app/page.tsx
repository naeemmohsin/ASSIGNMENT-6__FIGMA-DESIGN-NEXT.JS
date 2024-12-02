import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import Courses_Category from "@/components/Courses_Category";
import Achievements from "@/components/Achievements";
import Achievements_R from "@/components/Achievements_R";
import Courses from "@/components/Courses";
import OurTeam from "@/components/OurTeam";
import Customer_Testimonials from "@/components/Customer_Testimonials";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    // Main div (body)
    <div className="w-[1280px] h-[7678px] mt-[100px] ml-[100px]">
      {/* imported contacts component */}
      <Contact />
      <Navbar />
      <Header/>
      <Logo/>
      <Courses_Category/>
      <Achievements/>
      <Achievements_R/>
      <Courses/>
      <OurTeam/>
      <Customer_Testimonials/>
      <Footer/>
    </div>
      )
};

export default HomePage;
