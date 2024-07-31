import AuthNav from "@/components/AuthNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <AuthNav />
      <main className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="min-h-screen flex items-center justify-center flex-col gap-10">
          <h1 className="text-4xl font-bold">Welcome to the App</h1>
          <div className="flex space-x-4">
            <Link href={"/auth/google-login"}>
              <Button variant={"secondary"}>Log In</Button>
            </Link>
            <Link href={"/auth/signup"}>
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
