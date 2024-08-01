"use client";
import React, { useState } from "react";
import smallLogo from "../public/small-logo.svg";
import Image from "next/image";
import Home from "../public/home.svg";
import UserIcon from "../public/user-icon.svg";
import EmailIcon from "../public/email-icon.svg";
import SendIcon from "../public/send-icon.svg";
import ListIcon from "../public/list-icon.svg";
import InboxIcon from "../public/inbox-icon.svg";
import Bar from "../public/bar.svg";

const MenuList = [
  {
    name: "Home",
    icon: Home,
  },
  {
    name: "User",
    icon: UserIcon,
  },
  {
    name: "Email",
    icon: EmailIcon,
  },
  {
    name: "Send",
    icon: SendIcon,
  },
  {
    name: "List",
    icon: ListIcon,
  },
  {
    name: "Inbox",
    icon: InboxIcon,
  },
  {
    name: "Bar",
    icon: Bar,
  },
];

const Sidebar = ({ username, handleChange }) => {
  const [activeIcon, setActiveIcon] = useState(0);

  const handleClick = (index) => {
    setActiveIcon(index);
    handleChange(index);
  };

  return (
    <div className="w-[6vw] h-screen bg-[#FAFAFA] dark:bg-[#101113] fixed border-r border-[#D8D8D8] dark:border-[#343A40] pt-4 flex content-between justify-center">
      <div className="flex flex-col justify-between items-center">
        <Image src={smallLogo} alt="logo" width={40} height={40} />

        {MenuList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center p-2 rounded-full cursor-pointer ${
              activeIcon === index ? "dark:bg-[#2F3030] bg-[#E9EAEB]" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <Image src={item.icon} alt={item.name} width={22} height={22} />
          </div>
        ))}

        <div className="flex flex-col justify-center items-center bg-[#054F31] rounded-full px-3 py-2 mb-2 text-white">
          <h4>{username}</h4>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
