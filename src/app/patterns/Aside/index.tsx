import React from "react";
import {
  CodeBracketIcon,
  HomeIcon,
  DocumentTextIcon,
  Square3Stack3DIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  ChartBarIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import ToggleTheme from "@/app/components/ToggleTheme";

const Aside = () => {
  return (
    <aside className="aside">
      <ul className="list">
        <a
          href="#"
          className="itemAside dark:hover:bg-primary-200
            hover:bg-red-400"
        >
          <CodeBracketIcon className="icon" />
        </a>
        <li className="itemAside">
          <a href="">
            <HomeIcon className="icon" />
          </a>
        </li>
        <li className="itemAside">
          <a href="">
            <DocumentTextIcon className="icon" />
          </a>
        </li>
        <li className="itemAside">
          <a href="">
            <Square3Stack3DIcon className="icon" />
          </a>
        </li>
        <li className="itemAside">
          <a href="">
            <UserGroupIcon className="icon" />
          </a>
        </li>
        <li className="itemAside">
          <a href="">
            <ChatBubbleOvalLeftEllipsisIcon className="icon" />
          </a>
        </li>
        <li className="itemAside">
          <a href="">
            <EnvelopeIcon className="icon" />
          </a>
        </li>
        <li className="itemAside">
          <a href="">
            <ChartBarIcon className="icon" />
          </a>
        </li>
      </ul>
      <ToggleTheme />
    </aside>
  );
};

export default Aside;
