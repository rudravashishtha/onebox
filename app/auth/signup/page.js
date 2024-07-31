"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import AuthNav from "@/components/AuthNav";
import AuthFooter from "@/components/AuthFooter";
import { Button } from "@/components/ui/button";

import { FaGoogle } from "react-icons/fa";


export default function SignupPage() {
  const router = useRouter();
  return (
    <>
      <AuthNav />
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="max-w-md w-full space-y-8 p-10 bg-gradient-to-r from-[#111214] to-[#121212] rounded-[17px] border border-[#343A40]">
          <h2 className="text-center text-3xl font-extrabold text-white">
            Create an account
          </h2>
          <Button className="text-white" onClick={() => router.push(`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${process.env.NEXT_PUBLIC_REDIRECT_URI}/dashboard`)}><FaGoogle />Sign Up with Google</Button>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
