import React from "react";

interface IGroup {
  children: React.ReactNode;
  className?: string;
}

const Group = ({ children, className }: IGroup) => {
  return (
    <div
      className={`${className} rounded-xl dark:bg-primary-400 w-full bg-primary200 p-6 h-full`}
    >
      {children}
    </div>
  );
};

export default Group;
