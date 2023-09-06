"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const ToggleTheme = () => {
  const toggle = () => {
    globalThis.document?.documentElement?.classList.toggle("dark");
  };
  return (
    <a className="itemAside bg-red-500 dark:bg-primary-400 w-[64px] absolute sm:relative top-[54px] sm:top-auto">
      <MoonIcon className="icon block dark:hidden" onClick={toggle} />
      <SunIcon className="icon hidden dark:block" onClick={toggle} />
    </a>
  );
};

export default ToggleTheme;
