"use client"
import React from "react";
import smallLogo from "@/public/small-logo.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="w-[5vw] h-screen bg-[rgb(16,17,19)] fixed border-r border-[#343A40] pt-4">
      <div className="flex justify-center items-center">
        <Image src={smallLogo} alt="logo" width={50} height={50} />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
