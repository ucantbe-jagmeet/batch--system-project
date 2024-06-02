import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="lg:w-[1180px] lg:h-[3.75rem] flex items-center justify-between lg:mx-auto mx-10">
      <div className="flex items-center gap-x-10">
        <Logo />
        <ul className="md:flex gap-x-5 hidden">
          {["Home", "About Us", "Pricing", "Features"].map((item, index) => {
            return (
              <li
                key={index}
                className={`font-semibold text-xl ${
                  index === 0
                    ? "text-[#FF5555] dark:text-[#76e688]"
                    : "text-black dark:text-white"
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <ThemeToggle />
      <Button text="Download" icon={false} />
    </div>
  );
};

export default Navbar;
