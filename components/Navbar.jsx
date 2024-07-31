"use client"
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="w-[95vw] top-0 h-[12vw] md:h-[6vw] bg-[#1F1F1F] flex justify-between items-center">
      <div className="ml-[2vw] text-white">
        <h3>Onebox</h3>
      </div>
      <div className="mr-[2vw] flex justify-center items-center gap-10">
        <ModeToggle />
        <h3
          className="
        text-white"
        >
          Name's Workspace \/
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
