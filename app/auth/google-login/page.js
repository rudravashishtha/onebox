"use client";

import AuthNav from "../../../components/AuthNav";
import AuthFooter from "../../../components/AuthFooter";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";
import GoogleLogo from "../../../public/google-icon.svg";


export default function LoginPage() {
  return (
    <>
      <AuthNav />
      <div className="min-h-screen flex items-center justify-center text-center">
        <div className="max-w-md w-full p-10 bg-[#111213] rounded-[17px] border border-[#343A40]">
          <h2 className="text-center text-2xl font-extrabold mb-8">
            Log In
          </h2>
          <Link
            href={`https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=/dashboard`}
            className="text-base text-[#CCCCCC] cursor-pointer flex justify-center items-center"
          >
            <Button variant="outline" className="bg-transparent border border-[#707172] px-16 py-8 flex justify-center items-center gap-3">
              <Image
                src={GoogleLogo}
                alt="Google Logo"
                width={20}
                height={20}
              />{" "}
              Sign In with Google
            </Button>
          </Link>

          <p className="text-sm text-[#909296] mt-8">
            Don{"'"}t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-base text-[#C1C2C5] cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
