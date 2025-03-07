import React from "react";
import StackIcon from "tech-stack-icons";

const StackBox = ({ stack }) => {
  const { title, icon } = stack;
  return (
    <div className=" h-20 w-20 flex flex-col text-dark bg-transparent  px-1 py-3 rounded-md shadow-lg items-center justify-center">
      <StackIcon className="h-8 " name={icon} />
      <p className="text-sm font-bold font-Mulish"> {title}</p>
    </div>
  );
};

export default StackBox;
