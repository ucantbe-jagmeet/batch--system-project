import React from "react";

interface IButton {
  text: string;
  className?: string;
  icon: boolean;
}

const Button = ({ text, icon, className }: IButton) => {
  return (
    <button
      className={`flex items-center justify-center w-44 lg:h-[3.75rem] h-[2.6rem] bg-black rounded cursor-pointer dark:bg-white dark:border-2 dark:border-black text-black ${className} `}
      type="button"
    >
      <h2 className="text-white text-xl dark:text-black ">{text}</h2>
      {icon ? (
        <h2 className="text-white ml-1 dark:text-black">{"-->"}</h2>
      ) : null}
    </button>
  );
};

export default Button;
