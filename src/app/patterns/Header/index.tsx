import React from "react";
import { UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ToggleTheme from "@/app/components/ToggleTheme";

const Header = () => {
  return (
    <header className="header bg-primary400 border-primary500">
      <div className=" bg-white flex gap-2 px-2 p-1 rounded-full">
        <input
          type="text"
          className="bg-transparent outline-none border-none px-2"
        />
        <button>
          <MagnifyingGlassIcon className="icon dark:text-zinc-800 text-black w-6" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="#"
          className="itemAside border-primary500 dark:hover:bg-primary-200  hover:bg-primary300 w-[64px] border-t-0 border-l-[1px]"
        >
          <UserIcon
            className="dark:bg-primary-100 bg-slate-200
        text-primary500 dark:text-white icon rounded-full p-1"
          />
        </a>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Header;
