import React from "react";

interface IButton {
  text: string;
  icon: boolean;
}

const Button = ({ text, icon }: IButton) => {
  return (
    <div className="flex items-center justify-center w-44 h-[3.75rem] bg-black rounded">
      <h2 className="text-white text-xl">{text}</h2>
      {icon ? <h2 className="text-white ml-1">{"-->"}</h2> : null}
    </div>
  );
};

export default Button;
