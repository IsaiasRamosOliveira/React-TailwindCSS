import React from "react";
import { UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="header">
      <div className=" bg-white flex gap-2 px-2 p-1 rounded-full">
        <input
          type="text"
          className="bg-transparent outline-none border-none px-2"
        />
        <button>
          <MagnifyingGlassIcon className="icon dark:text-zinc-800 text-black w-6" />
        </button>
      </div>
      <a href="#">
        <UserIcon className="dark:bg-primary-100 bg-slate-200
        text-red-600 dark:text-white icon rounded-full p-1"  />
      </a>
    </header>
  );
};

export default Header;
