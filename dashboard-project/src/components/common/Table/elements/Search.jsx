import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="flex items-center w-[256px] relative ">
      <HiSearch className="absolute" />
      <input
        type="text"
        placeholder="جستجو کنید ..."
        className="absolute size-full outline-none px-8 text-sm right-0 left-0"
      />
    </div>
  );
};

export default Search;
