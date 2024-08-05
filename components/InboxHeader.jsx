import { ChevronDown, RotateCw } from "lucide-react";
import React, { useEffect } from "react";
import { resetMail } from "../utils/actions";
import { useRouter } from "next/navigation";

const InboxHeader = () => {
  const router = useRouter();
  let token = window.localStorage.getItem("reachinbox-auth");
  token = token ? JSON.parse(token) : "";

  useEffect(() => {
    token = window.localStorage.getItem("reachinbox-auth");
    token = token ? JSON.parse(token) : "";
  }, []);

  const handleReset = () => {
    resetMail(token).then(() => router.replace('/dashboard'));
  };
  return (
    <>
      <div className=" w-[160px] flex gap-1 items-center">
        <h1 className="text-[20px] text-[#4285F4] text-left">All Inbox(s)</h1>
      </div>
      <div className={`w-8 h-8 rounded flex justify-between items-center`}>
        <RotateCw
          className="w-5 h-5 ml-1.5 cursor-pointer"
          onClick={handleReset}
        />
      </div>
    </>
  );
};

export default InboxHeader;
