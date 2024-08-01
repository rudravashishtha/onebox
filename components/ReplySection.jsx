import { Reply } from "lucide-react";
import React, { useEffect, useState } from "react";
import SingleMail from "../components/SingleMail";
import SendReply from "../components/SendReply";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from "./ui/button";

const ReplySection = ({ singleMail, deleteMail }) => {
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "r" || event.key === "R") {
        setShowReply(true);
      }

      if (event.key === "Escape") {
        setShowReply(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", () => {
        setShowReply(false);
      });
    };
  }, [showReply]);

  return (
    <div className="w-full min-w-[45vw] h-full border border-gray-700 flex justify-between flex-col ">
      <div className=" relative flex justify-between flex-col ">
        <div className="flex border border-gray-700 py-3 pl-4">
          <div className="text-left w-full">
            <h1 className="text-[1rem]">
              {singleMail && singleMail[0]?.fromName}
            </h1>
            <p className="text-[12px] text-gray-400">
              {singleMail && singleMail[0]?.toEmail}
            </p>
          </div>
          <div className="flex justify-end mr-6 w-fit h-6  gap-4 my-2  text-right">
            <div
              className={`bg-transparent flex justify-center gap-2 p-2 items-center border border-gray-700 rounded`}
            >
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="cursor-pointer mb-3">
                    <p>...</p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Button className="bg-transparent border-none" variant="outline" onClick={() => deleteMail()}>Delete</Button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 pl-4 ">
          <h1 className="text-[14px]">{singleMail?.length} Messages</h1>
          {singleMail?.length > 0 &&
            singleMail?.map((item) => {
              return <SingleMail {...item} key={item.id} />;
            })}
        </div>
        {showReply && (
          <div
            className={` w-[20rem] ml-4 rounded-2xl  z-10  overflow-hidden  h-[20rem] border border-gray-700`}
          >
            <SendReply
              singleMail={singleMail[0]}
              handleCancel={() => setShowReply(!showReply)}
            />
          </div>
        )}
      </div>

      <div className=" h-10 w-[50%] bg-[#4B63DD] ml-4 mb-3 rounded gap-1 flex justify-center items-center">
        <Reply color="white" />
        <button className="text-white" onClick={() => setShowReply(!showReply)}>
          Reply
        </button>
      </div>
    </div>
  );
};

export default ReplySection;
