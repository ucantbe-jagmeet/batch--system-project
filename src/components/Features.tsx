import React from "react";
import Img from "../../public/assets/featuresIphone.png";
import Image from "next/image";

import icon1 from "../../public/assets/feat-icon-1.png";
import icon2 from "../../public/assets/feat-icon-2.png";
import icon3 from "../../public/assets/feat-icon-3.png";
import ColorDrop from "../../public/assets/color-ring.png";

const FeaturesData = [
  {
    iconPath: icon1,
    title: "Budgeting Intervals",
    text: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    iconPath: icon2,
    title: "Budgeting Intervals",
    text: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
  {
    iconPath: icon3,
    title: "Budgeting Intervals",
    text: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
  },
];

const Features = () => {
  return (
    <div className="relative h-screen grid grid-flow-col grid-cols-7 overflow-hidden ">
      <div className="relative lg:col-span-4 px-20">
        <div className="relative z-10 hidden lg:block">
          <Image
            src={Img}
            width={800}
            height={900}
            alt="Iphone 13"
            className="scale-110 transform"
          />
        </div>
        <div className="absolute -top-10 left-140 transform rotate-45 -translate-x-20 -translate-y-20 w-[800px] h-[900px] scale-115 z-0">
          <Image
            src={ColorDrop}
            alt="ColorDrop"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="lg:col-span-3 col-span-7 flex flex-col justify-center lg:-ml-20  lg:w-5/6 relative">
        <div>
          <h2 className="text-[#FF5555] tracking-widest text-xl">FEATURES</h2>
          <h1 className="text-black lg:text-[4rem] text-5xl font-bold">
            Uifry Premium
          </h1>
        </div>
        <div className="mt-5">
          {FeaturesData.map((item, index) => (
            <div key={index}>
              <h2 className="flex items-center">
                <Image
                  src={item.iconPath}
                  alt="img"
                  width={28}
                  height={28}
                  className="mr-2"
                />
                <span className="font-bold text-lg">{item.title}</span>
              </h2>
              <p className="my-5 text-gray-700 tracking-wide w-4/5 lg:w-full">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute top-[300px] -right-[150px] transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] scale-115 z-0 ">
          <Image
            src={ColorDrop}
            alt="ColorDrop"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
