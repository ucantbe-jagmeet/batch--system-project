import React from "react";

interface IButton {
  text: string;
  className?: string;
  icon: boolean;
}

const Button = ({ text, icon, className }: IButton) => {
  return (
    <button
      className={`flex items-center justify-center w-44 h-[3.75rem] bg-black rounded cursor-pointer ${className} `}
      type="button"
    >
      <h2 className="text-white text-xl">{text}</h2>
      {icon ? <h2 className="text-white ml-1">{"-->"}</h2> : null}
    </button>
  );
};

export default Button;
