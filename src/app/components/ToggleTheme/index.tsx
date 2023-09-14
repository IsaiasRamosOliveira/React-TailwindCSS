"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const ToggleTheme = () => {
  const toggle = () => {
    globalThis.document?.documentElement?.classList.toggle("dark");
  };
  return (
    <a
      className="itemAside dark:hover:bg-primary-200 border-primary500
            hover:bg-primary300 bg-primary400 dark:bg-primary-400 w-[64px] absolute sm:relative top-[54px] sm:top-auto border-t-0 border-l-[1px]"
    >
      <MoonIcon className="icon block dark:hidden" onClick={toggle} />
      <SunIcon className="icon hidden dark:block" onClick={toggle} />
    </a>
  );
};

export default ToggleTheme;
