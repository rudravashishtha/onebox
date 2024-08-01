"use client";
import AuthNav from '../components/AuthNav';
import { Button } from "../components/ui/button";
import Link from "next/link";

export default function Home() {
  let token = localStorage.getItem("reachinbox-auth") || takeToken();

  function takeToken() {
    try {
      const token = localStorage.getItem("reachinbox-auth");
      return token ? JSON.parse(token) : "";
    } catch (e) {
      console.log("Error:", e);
      return "";
    }
  }
  return (
    <>
      <AuthNav />
      <main className="h-screen bg-[#F4F6F8] dark:bg-[#000000] text-[#000000] dark:text-white">
        <div className="min-h-screen flex items-center justify-center flex-col gap-10">
          <h1 className="text-4xl font-bold">Welcome to Onebox</h1>
          {token ? (
            <Link href={"/dashboard"}>
                <Button>Go to Dashboard</Button>
              </Link>
          ) : (
            <div className="flex space-x-4">
              <Link href={"/auth/google-login"}>
                <Button variant={"secondary"}>Log In</Button>
              </Link>
              <Link href={"/auth/signup"}>
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
