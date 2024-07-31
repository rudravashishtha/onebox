"use client";
import NextAuth from "next-auth/next";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { usePathname, useSearchParams } from "next/navigation";

const DashboardPage = (req) => {
  useEffect(() => {
    fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list")
      .then((res) => console.log(res))
  }, []);

  return (
    <>
      <Sidebar />
      <div className="ml-[5vw]">
        <Navbar />
        <div className="p-10 text-white">
          DashboardPage
          <h1>searchParams: {req.searchParams.token}</h1>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
