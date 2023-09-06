import React from "react";

interface IContent {
  children: React.ReactNode;
}

const Content = ({ children }: IContent) => {
  return <main className="">{children}</main>;
};

export default Content;
