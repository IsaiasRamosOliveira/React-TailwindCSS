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
} from "@heroicons/react/24/solid";
import { Props } from "next/script";

const Aside = ({ className }: Props) => {
  return (
    <aside className={`aside ${className} bg-primary400 border-primary500`}>
      <ul className="list">
        <a
          href="#"
          className="itemAside sm:hover:bg-primary300 dark:hover:bg-primary-200 
            border-primary500
            hover:bg-primary300 "
        >
          <CodeBracketIcon className="icon" />
        </a>
        <li className="itemAside sm:hover:bg-primary300 border-primary500">
          <a href="">
            <HomeIcon className="icon" />
          </a>
        </li>
        <li className="itemAside sm:hover:bg-primary300 border-primary500">
          <a href="">
            <DocumentTextIcon className="icon" />
          </a>
        </li>
        <li className="itemAside sm:hover:bg-primary300 border-primary500">
          <a href="">
            <Square3Stack3DIcon className="icon" />
          </a>
        </li>
        <li className="itemAside sm:hover:bg-primary300 border-primary500">
          <a href="">
            <UserGroupIcon className="icon" />
          </a>
        </li>
        <li className="itemAside sm:hover:bg-primary300 border-primary500">
          <a href="">
            <ChatBubbleOvalLeftEllipsisIcon className="icon" />
          </a>
        </li>
        <li className="itemAside sm:hover:bg-primary300 border-primary500">
          <a href="">
            <EnvelopeIcon className="icon" />
          </a>
        </li>
        <li className="itemAside sm:hover:bg-primary300 border-primary500">
          <a href="">
            <ChartBarIcon className="icon" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
