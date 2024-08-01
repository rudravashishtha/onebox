import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className={`bg-[23272C] w-full h-7 flex items-center p-2 gap-2`}>
      <Search color="gray" className=" bg-transparent w-5 h-5 ml-1" />
      <input type="text" placeholder="Search" className={`outline-none px-3`} />
    </div>
  );
};

export default SearchBar;
