"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Navbar = ({ firstName, email }) => {
  return (
    <div className="w-[95vw] top-0 h-[12vw] md:h-[6vw] flex justify-between items-center border-b border-[#DEDEDE] dark:border-[#343A40]">
      <div className="ml-[2.5vw]">
        <Link href={"/dashboard"}><h3>Onebox</h3></Link>
      </div>
      <div className="mr-[2vw] flex justify-center items-center gap-10">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <h3 className="flex gap-2 items-center">
              {firstName}{"'"}s Workspace <FaChevronDown />
            </h3>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Email: {email}</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"http://github.com/rudravashishtha"} target="_blank">
                Contact Developer
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
