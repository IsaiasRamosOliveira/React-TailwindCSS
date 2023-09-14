import React from "react";

interface ILabel {
  title: string;
  icon: React.ReactNode;
  variant: "orange" | "green" | "common";
}

const getVariant = (variant: ILabel["variant"]) => {
  switch (variant) {
    case "common":
      return "bg-label-common";
    case "orange":
      return "bg-label-orange";
    case "green":
      return "bg-label-green";
    default:
      return "bg-label-common";
  }
};

const Label = ({ title, icon = <></>, variant = "common" }: ILabel) => {
  return (
    <div
      className={`${getVariant(variant)} text-slate-50 px-6 py-3 rounded-lg flex justify-between font-semibold`}
    >
      <div className="flex gap-2">
        {icon}
        <h2>{title}</h2>
      </div>
      <span>13/29</span>
    </div>
  );
};

export default Label;
