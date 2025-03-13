import React from "react";
import StackIcon from "tech-stack-icons";

const StackBox = ({ stack }) => {
  const { title, icon } = stack;
  return (
    <div className=" h-20 w-20 gap-1 flex flex-col text-dark bg-transparent  px-1 py-3 rounded-md shadow-md items-center justify-center cursor-pointer hover:bg-orange  transition-all duration-200">
      <StackIcon className="h-8 " name={icon} />
      <p className="text-sm font-semibold font-Mulish"> {title}</p>
    </div>
  );
};

export default StackBox;
