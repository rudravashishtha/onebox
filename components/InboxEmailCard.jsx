import { Send } from "lucide-react";
import React from "react";

const InboxEmailCard = ({
  threadId,
  fromEmail,
  subject,
  sentAt,
  handleChangeEmail,
}) => {

  let token = localStorage.getItem("reachinbox-auth");
  token = token ? JSON.parse(token) : "";
  const date = new Date(sentAt);
  // Options for formatting
  const options = { month: "short" };


  // Get the month name
  const monthName = new Intl.DateTimeFormat("en-US", options).format(date);
  const day = date.getUTCDate();
  return (
    <div
      className="w-full pt-3 pb-3 pl-2"
      onClick={() => handleChangeEmail(threadId)}
    >
      <div className="flex gap-1 justify-between text-[12px]">
        <p>{fromEmail}</p>
        <p className="text-gray-400">
          {monthName} {day}
        </p>
      </div>
      <p className="text-xs text-gray-400">{subject}</p>
    </div>
  );
};

export default InboxEmailCard;
