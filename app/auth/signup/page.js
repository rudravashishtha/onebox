"use client";

import AuthNav from "../../../components/AuthNav";
import AuthFooter from "../../../components/AuthFooter";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import GoogleLogo from "../../../public/google-icon.svg";

export default function SignupPage() {
  return (
    <>
      <AuthNav />
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-center">
        <div className="max-w-md w-full p-10 bg-[#111213] rounded-[17px] border border-[#343A40]">
          <h2 className="text-center text-2xl font-extrabold text-white mb-8">
            Create a new account
          </h2>
          <Link
            href={`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${process.env.REDIRECT_URI}/dashboard`}
            className="text-base text-[#CCCCCC] cursor-pointer flex justify-center items-center"
          >
            <Button variant="outline" className="bg-transparent border border-[#707172] px-16 py-8 flex justify-center items-center gap-3">
              <Image
                src={GoogleLogo}
                alt="Google Logo"
                width={20}
                height={20}
              />{" "}
              Sign Up with Google
            </Button>
          </Link>

          <p className="text-sm text-[#909296] mt-8">
            Already have an account?{" "}
            <Link
              href="/auth/google-login"
              className="text-base text-[#C1C2C5] cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
