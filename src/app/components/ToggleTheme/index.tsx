"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
const ToggleTheme = () => {
  const toggle = () => {
    globalThis.document?.documentElement?.classList.toggle("dark");
  };
  return (
    <a className="itemAside">
      <MoonIcon className="icon block dark:hidden" onClick={toggle} />
      <SunIcon className="icon hidden dark:block" onClick={toggle} />
    </a>
  );
};

export default ToggleTheme;
